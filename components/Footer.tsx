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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
            
            {/* Column 1: Newsletter & Socials */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2 uppercase tracking-wide">
                  Receba nossas novidades
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  Inscreva-se para receber dicas de saúde, atualizações sobre tratamentos e novidades da nossa clínica.
                </p>
                <form className="flex w-full max-w-md relative group" onSubmit={(e) => e.preventDefault()}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-rounded text-secondary/50 dark:text-white/50">mail</span>
                  </div>
                  <input 
                    className="w-full pl-10 pr-14 py-4 rounded-xl bg-secondary/5 dark:bg-white/5 border border-secondary/10 dark:border-white/10 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:focus:ring-primary/30 transition-all backdrop-blur-sm" 
                    placeholder="Seu e-mail aqui" 
                    type="email" 
                  />
                  <button 
                    className="absolute right-2 top-2 bottom-2 bg-secondary hover:bg-primary text-white rounded-lg px-4 flex items-center justify-center transition-colors shadow-md group-focus-within:bg-primary group-focus-within:text-white group-focus-within:font-bold" 
                    type="button"
                  >
                    <span className="material-symbols-rounded text-sm transform -rotate-12">send</span>
                  </button>
                </form>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-3 mt-2">
                {[
                  { path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { path: "M19.001 4.908C17.19 3.098 14.782 2.1 12.23 2.1c-5.526 0-10.021 4.496-10.024 10.024-.001 1.767.46 3.492 1.336 5.01L2.4 22l5.036-1.321c1.464.798 3.111 1.218 4.79 1.219h.004c5.524 0 10.021-4.497 10.024-10.025.002-2.678-.999-5.197-2.809-7.005h-.044zm-6.772 13.342c-2.484 0-4.922-1.285-6.471-3.37-1.549-2.085-1.549-4.938 0-7.023 1.549-2.085 3.987-3.37 6.471-3.37 2.484 0 4.922 1.285 6.471 3.37 1.549 2.085 1.549 4.938 0 7.023-1.549 2.085-3.987 3.37-6.471 3.37z", path2: "M17.472 14.382c-.289-.145-1.711-.845-1.975-.941-.264-.096-.456-.145-.648.145-.193.289-.746.941-.914 1.134-.168.193-.337.217-.625.072-.289-.145-1.219-.449-2.321-1.431-.861-.768-1.442-1.716-1.61-2.006-.168-.289-.018-.445.126-.589.131-.289-.337.433-.506.145-.168.193-.289.289-.481.096-.193.048-.361-.024-.506-.072-.145-.648-1.562-.889-2.14-.234-.563-.473-.486-.648-.495-.168-.009-.361-.009-.553-.009-.193 0-.505.072-.77.361-.264.289-1.01 1.01-1.01 2.408s1.035 2.746 1.179 2.939c.145.193 2.037 3.109 4.934 4.361 2.897 1.252 2.897.834 3.426.785.529-.048 1.711-.699 1.951-1.374.241-.675.241-1.254.169-1.374-.072-.12-.264-.192-.553-.337z" }
                ].map((icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white text-white flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={icon.path} />
                      {icon.path2 && <path d={icon.path2} />}
                    </svg>
                  </a>
                ))}
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white text-white flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1">
                  <span className="material-symbols-rounded text-lg">post_add</span>
                </a>
              </div>
            </div>

            {/* Column 2: Address */}
            <div className="lg:col-span-3">
              <h4 className="text-secondary dark:text-white font-bold mb-5 flex items-center gap-2">
                <span className="material-symbols-rounded text-accent text-lg">location_on</span>
                Unidade SBC
              </h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="leading-relaxed">
                    Rua Jurubatuba, 1350<br />
                    Centro, São Bernardo do Campo<br />
                    SP, 09725-000
                  </span>
                </li>
                <li className="flex items-center gap-3 font-semibold text-secondary dark:text-blue-300">
                  <span className="material-symbols-rounded text-accent text-base">chat</span>
                  <a href="#" className="hover:underline hover:text-primary transition-colors">(11) 94722-0946</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-slate-400 text-base">phone</span>
                  <span>(11) 4330-0000</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Hours */}
            <div className="lg:col-span-2">
              <h4 className="text-secondary dark:text-white font-bold mb-5 flex items-center gap-2">
                <span className="material-symbols-rounded text-accent text-lg">schedule</span>
                Horários
              </h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex flex-col">
                  <span className="font-semibold text-secondary dark:text-slate-200">Segunda a Sexta</span>
                  <span>08:00 - 18:00</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-secondary dark:text-slate-200">Sábado</span>
                  <span>08:00 - 12:00</span>
                </li>
                <li className="flex flex-col opacity-60">
                  <span className="font-semibold">Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Links */}
            <div className="lg:col-span-2">
              <h4 className="text-secondary dark:text-white font-bold mb-5 flex items-center gap-2">
                <span className="material-symbols-rounded text-accent text-lg">link</span>
                Links Rápidos
              </h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                {['Política de Privacidade', 'Termos de Uso', 'Site Seguro', 'Trabalhe Conosco'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary dark:hover:text-accent hover:pl-1 transition-all flex items-center gap-1">
                      <span className="material-symbols-rounded text-xs opacity-50">arrow_forward_ios</span>
                      {link}
                    </a>
                  </li>
                ))}
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
                    src="https://docs.qozt.com.br/logo/op7/logo_azul_recorte.svg" 
                    alt="OP7 Franchising" 
                    className="h-6 w-auto" 
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