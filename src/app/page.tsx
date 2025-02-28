import UsersManager from "@/components/molecules/UsersManager";
import "@/styles/globals.css";

export default function Home() {


  return (
    <section className="flex flex-col min-h-screen bg-background">
      <main className="flex flex-grow items-center justify-center bg-background">
        <UsersManager />
      </main>
    </section>
  );
}
