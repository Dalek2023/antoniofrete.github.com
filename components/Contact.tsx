import React from 'react';
import { MessageCircle, Map } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6">Fale com o Antonio</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Precisa de um orçamento rápido? A melhor forma é mandar uma mensagem no WhatsApp com os detalhes do que precisa transportar.
            </p>
            
            <div className="bg-brand-50 rounded-xl p-6 md:p-8 border border-brand-100 mb-8">
              <h3 className="text-lg md:text-xl font-bold text-brand-900 mb-4">Canais de Atendimento</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                    <MessageCircle className="h-6 w-6 text-whatsapp" />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-gray-900">{PHONE_DISPLAY}</span>
                </div>
              </div>
              <div className="mt-8">
                <Button href={WHATSAPP_LINK} variant="whatsapp" fullWidth className="text-sm md:text-base">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp Agora
                </Button>
              </div>
            </div>
          </div>

          {/* Area Map Visualization */}
          <div className="relative w-full h-64 md:h-auto min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
             {/* Using picsum for a generic map-like or location image */}
            <img 
              src="https://picsum.photos/800/800" 
              alt="Mapa ilustrativo Grande Florianópolis" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 md:p-6 text-center">
              <Map className="h-12 w-12 md:h-16 md:w-16 text-white mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Área de Atendimento</h3>
              <p className="text-white text-base md:text-lg">Florianópolis • São José • Palhoça • Biguaçu</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};