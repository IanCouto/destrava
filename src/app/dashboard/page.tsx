import { getServerSession } from "next-auth";
import LogoutButton from "@/components/atoms/LogoutButton";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();

  if(!session) redirect("/login");

  return (
    <div>
      <header>Dashboard</header>
      <div>Olá {session?.user?.name}</div>
      <div>
        <LogoutButton />
      </div>
    </div>  
  )
}