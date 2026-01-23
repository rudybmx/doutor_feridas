import React from 'react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-12 lg:py-28 overflow-hidden bg-white/50 dark:bg-transparent">
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="left">
              <div className="relative rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-none h-[350px] lg:h-[500px] w-full group transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20">
                <img 
                  alt="Modern medical facility in São Bernardo do Campo" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNiMoPkxOY_OTrzgoGioljXI37zJk6_9PanLVpGv3cv-KvKd7OrAJuzgKZM6_qQWBhoRs90pV9V3UcggVQ-C4ykhAXS2xk-qcoYAXhjCuMMFMW1aAzTXXh2e7RWT7xGwHAe83hwfkq4z0pEkVKA1TcrF4CyEEjv6zcgPddyckUnNDtLjugAHoCAEz5lIE8Y-A8cu-HnUquou82-4CEHPwvvQ0MjS0iwY6sL5hxBDfIyMAtEpwv-vPtKwTjBMRyyXwzJ1rJDIdcG-FI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent mix-blend-overlay"></div>
              </div>
            </Reveal>
            
            {/* Floating Info Card - Hidden on Mobile to save space, shown lg+ */}
            <div className="hidden lg:block absolute bottom-8 right-6 w-64 animate-float z-20">
              <Reveal delay={300} direction="up">
                <div className="glass-card p-6 rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md cursor-default">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg">
                      <span className="material-symbols-rounded">medical_services</span>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-300 uppercase bg-white/50 dark:bg-black/20 px-2 py-1 rounded">Doutor Feridas</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wide">Desde</p>
                    <p className="text-lg font-extrabold text-secondary dark:text-white">20/10/2015</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                        Comprometidos com sua cicatrização e bem-estar.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-6 lg:pl-10">
            <Reveal delay={100}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
                  Sobre Nós
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary dark:text-white mb-6 leading-tight">
                  DOR, INCÔMODO OU <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">LIMITAÇÃO?</span>
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-10">
                <p>
                    Feridas crônicas não são apenas machucados na pele; são sinais de alerta. Muitas vezes, elas se recusam a cicatrizar sozinhas devido a causas ocultas e complexas, como diabetes descompensada ou problemas sérios de circulação.
                </p>
                <p>
                    Esperar o tempo passar pode agravar o quadro. Na nossa clínica em <strong className="text-secondary dark:text-white font-semibold">São Bernardo do Campo</strong>, utilizamos tecnologia regenerativa de ponta para identificar a raiz do problema e proporcionar o alívio que você busca.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <a 
                  className="
                    relative overflow-hidden
                    bg-gradient-to-r from-secondary to-primary
                    text-white
                    px-8 py-4 rounded-full
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
                  href="#"
                >
                    <span className="relative z-10">Falar com a equipe</span>
                    <span className="material-symbols-rounded relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-secondary dark:text-primary transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <span className="material-symbols-rounded">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Alguma dúvida?</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">+55 11 99999-9999</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;