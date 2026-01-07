import React, { useState } from 'react';
import { Star, Info, Quote } from 'lucide-react';
import { EXAMPLE_TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    rating: 5,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Seu depoimento foi enviado para análise.');
    setFormData({ name: '', city: '', rating: 5, message: '' });
  };

  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Disclaimer */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center bg-white text-brand-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-brand-100 shadow-sm">
            <Info className="w-3 h-3 mr-2" />
            Exemplos ilustrativos
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-950">
            O que os clientes dizem
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            A satisfação de quem já contratou nossos serviços.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {EXAMPLE_TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-xl transition-shadow flex flex-col h-full relative">
              <Quote className="absolute top-6 right-6 h-6 w-6 md:h-8 md:w-8 text-brand-100" />
              <div className="flex mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-accent-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed font-medium text-sm md:text-base">"{item.text}"</p>
              <div className="mt-auto flex items-center">
                 <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold mr-3 text-sm">
                    {item.name.charAt(0)}
                 </div>
                 <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">{item.name}</p>
                    <p className="text-xs md:text-sm text-brand-600">{item.location}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submission Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Já é cliente? Deixe sua avaliação!</h3>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-gray-50 text-sm md:text-base"
                  placeholder="Ex: Ana Silva"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bairro/Cidade</label>
                <input 
                  type="text" 
                  required
                  value={formData.city}
                  onChange={e => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-gray-50 text-sm md:text-base"
                  placeholder="Ex: Palhoça"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nota (1 a 5)</label>
              <div className="relative">
                <select 
                    value={formData.rating}
                    onChange={e => setFormData({...formData, rating: Number(e.target.value)})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-gray-50 appearance-none text-sm md:text-base"
                >
                    <option value="5">⭐⭐⭐⭐⭐ (Excelente)</option>
                    <option value="4">⭐⭐⭐⭐ (Muito Bom)</option>
                    <option value="3">⭐⭐⭐ (Bom)</option>
                    <option value="2">⭐⭐ (Razoável)</option>
                    <option value="1">⭐ (Ruim)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <Star className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Seu Comentário</label>
              <textarea 
                required
                rows={3}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-gray-50 resize-none text-sm md:text-base"
                placeholder="Conte como foi sua experiência com o frete..."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-900 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">
              Enviar Depoimento
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};