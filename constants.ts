import { Truck, Package, Home, ShoppingCart, MapPin, Clock, ShieldCheck, DollarSign } from 'lucide-react';
import { ServiceItem, FaqItem, TestimonialItem } from './types';

export const PHONE_NUMBER = "48999783646";
export const PHONE_DISPLAY = "(48) 99978-3646";
export const WHATSAPP_LINK = `https://wa.me/55${PHONE_NUMBER}?text=Olá Antonio, gostaria de um orçamento de frete.`;

export const SERVICES: ServiceItem[] = [
  {
    title: "Fretes Rápidos",
    description: "Transporte ágil de caixas e objetos avulsos em caminhonete para toda a região.",
    icon: Truck
  },
  {
    title: "Pequenas Mudanças",
    description: "Ideal para quem mora em kitnet, quarto ou precisa mover poucos móveis.",
    icon: Home
  },
  {
    title: "Entrega de Compras",
    description: "Retirada de eletrodomésticos ou móveis em lojas e entrega na sua porta.",
    icon: ShoppingCart
  },
  {
    title: "Transporte de Móveis",
    description: "Cuidado especial com sofás, geladeiras, fogões e mesas.",
    icon: Package
  }
];

export const BENEFITS = [
  { text: "Atendimento direto com o dono", icon: ShieldCheck },
  { text: "Respostas rápidas no WhatsApp", icon: Clock },
  { text: "Cuidado total com seus itens", icon: Package },
  { text: "Preço justo (Mínimo R$ 50,00)", icon: DollarSign },
];

export const FAQS: FaqItem[] = [
  {
    question: "Qual o valor mínimo do frete?",
    answer: "O valor mínimo para saída é de R$ 50,00. O preço final depende da distância e da carga."
  },
  {
    question: "Que tipo de carga vocês transportam?",
    answer: "Transportamos móveis, eletrodomésticos, caixas e pequenas mudanças que caibam com segurança na caminhonete."
  },
  {
    question: "Vocês fazem mudanças grandes?",
    answer: "Nosso foco são pequenas mudanças e fretes rápidos. Para mudanças de casas inteiras com muitos móveis, recomendamos caminhão baú."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com pagamento adiantado para garantir a reserva do horário e combustível."
  },
  {
    question: "Atendem quais regiões?",
    answer: "Atendemos toda a Grande Florianópolis: Ilha, Continente, São José, Palhoça e Biguaçu."
  }
];

export const EXAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "João",
    location: "Cliente de São José",
    text: "Precisei levar uma geladeira e um sofá. O Antonio foi super pontual e cuidadoso. Recomendo!",
    stars: 5
  },
  {
    name: "Maria",
    location: "Cliente de Florianópolis",
    text: "Ótimo atendimento. Respondeu rápido no Zap e o preço foi bem justo para a minha mudança de kitnet.",
    stars: 5
  },
  {
    name: "Carlos",
    location: "Cliente de Palhoça",
    text: "Transporte rápido e seguro. Chegou no horário combinado e ajudou a acomodar tudo na caminhonete.",
    stars: 5
  }
];