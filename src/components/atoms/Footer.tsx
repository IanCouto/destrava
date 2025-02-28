"use client";

import { LockKeyhole, LockKeyholeOpen, User } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [activeTab, setActiveTab] = useState<string>("user");

  return (
    <footer className="flex items-center justify-between bg-card fixed bottom-0 w-full h-16 px-4">
      <User
        className={`cursor-pointer ${activeTab === "user" ? "text-secondary" : "text-primary"}`}
        onClick={() => setActiveTab("user")}
      />

      {activeTab === "lock" ? (
        <LockKeyholeOpen
          className={`cursor-pointer ${activeTab === "lock" ? "text-secondary" : "text-primary"}`}
          onClick={() => setActiveTab("lock")}
        />
      ) : (
        <LockKeyhole
          className={`cursor-pointer ${activeTab === "lock" ? "text-secondary" : "text-primary"}`}
          onClick={() => setActiveTab("lock")}
        />
      )}

      <User
        className={`cursor-pointer ${activeTab === "user1" ? "text-secondary" : "text-primary"}`}
        onClick={() => setActiveTab("user1")}
      />

      <User
        className={`cursor-pointer ${activeTab === "user2" ? "text-secondary" : "text-primary"}`}
        onClick={() => setActiveTab("user2")}
      />

    </footer>
  );
}
