import React from 'react';
import { MessageCircle, User } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        
        {/* About Section - styled nicely */}
        <section className="bg-white py-12 md:py-20 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-brand-50 -skew-y-3 -z-10"></div>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="inline-flex p-3 bg-brand-100 rounded-full mb-6 text-brand-600">
                    <User className="w-8 h-8" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-brand-950 mb-4 md:mb-6">Sobre o Antonio</h2>
                <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                    "Sou um profissional autônomo dedicado a facilitar sua vida na hora de transportar seus pertences. 
                    Trabalho com fretes e pequenas mudanças há anos na região, sempre prezando pela <span className="text-brand-600 font-semibold">pontualidade</span> e pelo <span className="text-brand-600 font-semibold">cuidado</span> 
                    com o que é seu. Minha caminhonete está sempre pronta para atender você com segurança."
                </p>
            </div>
        </section>

        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group ring-4 ring-white"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
        <span className="hidden md:block absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Falar com Antonio
        </span>
      </a>
    </div>
  );
};

export default App;