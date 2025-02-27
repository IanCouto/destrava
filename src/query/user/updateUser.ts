import { supabase } from "@/lib/supabase";

export async function updateUser(
  id: number,
  name: string,
  email: string
): Promise<boolean> {
  const { error } = await supabase
    .from("user")
    .update({ name, email })
    .eq("id", id);

  if (error) {
    console.error("Error updating user:", error);
    return false;
  }
  return true;
}
