import React from 'react';
import { Reveal } from './Reveal';

const HowItWorks: React.FC = () => {
  return (
    <section className="min-h-screen py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50/30 dark:from-background-dark dark:to-background-dark flex flex-col justify-center items-center overflow-hidden">
      
      {/* Header */}
      <header className="text-center mb-12 lg:mb-20 max-w-4xl mx-auto relative z-10">
        <Reveal>
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider mb-6 shadow-sm uppercase">
            Passo a Passo
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-white tracking-tight mb-4">
            Como Funciona o Atendimento
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Um protocolo simples, claro e seguro para a sua recuperação.
          </p>
        </Reveal>
      </header>

      {/* MOBILE TIMELINE (Vertical, Simple) - Shown only on screens smaller than LG */}
      <div className="w-full max-w-lg mx-auto lg:hidden relative pl-4 pb-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
        
        <div className="space-y-12">
           {/* Step 1 */}
           <Reveal delay={100} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-primary z-10 shadow-[0_0_10px_rgba(30,136,201,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">stethoscope</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Avaliação clínica</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Análise detalhada da ferida, histórico médico e fatores que influenciam a cicatrização.
              </p>
           </Reveal>

           {/* Step 2 */}
           <Reveal delay={200} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-secondary z-10 shadow-[0_0_10px_rgba(6,44,82,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">assignment</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Plano individualizado</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Desenvolvimento de um protocolo de cuidados personalizado e exclusivo para suas necessidades.
              </p>
           </Reveal>

           {/* Step 3 */}
           <Reveal delay={300} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-primary z-10 shadow-[0_0_10px_rgba(30,136,201,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">trending_up</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Acompanhamento</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Monitoramento contínuo do progresso, com ajustes no tratamento conforme a evolução.
              </p>
           </Reveal>

           {/* Step 4 */}
           <Reveal delay={400} className="relative pl-10">
              <div className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-background-dark border-4 border-secondary z-10 shadow-[0_0_10px_rgba(6,44,82,0.5)]"></div>
              <div className="mb-3 flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary">
                    <span className="material-symbols-rounded text-2xl text-accent">healing</span>
                 </div>
                 <h3 className="text-xl font-bold text-secondary dark:text-white">Cicatrização + Prevenção</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Foco na cicatrização completa e implementação de estratégias para evitar novas lesões.
              </p>
           </Reveal>
        </div>
      </div>

      {/* DESKTOP TIMELINE (SVG Wave) - Hidden on Mobile */}
      <div className="hidden lg:block w-full overflow-x-auto pb-12 px-4 hide-scrollbar">
        <div className="relative w-[1200px] h-[600px] mx-auto">
          
          {/* SVG Wave Line Container - Set z-0 to be behind everything */}
          <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#1E88C9" stopOpacity="0.4" /> {/* Brand Blue - Low Opacity */}
                <stop offset="50%" stopColor="#062C52" stopOpacity="0.6" /> {/* Brand Dark */}
                <stop offset="100%" stopColor="#1E88C9" stopOpacity="0.4" /> {/* Brand Blue */}
              </linearGradient>
            </defs>
            
            {/* 1. Base Path (The background wire) */}
            <path 
              d="M 150,100 C 300,100 300,400 450,400 C 600,400 600,100 750,100 C 900,100 900,400 1050,400" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeLinecap="round" 
              strokeWidth="12"
              className="drop-shadow-xl"
              style={{ filter: 'blur(1px)' }}
            />
            
            {/* 2. LED Pulse Path (The animated light) */}
            <path 
              d="M 150,100 C 300,100 300,400 450,400 C 600,400 600,100 750,100 C 900,100 900,400 1050,400" 
              fill="none" 
              stroke="white" 
              strokeLinecap="round" 
              strokeWidth="4"
              className="animate-led-flow drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
            />
          </svg>

          {/* Step 1: UP (Text Top, Bubble Bottom) */}
          <Reveal 
            delay={100} 
            className="absolute flex flex-col items-center z-10 w-[200px]" 
            style={{ left: '50px', top: '0' }}
          >
            <div className="w-[240px] text-center mb-8">
              <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-2">Avaliação clínica completa</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Análise detalhada da ferida, histórico médico e fatores que influenciam a cicatrização.
              </p>
            </div>
            {/* Circle Container: Added bg-white and z-10 to mask the line behind */}
            <div className="w-[200px] h-[200px] rounded-full relative z-10 glass border border-white/80 dark:border-slate-700 shadow-2xl flex items-center justify-center transition-transform hover:scale-105 duration-300 group bg-white dark:bg-slate-900">
              <span className="absolute top-4 font-display text-6xl font-black text-primary/40 dark:text-primary/40 z-0">01</span>
              <div className="relative z-10 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-rounded text-7xl drop-shadow-lg text-accent">stethoscope</span>
              </div>
            </div>
          </Reveal>

          {/* Step 2: DOWN (Bubble Top, Text Bottom) */}
          <Reveal 
            delay={300} 
            className="absolute flex flex-col items-center z-10 w-[200px]" 
            style={{ left: '350px', top: '300px' }}
          >
             {/* Circle Container: Added bg-white and z-10 to mask the line behind */}
            <div className="w-[200px] h-[200px] rounded-full relative z-10 glass border border-white/80 dark:border-slate-700 shadow-2xl flex items-center justify-center transition-transform hover:scale-105 duration-300 mb-8 group bg-white dark:bg-slate-900">
              <span className="absolute top-4 font-display text-6xl font-black text-primary/40 dark:text-primary/40 z-0">02</span>
              <div className="relative z-10 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-rounded text-7xl drop-shadow-lg text-accent">assignment</span>
              </div>
            </div>
            <div className="w-[240px] text-center">
              <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-2">Plano individualizado</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Desenvolvimento de um protocolo de cuidados personalizado e exclusivo para suas necessidades.
              </p>
            </div>
          </Reveal>

          {/* Step 3: UP (Text Top, Bubble Bottom) */}
          <Reveal 
            delay={500} 
            className="absolute flex flex-col items-center z-10 w-[200px]" 
            style={{ left: '650px', top: '0' }}
          >
            <div className="w-[240px] text-center mb-8">
              <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-2">Acompanhamento</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Monitoramento contínuo do progresso, com ajustes no tratamento conforme a evolução.
              </p>
            </div>
             {/* Circle Container: Added bg-white and z-10 to mask the line behind */}
            <div className="w-[200px] h-[200px] rounded-full relative z-10 glass border border-white/80 dark:border-slate-700 shadow-2xl flex items-center justify-center transition-transform hover:scale-105 duration-300 group bg-white dark:bg-slate-900">
              <span className="absolute top-4 font-display text-6xl font-black text-primary/40 dark:text-primary/40 z-0">03</span>
              <div className="relative z-10 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-rounded text-7xl drop-shadow-lg text-accent">trending_up</span>
              </div>
            </div>
          </Reveal>

          {/* Step 4: DOWN (Bubble Top, Text Bottom) */}
          <Reveal 
            delay={700} 
            className="absolute flex flex-col items-center z-10 w-[200px]" 
            style={{ left: '950px', top: '300px' }}
          >
             {/* Circle Container: Added bg-white and z-10 to mask the line behind */}
            <div className="w-[200px] h-[200px] rounded-full relative z-10 glass border border-white/80 dark:border-slate-700 shadow-2xl flex items-center justify-center transition-transform hover:scale-105 duration-300 mb-8 group bg-white dark:bg-slate-900">
              <span className="absolute top-4 font-display text-6xl font-black text-primary/40 dark:text-primary/40 z-0">04</span>
              <div className="relative z-10 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-rounded text-7xl drop-shadow-lg text-accent">healing</span>
              </div>
            </div>
            <div className="w-[240px] text-center">
              <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-2">Cicatrização + Prevenção</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Foco na cicatrização completa e implementação de estratégias para evitar novas lesões.
              </p>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Footer / Call to Action */}
      <footer className="text-center mt-8 md:mt-16 relative z-10">
        <Reveal delay={800}>
          <p className="text-lg text-secondary dark:text-white font-medium mb-6">
            Quer saber como seria no seu caso? Fale com nossa equipe.
          </p>
          <a 
            href="#" 
            className="
              relative overflow-hidden
              bg-gradient-to-r from-secondary to-primary
              text-white
              px-10 py-4 rounded-full
              font-bold text-lg
              whitespace-nowrap
              shadow-[0_10px_25px_-5px_rgba(30,136,201,0.4)]
              hover:shadow-[0_20px_35px_-5px_rgba(30,136,201,0.5)]
              hover:-translate-y-1
              transition-all duration-300
              group
              w-full sm:w-auto
              flex items-center justify-center gap-3
              border-t border-white/20
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                {/* WhatsApp Icon */}
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              Chamar no WhatsApp
            </span>
            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </Reveal>
      </footer>

    </section>
  );
};

export default HowItWorks;