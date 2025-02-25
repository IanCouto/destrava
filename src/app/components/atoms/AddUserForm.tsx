"use client";

import { useState } from "react";
import { setUser } from "@/query/user/setUser";

interface AddUserFormProps {
  onUserAdded: () => void;
}

export default function AddUserForm({ onUserAdded }: AddUserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await setUser(name, email);

    if (result === true) {
      setMessage("✅ User added successfully!");
      setName("");
      setEmail("");
      onUserAdded();
    } else {
      setMessage("❌ Error adding user.");
    }
    
    setTimeout(() => {
      setMessage("");
    }, 5000);

    setLoading(false);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto mb-6">
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
      {message && <p className="mt-2 text-center">{message}</p>}
    </div>
  );
}
