import React from 'react';
import { Reveal } from './Reveal';

const Footer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-16 md:pt-32 pb-8 md:pb-12">
      <Reveal direction="up" threshold={0.1}>
        <footer className="bg-secondary/10 dark:bg-[#1e293b] rounded-[2rem] shadow-2xl shadow-blue-900/5 dark:shadow-none p-8 md:p-12 lg:p-16 relative overflow-hidden transition-all duration-300 font-display">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          {/* Brand Header */}
          <div className="flex flex-col items-center justify-center mb-10 relative z-10">
            <img 
              src="https://docs.qozt.com.br/landing_pages/doutorFeridas/logoDoutorFeridas.png" 
              alt="Doutor Feridas" 
              className="h-24 md:h-32 w-auto object-contain mb-4"
            />
          </div>

          <hr className="border-t border-slate-100 dark:border-slate-700 mb-12" />

          {/* Main Content - Centered and Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-4xl mx-auto relative z-10">
            
            {/* Column 1: Address */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h4 className="text-secondary dark:text-white font-bold mb-6 flex items-center gap-2 text-xl">
                Unidade SBC
                <span className="material-symbols-rounded text-accent text-2xl">location_on</span>
              </h4>
              <ul className="space-y-4 text-base text-slate-600 dark:text-slate-400">
                <li className="flex flex-col items-center md:items-end gap-1">
                  <span className="leading-relaxed">
                    Rua Jurubatuba, 1350<br />
                    Centro, São Bernardo do Campo<br />
                    SP, 09725-000
                  </span>
                </li>
                <li className="flex flex-col items-center md:items-end gap-2 mt-2">
                  <a 
                    href="https://wa.me/5511974736662?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-secondary dark:text-blue-300 hover:text-primary transition-colors text-lg"
                  >
                    (11) 97473-6662
                    <span className="material-symbols-rounded text-accent text-lg">chat</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <span>(11) 4330-0000</span>
                    <span className="material-symbols-rounded text-slate-400 text-lg">phone</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 2: Hours */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-secondary dark:text-white font-bold mb-6 flex items-center gap-2 text-xl">
                <span className="material-symbols-rounded text-accent text-2xl">schedule</span>
                Horários de Atendimento
              </h4>
              <ul className="space-y-4 text-base text-slate-600 dark:text-slate-400 w-full max-w-xs">
                <li className="flex flex-col pb-3 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="font-bold text-secondary dark:text-slate-200 text-lg">Segunda a Sexta</span>
                  <span>08:00 às 18:00</span>
                </li>
                <li className="flex flex-col pb-3 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="font-bold text-secondary dark:text-slate-200 text-lg">Sábado</span>
                  <span>08:00 às 12:00</span>
                </li>
                <li className="flex flex-col opacity-70">
                  <span className="font-bold">Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500 relative z-10">
            <p>
              © 2026 Doutor Feridas | Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>Desenvolvido por</span>
                <a href="https://op7franchising.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img 
                    src="https://docs.qozt.com.br/logo/op7/logo_escrita_preta.svg" 
                    alt="OP7 Franchising" 
                    className="h-10 w-auto" 
                  />
                </a>
              </div>
              <a href="#" className="hover:text-secondary dark:hover:text-slate-300 transition-colors">Privacidade</a>
            </div>
          </div>
        </footer>
      </Reveal>
    </div>
  );
};

export default Footer;