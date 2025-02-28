"use client";

import { useState, useEffect, useRef } from "react";
import { getUsers } from "@/query/user/getUsers";
import { updateUser } from "@/query/user/updateUser";
import { deleteUser } from "@/query/user/deleteUser";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Loader2, Pencil, Trash2, Save, XCircle } from "lucide-react";
import { toast } from "sonner";

type User = {
  id: number;
  name: string;
  email: string;
};

interface ShowUsersProps {
  refreshCounter: number;
}

interface OverflowMarqueeProps {
  text: string;
  className?: string;
}

function OverflowMarquee({ text, className = "" }: OverflowMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (container && textElement) {
      setIsOverflowing(textElement.scrollWidth > container.offsetWidth);
    }
  }, [text]);

  return (
    <div ref={containerRef} className={`max-w-[150px] overflow-hidden whitespace-nowrap ${className}`}>
      <span ref={textRef} className={`inline-block ${isOverflowing ? "animate-marquee" : ""}`}>
        {text}
      </span>
    </div>
  );
}

export default function ShowUsers({ refreshCounter }: ShowUsersProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const usersData = await getUsers();
    setUsers(usersData);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [refreshCounter]);

  const handleEditClick = (user: User) => {
    setEditingUser(user);
  };

  const handleUpdate = async () => {
    if (!editingUser) return;
    setLoading(true);
    const result = await updateUser(editingUser.id, editingUser.name, editingUser.email);

    if (result) {
      toast.success("User updated successfully!");
      fetchUsers();
      setEditingUser(null);
    } else {
      toast.error("Error updating user.");
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    const result = await deleteUser(id);
    if (result) {
      toast.success("User deleted successfully!");
      fetchUsers();
    } else {
      toast.error("Error deleting user.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 max-h-[1000vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">User List</h2>

      {loading && (
        <div className="flex justify-center mb-4">
          <Loader2 className="animate-spin w-6 h-6" />
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  ) : (
                    <OverflowMarquee text={user.name} />
                  )}
                </TableCell>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                  ) : (
                    <OverflowMarquee text={user.email} />
                  )}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  {editingUser?.id === user.id ? (
                    <>
                      <Button onClick={handleUpdate} size="icon" variant="default">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      </Button>
                      <Button onClick={() => setEditingUser(null)} size="icon" variant="destructive">
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <div className="flex justify-between gap-2">
                      <Button onClick={() => handleEditClick(user)} size="icon" variant="outline">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button onClick={() => handleDelete(user.id)} size="icon" variant="destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
