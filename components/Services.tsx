import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-accent-600 tracking-wider uppercase mb-2">O que fazemos</h2>
          <p className="text-2xl md:text-4xl font-extrabold text-brand-950">
            Soluções ágeis para seu transporte
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-600 mx-auto">
            Atendemos demandas de pequeno e médio porte, ideais para nossa caminhonete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="group relative p-6 md:p-8 bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="absolute top-0 left-6 md:left-8 transform -translate-y-1/2">
                <div className="inline-flex p-3 md:p-4 bg-brand-600 rounded-2xl shadow-lg shadow-brand-500/30 group-hover:bg-accent-500 group-hover:shadow-accent-500/30 transition-colors duration-300">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mt-6 md:mt-8 text-lg md:text-xl font-bold text-gray-900 group-hover:text-brand-700 transition-colors">{service.title}</h3>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 bg-white border border-brand-100 p-5 md:p-6 rounded-2xl shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 self-center sm:self-start">
             <div className="p-2 bg-yellow-100 rounded-full text-yellow-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
               </svg>
             </div>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 text-center sm:text-left">Importante</h4>
            <p className="text-sm md:text-base text-gray-600 text-center sm:text-left mt-1 sm:mt-0">
              Realizamos apenas transportes de cargas que caibam com segurança na caminhonete. Não fazemos mudanças de casas grandes completas em uma única viagem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};