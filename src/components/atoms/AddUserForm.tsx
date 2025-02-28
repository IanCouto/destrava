"use client";

import { useState } from "react";
import { toast } from "sonner";
import { setUser } from "@/query/user/setUser";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";

interface AddUserFormProps {
  onUserAdded: () => void;
}

export default function AddUserForm({ onUserAdded }: AddUserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await setUser(name, email);

    if (result) {
      toast.success("User added successfully!");
      setName("");
      setEmail("");
      onUserAdded();
    } else {
      toast.error("Error adding user.");
    }

    setLoading(false);
  };

  return (
    <Card className="max-w-md mx-auto mb-6">
      <CardHeader>
        <CardTitle>Add User</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add User"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
