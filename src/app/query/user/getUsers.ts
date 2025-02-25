import { supabase } from "@/lib/supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("user").select("*");
  
  if (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }

  return data;
}
