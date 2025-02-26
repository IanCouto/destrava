import "@/styles/globals.css";

export default function ColorPick() {
  return (
    <section className="flex w-full h-screen">
      {/* First Column */}
      <div className="flex flex-col w-1/2 h-full">
        <div className="bg-sky-50 flex-1"></div>
        <div className="bg-sky-100 flex-1"></div>
        <div className="bg-sky-200 flex-1"></div>
        <div className="bg-sky-300 flex-1"></div>
        <div className="bg-sky-400 flex-1"></div>
        <div className="bg-sky-500 flex-1"></div>
        <div className="bg-sky-600 flex-1"></div>
        <div className="bg-sky-700 flex-1"></div>
        <div className="bg-sky-800 flex-1"></div>
        <div className="bg-sky-900 flex-1"></div>
        <div className="bg-sky-950 flex-1"></div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col w-1/2 h-full">
        <div className="bg-orange-50 flex-1"></div>
        <div className="bg-orange-100 flex-1"></div>
        <div className="bg-orange-200 flex-1"></div>
        <div className="bg-orange-300 flex-1"></div>
        <div className="bg-orange-400 flex-1"></div>
        <div className="bg-orange-500 flex-1"></div>
        <div className="bg-orange-600 flex-1"></div>
        <div className="bg-orange-700 flex-1"></div>
        <div className="bg-orange-800 flex-1"></div>
        <div className="bg-orange-900 flex-1"></div>
        <div className="bg-orange-950 flex-1"></div>
      </div>
    </section>
  );
}
