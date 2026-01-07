import React from 'react';
import { Truck, Phone, MapPin } from 'lucide-react';
import { PHONE_DISPLAY } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-8 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-accent-500 p-1.5 rounded-lg mr-2">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Antonio Fretes</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed mb-6">
              Serviços de frete e pequenas mudanças com agilidade, confiança e preço justo na Grande Florianópolis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
            <ul className="space-y-3 text-sm text-brand-200">
              <li><a href="#home" className="hover:text-accent-400 transition-colors flex items-center">Início</a></li>
              <li><a href="#servicos" className="hover:text-accent-400 transition-colors flex items-center">Serviços</a></li>
              <li><a href="#como-funciona" className="hover:text-accent-400 transition-colors flex items-center">Como Funciona</a></li>
              <li><a href="#contato" className="hover:text-accent-400 transition-colors flex items-center">Contato</a></li>
            </ul>
          </div>

          {/* Contact Footer */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Fale Conosco</h3>
            <div className="space-y-4">
                <div className="flex items-start">
                    <Phone className="h-5 w-5 text-accent-500 mr-3 mt-0.5" />
                    <div>
                        <p className="text-brand-200 text-sm">WhatsApp</p>
                        <p className="text-white font-medium">{PHONE_DISPLAY}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent-500 mr-3 mt-0.5" />
                    <div>
                        <p className="text-brand-200 text-sm">Área de Atuação</p>
                        <p className="text-white font-medium">Grande Florianópolis - SC</p>
                    </div>
                </div>
            </div>
            <p className="text-brand-400 text-xs mt-6 italic">
              *Este site tem caráter informativo. As condições podem mudar, confirme sempre pelo WhatsApp.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Antonio Fretes & Mudanças. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Política de Privacidade</span>
            <span className="cursor-pointer hover:text-white transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};