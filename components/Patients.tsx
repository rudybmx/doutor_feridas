import React from 'react';
import { Reveal } from './Reveal';

const Patients: React.FC = () => {
  return (
    <section id="pacientes" className="py-12 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-background-dark transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold tracking-wide uppercase shadow-sm">
                  Pacientes
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-secondary dark:text-white leading-tight">
                  PARA QUEM É O <br className="hidden sm:block"/> TRATAMENTO?
                </h2>
              </Reveal>
            </div>
            <div className="max-w-lg md:text-right md:pb-2">
              <Reveal delay={200}>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Nossa abordagem especializada é projetada para resolver casos complexos onde tratamentos convencionais falharam.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1: Idosos */}
          <Reveal delay={0} className="h-full">
            <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Mãos de uma pessoa idosa segurando as mãos de um cuidador" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2kZD9VEwQ84HHlqMiZF8HN0K1V79aNAC_Gt8YpWRwic5Z144Hf2Ta7b-dWZAF1iQTBoClh6GP2JsmCapUjBMAziD5i90qEH_jTADKcEOJoHfsFvHDy9xlbKVSLeca40Ook-8Y_yvNyo2n1I2uyYC9Ripy3VR3dd0pMmkZhJ2F3s1Km-kb0O9KXKyxXHQQnRy_Jp9kSd2pGOIG0KuOWbf4aOkLYI_1frujz3Sae9jJY2iU3IY9jLbFotXFFdw6dGPztKE5GqFBFsK1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Sênior</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">Cuidado Especial</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">Pacientes Idosos</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  Pele fragilizada que requer atenção redobrada e técnicas não-invasivas para acelerar a cicatrização sem causar dor adicional.
                </p>
                <div className="flex items-center text-sm font-bold text-secondary dark:text-slate-200">
                  <img alt="Dra. Helena" className="w-8 h-8 rounded-full mr-3 border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsfklBZ-ZctKONMcCHwgf1TOItpy6ZznDEDmY6mYTkl_xjBb_KLp0IAzyNb8oTpLnMM8JgE2f3PFqqNoR8n5hLHGFrY5SapUuhMN7bSad-DFjf-P0vawLOCMF9ogSCMtSBhsng8b0p_w0mmqKikEdxDMGUEbzq_M1RSo3eFCucWE60xXiK63aUKI-SCI1nGEumvdl6f7fHLetwHAVEo82G3Icq2xdktC4SOSZUah8lfBe_wMep8EUlqBna5dK77qyM2Aj1B4OB3H--" />
                  <span>Recomendado por Dra. Helena</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Diabéticos */}
          <Reveal delay={100} className="h-full">
            <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Medição de glicose para paciente diabético" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRYEuqi_QXCC9eOYrqnWzy6iCUZoGVGNTuPmp-3KE8xWHbzfQsMfO6KKrVYJhzoXfI9j3h-WO3WEENqtnAIlm7ly8UwUDcJaVjjjjsIZ59k91sW-KofPn6b2zUaeKtjKPKI4NnQGoPzazYdEHAJo3GCQZhYvyiFJ91GwFK8uTK6Zr3OWMgmkoHiLnIBtYRnKeucTVBtO4q3b8EW-6F0Z2aPMU-D6T3UP_ssuYqaCR4euaP3bLOYLCNwBJaZqPG6d91Hy5q3E5UIU5O"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Diabetes</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">Pé Diabético</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">Pacientes Diabéticos</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  Tratamento focado na prevenção de amputações e controle rigoroso de infecções em úlceras de difícil cicatrização.
                </p>
                <div className="flex items-center text-sm font-bold text-secondary dark:text-slate-200">
                  <img alt="Dr. Ricardo" className="w-8 h-8 rounded-full mr-3 border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4JJuNhTqmIY2gVBrmtgcq3zcuiFtZwzBFi5j-ZwrCvsO61vb0JclkVE-lANU7yENLNcsMU1Z6p7DteUe08sGhXgK3B6hHhlIlaiRrozNDqz-2QHt6A3CRDTZcx4Lwz0XM3NZKtbQronZBNJ_di8Jkcz8dCRGC_Xgs5oofBUfoEVrbDdMaUBSLcXhgi6jJJKxvEP7rlosQsEqNKttfCrw--R65V6UWmWrgtaLtM57xw6g9M11UE3QVMAJFVR5kY_48c5wKmE0emIc" />
                  <span>Recomendado por Dr. Ricardo</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Problemas Circulatórios */}
          <Reveal delay={200} className="h-full">
            <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Exame vascular nas pernas" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsf69d_yXgiRunYIMHF8cx9aQKIvFiUdccb7Ljoh3L53G_stLrNJgZArBArY10MvxKdAMBUrkC09kJuwZOzk7G3oVxon3RpPEUqTCndHmoUvfDaZJHjcHXhc220SFHjv5R5OZL5oebt5G8L3iKXrBf6ZYhDtnVawCeIGcFeQrmRPhaDTSxup8-qurl1tjSH5THd9xEzGyCFR8mDjpuGcE-QQc6Cb6901XI3t0Y3B155P2QYPO8IzXiZLKYBZgW40WJ6s0GehAgzJCs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Circulação</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300">Vascular</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">Problemas Circulatórios</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  Soluções para úlceras venosas e arteriais, focando na melhoria do fluxo sanguíneo local e regeneração tecidual.
                </p>
                <div className="flex items-center text-sm font-bold text-secondary dark:text-slate-200">
                  <img alt="Dra. Sofia" className="w-8 h-8 rounded-full mr-3 border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC67Iv5EMSY_-EH2NQFIDgaFZsdJSxlEhghHdWFYdSjcu1tLFSYDZBFIR5bHbujduupKrD4zh0CwftRlQ21jSydR-U2UbcGskZYjl9hiTxwZzBr1ou2NzpI7iY7kFJpgdFeF9ibnbT-9KOhcrHvTIWMIUhkqDlbl7kUTHCiR3E4YXn0jAXOcu_z7SdIevqVLC4agOqScq8ueUOkDk1TO8SM0byRzhA8lRXLvO0cqyLjRQCaS_7dVW3ruw3WZEkDhZaMx_s5Jmtoq2XV" />
                  <span>Recomendado por Dra. Sofia</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Feridas Crônicas */}
          <Reveal delay={300} className="h-full">
            <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  alt="Close de curativo avançado em ferida" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj21QgS5Ry27Dwy1gLTZxyR7vtBHemkVJtcV5EGm-ob5EKVH5XNrVQZH5kL8Mz3jbGF29CRJpmaXQReZ6ehZ3lc3R8qAeqJD0sjJ6Ug2EZCyXLRHFdrtZpeqLZBkO2ryIERbrTpyIQ-d62fvzw_eybBKZe8ulZcql2M9v_UhM8yLaGTSItSDtzIUnEJZoiDRSrTkhtPIag1e_b_hli4IAIuUcBzQ4-soRX0EWnIii5rQFsw1wLhuXmSVYIY2fdD3c4qMUI1Ix8ihpw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-80"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Crônico</span>
                  <span className="px-3 py-1 text-xs font-bold rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">Longa Duração</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">Feridas Crônicas</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  Para lesões que persistem há meses ou anos, utilizamos terapias regenerativas avançadas para reativar a cicatrização.
                </p>
                <div className="flex items-center text-sm font-bold text-secondary dark:text-slate-200">
                  <img alt="Dr. Carlos" className="w-8 h-8 rounded-full mr-3 border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDGCVBxbtIIatNhUuhmCvsZg2xD4kMmBStsMGUpsDCfFLh3Z_5UC7_vplUXn-h8Pgv3o6Jwqx7s75ocqgNeGtpcC1nZBVDVTn1Il-mDIlMD2qK1K1eQTwPwobG4NWXFT-AUCqr_5-uDh7Mhnm85_lj88kwTMT6y98uyTTnBdJ3qucSRJUvhbgMQqgII3y46BkzhswniG8NeTQA5YIp7FFD4grkMBUGzeoeSwulml4zWGT7bllyQTkJV-kKaPiXWdhP_RyzeD6_KKjl" />
                  <span>Recomendado por Dr. Carlos</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Falha em Tratamentos Anteriores (Double Width) */}
          <Reveal delay={400} className="md:col-span-2 lg:col-span-2 h-full">
            <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img 
                    alt="Médico consultando paciente com esperança" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlwJkTQhotM2npk_RiT2-EIOcvzbbMK6D2rb7-i9xaU0Gkw7vngykEn10-4z02RyWxxuvbDGpxXdTFgiMH5g1eZVoxd1_1yAdxWiwOCzZeOIbbObtlCQdks7RwrkKuIjYLeGkXlULiXe-1xA3Hv8H1pa0DMr_ZrmBTQZtTaAeA-kcfBmUPP4NbQqFQ2F-6o0hGqlehfXTNgwi0JRaJyg8wm7VapuRpiUTUtqhZNfbazVR4213QzozmyDFRG8yGTYP01lZXsnbqnQp2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Recuperação</span>
                    <span className="px-3 py-1 text-xs font-bold rounded-md bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300">Segunda Opinião</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">Falha em Tratamentos Anteriores</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Especializados em casos onde pomadas comuns e curativos simples não funcionaram. Oferecemos uma nova perspectiva clínica e tecnológica para o seu caso.
                  </p>
                  <div className="flex items-center text-sm font-bold text-secondary dark:text-slate-200">
                    <img alt="Dra. Ana" className="w-8 h-8 rounded-full mr-3 border-2 border-primary object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-qeRHvyWdzYrjUUriLgwiDNKi6KgycrnSyBklUdJSML3yHivljyLuRgylGjEsoxzyPoA-4Cc8I6SLgeIGxgBt3w_fdvfYn31Qv_cwSq6xm51lVSBisaWbk6dyBj_3q6dtZQFeghC1-3k4ngda79GGOxJ_nKGerM3WFf-q6cwhP94Ync7uG48FKYlYq10iY8_FPNfvBLa1fwCey-rSsxOfPwYFsdHw7YUAotxIQfFqIEOIshB51cr0ln7hFdUuIHAXDkPX46QxL_qI" />
                    <span>Recomendado por Dra. Ana</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Call to Action */}
        <Reveal delay={600}>
          <div className="mt-12 lg:mt-24 text-center">
            <div className="inline-flex flex-col items-center max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-semibold text-secondary dark:text-white mb-8">
                Se você está aqui, provavelmente já passou do ponto de esperar.
              </p>
              <a 
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
                href="#"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="mr-3">Falar no WhatsApp</span>
                  <svg className="w-6 h-6 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </span>
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Patients;