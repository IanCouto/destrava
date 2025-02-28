"use client";

import { LockKeyhole, LockKeyholeOpen, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Footer() {
  const [activeTab, setActiveTab] = useState<string>("user");
  const router = useRouter();

  const handleNavigation = (tab: string, path: string) => {
    setActiveTab(tab);
    router.push(path);
  };

  return (
    <footer className="flex items-center justify-between bg-card fixed bottom-0 w-full h-16 px-4">
      <User
        className={`cursor-pointer ${activeTab === "user" ? "text-secondary" : "text-primary"}`}
        onClick={() => handleNavigation("user", "/")}
      />

      {activeTab === "lock" ? (
        <LockKeyholeOpen
          className={`cursor-pointer ${activeTab === "lock" ? "text-secondary" : "text-primary"}`}
          onClick={() => handleNavigation("lock", "/colorPick2")}
        />
      ) : (
        <LockKeyhole
          className={`cursor-pointer ${activeTab === "lock" ? "text-secondary" : "text-primary"}`}
          onClick={() => handleNavigation("lock", "/colorPick2")}
        />
      )}

      <User
        className={`cursor-pointer ${activeTab === "user1" ? "text-secondary" : "text-primary"}`}
        onClick={() => handleNavigation("user1", "/dashboard")}
      />

      <User
        className={`cursor-pointer ${activeTab === "user2" ? "text-secondary" : "text-primary"}`}
        onClick={() => handleNavigation("user2", "/login")}
      />
    </footer>
  );
}
