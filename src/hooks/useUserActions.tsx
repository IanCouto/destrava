import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
} | null;


export default function useUserActions() {
  const [selectedUser, setSelectedUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const setSelectedUserForUpdate = (user: User) => {
    setSelectedUser(user);
  };

  const clearSelectedUser = () => {
    setSelectedUser(null);
  };

  const setLoadingState = (loadingState: boolean) => {
    setLoading(loadingState);
  };

  const setMessageState = (msg: string) => {
    setMessage(msg);
  };

  return {
    selectedUser,
    loading,
    message,
    setSelectedUserForUpdate,
    clearSelectedUser,
    setLoadingState,
    setMessageState,
  };
}
