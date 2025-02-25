import { useState } from "react";

export default function useUserActions() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const setSelectedUserForUpdate = (user: any) => {
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
