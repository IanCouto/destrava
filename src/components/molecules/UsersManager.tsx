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
    <div className="w-full h-full flex flex-col">
      <div className="mt-4">
        <AddUserForm onUserAdded={refreshUsers} />
      </div>
      <ShowUsers refreshCounter={refreshCounter} />
    </div>
  );
}
