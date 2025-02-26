import UsersManager from "@/components/molecules/UsersManager";
import "@/styles/globals.css";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen bg-blue-100">
      <header className="flex items-center justify-center h-24 bg-blue-200">HEADER</header>
      <main className="flex flex-grow items-center justify-center bg-white">
        <UsersManager />
      </main>
      <footer className="flex items-center justify-center h-48 bg-blue-400">FOOTER</footer>
    </section>
  );
}
