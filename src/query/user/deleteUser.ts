import { supabase } from "@/lib/supabase";

export async function deleteUser(id: number): Promise<boolean> {
  const { error } = await supabase
    .from("user")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting user:", error);
    return false;
  }
  return true;
}
