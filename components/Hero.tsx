import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { PHONE_DISPLAY, WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-brand-950 pt-24 pb-16 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-72 h-72 md:w-96 md:h-96 bg-brand-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left mt-4 lg:mt-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-900 border border-brand-700 text-brand-200 text-xs md:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              Atendimento em toda Grande Florianópolis
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-white mb-6 leading-tight">
              Fretes rápidos e <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">pequenas mudanças</span>
            </h1>
            
            <p className="text-base md:text-lg text-brand-100 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
              Transporte ágil com caminhonete. Cuidamos dos seus móveis e caixas com a segurança e o preço justo que você procura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button href={WHATSAPP_LINK} variant="accent" className="text-base md:text-lg px-8 w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                Pedir Orçamento
              </Button>
              <Button href="#servicos" variant="outline" className="text-brand-100 border-brand-700 hover:bg-brand-900 w-full sm:w-auto">
                Ver Serviços
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm font-medium text-brand-200">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-accent-500 mr-2" />
                Mínimo R$ 50
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-accent-500 mr-2" />
                Pagamento facilitado
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none px-4 lg:px-0">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden group border-4 border-brand-900/50">
               {/* Using picsum as placeholder for a truck/moving scenario */}
              <img 
                src="https://picsum.photos/seed/truck/800/600" 
                alt="Caminhonete de frete carregada" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-[4/3] lg:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-transparent flex items-end p-6 md:p-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-full">
                  <p className="text-white font-semibold text-base md:text-lg">Pontualidade e Cuidado</p>
                  <p className="text-brand-200 text-xs md:text-sm">Seus pertences em boas mãos.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background element behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-brand-600 rounded-2xl opacity-20 blur-lg -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};