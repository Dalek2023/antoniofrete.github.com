import React, { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className={`flex-shrink-0 flex items-center ${scrolled || isOpen ? 'text-brand-900' : 'text-white'}`}>
              <div className="bg-accent-500 p-1.5 rounded-lg mr-2 shadow-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">Antonio Fretes</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Início', href: '#home' },
              { name: 'Serviços', href: '#servicos' },
              { name: 'Como Funciona', href: '#como-funciona' },
              { name: 'Depoimentos', href: '#depoimentos' },
              { name: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-brand-100 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              href={WHATSAPP_LINK} 
              variant={scrolled ? "primary" : "accent"}
              className="py-2 px-4 text-sm"
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                scrolled || isOpen ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
          {[
              { name: 'Início', href: '#home' },
              { name: 'Serviços', href: '#servicos' },
              { name: 'Como Funciona', href: '#como-funciona' },
              { name: 'Depoimentos', href: '#depoimentos' },
              { name: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-brand-600 hover:bg-brand-50 px-3 py-4 rounded-lg text-base font-medium border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 px-2">
            <Button href={WHATSAPP_LINK} variant="primary" fullWidth onClick={() => setIsOpen(false)}>
              Pedir Orçamento
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};