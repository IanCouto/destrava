"use client";

import { useState, useEffect } from "react";
import { getUsers } from "@/query/user/getUsers";
import { updateUser } from "@/query/user/updateUser";
import { deleteUser } from "@/query/user/deleteUser";

type User = {
  id: number;
  name: string;
  email: string;
};

interface ShowUsersProps {
  refreshCounter: number;
}

export default function ShowUsers({ refreshCounter }: ShowUsersProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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
    setMessage("");
  };

  const handleUpdate = async () => {
    if (!editingUser) return;
    setLoading(true);
    const result = await updateUser(editingUser.id, editingUser.name, editingUser.email);
    if (result) {
      setMessage("✅ User updated successfully!");
      fetchUsers();
      setEditingUser(null);
    } else {
      setMessage("❌ Error updating user.");
    }
    setLoading(false);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    const result = await deleteUser(id);
    if (result) {
      setMessage("✅ User deleted successfully!");
      fetchUsers();
    } else {
      setMessage("❌ Error deleting user.");
    }
    setLoading(false);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>
      {message && <p className="text-center mb-2">{message}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li
                key={user.id}
                className="border-b p-2 flex justify-between items-center"
              >
                <div>
                  {editingUser?.id === user.id ? (
                    <>
                      <input
                        type="text"
                        value={editingUser.name}
                        onChange={(e) =>
                          setEditingUser({ ...editingUser, name: e.target.value })
                        }
                        className="p-1 border mr-2"
                      />
                      <input
                        type="email"
                        value={editingUser.email}
                        onChange={(e) =>
                          setEditingUser({ ...editingUser, email: e.target.value })
                        }
                        className="p-1 border"
                      />
                    </>
                  ) : (
                    <span>
                      {user.name} - {user.email}
                    </span>
                  )}
                </div>
                <div className="space-x-2">
                  {editingUser?.id === user.id ? (
                    <>
                      <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        {loading ? "Updating..." : "Save"}
                      </button>
                      <button
                        onClick={() => setEditingUser(null)}
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(user)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      )}
    </div>
  );
}
