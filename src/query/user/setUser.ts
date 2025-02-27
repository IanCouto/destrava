import { supabase } from "@/lib/supabase";

export async function setUser(name: string, email: string) {
  const { error } = await supabase.from("user").insert([{ name, email }]);

  if (error) {
    console.error("Error inserting user:", error);
    return null;
  }

  return true;
}
