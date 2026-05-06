import React from 'react';
import Head from 'next/head';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans overflow-hidden selection:bg-purple-500/30">
      <Head>
        <title>NEWW(AI)VE | Futuristic Techwear</title>
      </Head>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 flex justify-between items-center px-12 py-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter">
            NEWW<span className="text-purple-500">(AI)</span>VE
          </span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-xs uppercase tracking-widest text-gray-400">Menu</span>
          <button className="flex flex-col gap-1.5 group">
            <div className="w-8 h-0.5 bg-white transition-all group-hover:w-6" />
            <div className="w-8 h-0.5 bg-white transition-all group-hover:w-4" />
          </button>
        </div>
      </nav>

      <main className="relative grid grid-cols-12 min-h-[calc(100vh-120px)] px-12 pb-12">
        
        {/* --- HERO SECTION --- */}
        <div className="relative col-span-8 flex items-center justify-center">
          {/* Background Typography */}
          <div className="absolute inset-0 flex flex-col justify-center select-none pointer-events-none">
            <h1 className="text-[18vw] font-black leading-none text-transparent stroke-white/10" 
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.08)' }}>
              DO
            </h1>
            <h1 className="text-[18vw] font-black leading-none text-transparent stroke-white/10 mt-[-4vw]"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.08)' }}>
              XO
            </h1>
          </div>

          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-700">
             {/* Simulating the main character image with a placeholder that matches the lighting */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" 
                alt="Techwear model"
                className="w-full h-full object-cover grayscale brightness-75"
              />
              {/* Neon Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
              
              {/* Rim Light Effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500/20 to-transparent blur-md opacity-50" />
            </div>
          </div>
        </div>

        {/* --- RIGHT PANEL --- */}
        <div className="col-span-4 flex flex-col gap-6 relative z-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 h-full flex flex-col">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight">
                NEWW<span className="text-purple-500">(AI)</span>VE
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                A combination of modern streetwear with advanced technological wearables, for a unique style.
              </p>
            </div>

            <button className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-6 py-4 transition-all group w-max gap-12">
              <span className="text-sm font-medium tracking-wide">Discover</span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/40">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>

            {/* Thumbnail Grid */}
            <div className="mt-auto grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-500/50 transition-colors cursor-pointer group">
                  <div className="w-full h-full bg-gray-800 animate-pulse group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER WIDGET --- */}
      <div className="fixed bottom-12 left-12 z-50">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 max-w-xs group hover:bg-white/10 transition-all cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.2em] text-purple-400 font-bold block mb-2">New Release</span>
          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            This is concept art using artificial technology & Photoshop
          </p>
          <button className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold group-hover:text-purple-400 transition-colors">
            Discover 
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Socials / Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-[10px] tracking-widest vertical-text uppercase text-gray-500">
        <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
        <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
      </div>
    </div>
  );
};

export default LandingPage;