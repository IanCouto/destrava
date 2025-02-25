"use client";

import { useState } from "react";
import AddUserForm from "@/atoms/AddUserForm";
import ShowUsers from "@/atoms/ShowUsers";

export default function UsersManager() {
  const [refreshCounter, setRefreshCounter] = useState(0);

  const refreshUsers = () => {
    setRefreshCounter((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <AddUserForm onUserAdded={refreshUsers} />
      <ShowUsers refreshCounter={refreshCounter} />
    </div>
  );
}
