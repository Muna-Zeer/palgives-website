import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar/>
      {/* Hero Section Placeholder */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          Partnership for Active Leadership
        </h1>
        <><p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">Empowering youth, supporting education, advancing women s initiatives, and promoting preventive family health.
                    </p></>
        <button className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-md shadow-lg transition-colors">
          Donate Now
        </button>
      </section>
    </main>
  );
}
