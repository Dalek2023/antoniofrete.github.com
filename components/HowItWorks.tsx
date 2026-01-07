import React from 'react';
import { Phone, MapPin, Calculator, CalendarCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Chame no WhatsApp",
      description: "Descreva o que você precisa transportar.",
      icon: Phone
    },
    {
      id: 2,
      title: "Informe os Locais",
      description: "Envie os endereços de retirada e entrega.",
      icon: MapPin
    },
    {
      id: 3,
      title: "Receba o Orçamento",
      description: "Te passo o valor na hora (Mínimo R$ 50).",
      icon: Calculator
    },
    {
      id: 4,
      title: "Agende o Frete",
      description: "Faça o pagamento e combinamos o horário.",
      icon: CalendarCheck
    }
  ];

  return (
    <section id="como-funciona" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
         <div className="flex gap-2">
            {[...Array(5)].map((_,i) => <div key={i} className="w-2 h-2 rounded-full bg-brand-500"></div>)}
         </div>
         <div className="flex gap-2 mt-2">
            {[...Array(5)].map((_,i) => <div key={i} className="w-2 h-2 rounded-full bg-brand-500"></div>)}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-accent-600 tracking-wider uppercase mb-2">Passo a Passo</h2>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-950">Como contratar</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Processo simples e sem burocracia em apenas 4 etapas.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 md:border-0 text-center group flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 relative">
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-50 rounded-full flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <step.icon className="h-6 w-6 md:h-8 md:w-8 text-brand-600" />
                   </div>
                   <div className="absolute top-0 right-0 w-7 h-7 md:w-8 md:h-8 bg-accent-500 text-white text-xs md:text-sm font-bold rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};