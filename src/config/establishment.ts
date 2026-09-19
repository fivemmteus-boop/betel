import { CategoryId, ExtraOption, MeatType, ProductItem } from '../types';

/**
 * CONFIGURAÇÕES GERAIS DA SANDUICHERIA BETEL
 * Todos os dados neste arquivo podem ser facilmente alterados para atualizar
 * informações de contato, horários, preços, produtos e categorias.
 */
export const ESTABLISHMENT_CONFIG = {
  name: 'Sanduicheria Betel',
  shortName: 'Betel',
  tagline: 'O sabor que faz você voltar!',
  description:
    'A Sanduicheria Betel é uma hamburgueria localizada em Aparecida de Goiânia, oferecendo sanduíches e lanches para quem busca uma opção saborosa para comer no local, levar ou pedir.',
  
  // Informações de avaliação e preços
  rating: 4.5,
  reviewCount: 36,
  priceRange: 'R$ 20–40 por pessoa',

  // Contato e redes
  phoneDisplay: '(62) 99524-2102',
  whatsappRaw: '5562995242102',
  instagramHandle: '@sanduicheria_betel',
  instagramUrl: 'https://www.instagram.com/sanduicheria_betel/',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Sanduicheria+Betel+Aparecida+de+Goi%C3%A2nia',

  // Localização
  address: {
    street: 'Av. Sete de Outubro, 326',
    neighborhood: 'Goiânia Park Sul',
    city: 'Aparecida de Goiânia',
    state: 'GO',
    cep: '74945-450',
    full: 'Av. Sete de Outubro, 326 - Goiânia Park Sul, Aparecida de Goiânia - GO, 74945-450',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Sete+de+Outubro%2C+326+-+Goi%C3%A2nia+Park+Sul%2C+Aparecida+de+Goi%C3%A2nia+-+GO%2C+74945-450',
  },

  // Horários de funcionamento
  operatingHours: {
    openHour: 18,
    openMinute: 0,
    closeHour: 23,
    closeMinute: 59,
    displayOpening: 'Abre às 18:00',
    displaySchedule: 'De segunda a domingo a partir das 18:00',
  },

  // Serviços oferecidos
  services: [
    { id: 'dinein', label: 'Refeição no local', icon: 'Store' },
    { id: 'takeaway', label: 'Para viagem', icon: 'ShoppingBag' },
    { id: 'delivery', label: 'Entrega sem contato', icon: 'Bike' },
  ],

  // Formas de pagamento aceitas
  paymentMethods: [
    { id: 'pix', label: 'PIX (Chave instantânea)' },
    { id: 'dinheiro', label: 'Dinheiro (Com opção de troco)' },
    { id: 'credito', label: 'Cartão de Crédito' },
    { id: 'debito', label: 'Cartão de Débito' },
  ],

  // Tipos de carne disponíveis para os sanduíches (baseado no cardápio oficial)
  meatOptions: ['Bovino', 'Frango', 'Lombo', 'Filé', 'Calabresa'] as MeatType[],

  // Categorias do Cardápio
  categories: [
    { id: 'all' as CategoryId, label: 'Todos os Lanches' },
    { id: 'sanduiches' as CategoryId, label: 'X-Sanduíches' },
    { id: 'hamburgueres' as CategoryId, label: 'Hambúrgueres' },
    { id: 'combos' as CategoryId, label: 'Combos Especiais' },
    { id: 'porcoes' as CategoryId, label: 'Porções' },
    { id: 'batatas' as CategoryId, label: 'Batata Frita' },
    { id: 'bebidas' as CategoryId, label: 'Bebidas Geladas' },
    { id: 'adicionais' as CategoryId, label: 'Adicionais Extras' },
  ],

  // Depoimentos autênticos baseados em avaliações do Google
  reviews: [
    {
      id: 'rev-1',
      author: 'Cliente Local',
      rating: 5,
      date: 'Avaliação recente',
      comment: 'Muito muito gostoso, bem caprichado estão de parabéns! Pedi para entrega e chegou quentinho e rápido.',
    },
    {
      id: 'rev-2',
      author: 'Cliente Frequente',
      rating: 5,
      date: 'Avaliação recente',
      comment: 'O sanduíche é grande e bem recheado, maionese saborosa e pão macio. Vale cada centavo!',
    },
    {
      id: 'rev-3',
      author: 'Família Betel',
      rating: 5,
      date: 'Avaliação recente',
      comment: 'Uma delícia ótimo eu e minha família só comemos lá! Melhor opção de lanche em Goiânia Park Sul.',
    },
  ],

  // Diferenciais da marca
  features: [
    {
      title: 'Sanduíches Caprichados',
      description: 'Lanches fartos, pão fresco e ingredientes selecionados com molho artesanal.',
      icon: 'Sandwich',
    },
    {
      title: 'Opção de Delivery',
      description: 'Entrega rápida e segura direto na sua porta em Aparecida de Goiânia.',
      icon: 'Bike',
    },
    {
      title: 'Para Viagem ou Local',
      description: 'Retire seu pedido quentinho ou aprecie seu lanche no nosso espaço.',
      icon: 'Store',
    },
    {
      title: 'Atendimento Ágil',
      description: 'Equipe dedicada e pedido direto e simplificado via WhatsApp.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Goiânia Park Sul',
      description: 'Fácil localização na Av. Sete de Outubro, ponto de referência no bairro.',
      icon: 'MapPin',
    },
  ],
};

/**
 * OPÇÕES DE ADICIONAIS EXTRAS
 */
export const EXTRA_OPTIONS: ExtraOption[] = [
  { id: 'extra-bacon', name: 'Bacon Crocante Extra', price: 5.0 },
  { id: 'extra-cheese', name: 'Mussarela Extra', price: 4.0 },
  { id: 'extra-burger', name: 'Hambúrguer Bovino Extra', price: 6.0 },
  { id: 'extra-egg', name: 'Ovo Frito Extra', price: 3.0 },
  { id: 'extra-cheddar', name: 'Cheddar Cremoso', price: 4.5 },
  { id: 'extra-catupiry', name: 'Catupiry Original', price: 4.5 },
  { id: 'extra-sauce', name: 'Molho Especial Betel (Pote)', price: 3.0 },
  { id: 'extra-potato', name: 'Batata Palha Extra', price: 2.5 },
];

/**
 * PRODUTOS DO CARDÁPIO (Baseados na tabela oficial da Sanduicheria Betel)
 */
export const MENU_PRODUCTS: ProductItem[] = [
  // --- X-SANDUÍCHES TRADICIONAIS COM ESCOLHA DE CARNE ---
  {
    id: 'x-salada-simples',
    name: 'X-Salada Simples',
    category: 'sanduiches',
    description: 'Pão macio, carne à sua escolha, mussarela, alface fresca, tomate, milho e batata palha.',
    basePrice: 22.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 22.0,
      Frango: 25.0,
      Lombo: 25.0,
      Filé: 26.0,
      Calabresa: 25.0,
    },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 'x-salada-especial',
    name: 'X-Salada Especial',
    category: 'sanduiches',
    description: 'Pão, carne à sua escolha, mussarela derretida, ovo frito no ponto, alface, tomate, milho e batata palha.',
    basePrice: 23.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 23.0,
      Frango: 27.0,
      Lombo: 27.0,
      Filé: 28.0,
      Calabresa: 27.0,
    },
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 'x-bacon-simples',
    name: 'X-Bacon Simples',
    category: 'sanduiches',
    description: 'Pão, carne à sua escolha, mussarela, generosas fatias de bacon crocante, alface, tomate, milho e batata palha.',
    basePrice: 24.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 24.0,
      Frango: 28.0,
      Lombo: 28.0,
      Filé: 29.0,
      Calabresa: 28.0,
    },
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 'x-bacon-especial',
    name: 'X-Bacon Especial',
    category: 'sanduiches',
    description: 'Pão, carne à sua escolha, mussarela, bacon crocante em dobro, ovo frito, alface, tomate, milho e batata palha.',
    basePrice: 25.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 25.0,
      Frango: 29.0,
      Lombo: 29.0,
      Filé: 30.0,
      Calabresa: 29.0,
    },
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=800&auto=format&fit=crop',
    popular: true,
    isSpecial: true,
  },
  {
    id: 'x-rangao',
    name: 'X-Rangão Betel',
    category: 'sanduiches',
    description: 'Lanche para quem tem fome de verdade! Pão, 2 carnes, mussarela, salsicha, ovo, alface, tomate, milho e batata palha.',
    basePrice: 27.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 27.0,
      Frango: 31.0,
      Lombo: 31.0,
      Filé: 31.0,
      Calabresa: 31.0,
    },
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop',
    isSpecial: true,
  },
  {
    id: 'x-tudo',
    name: 'X-Tudo Tradicional',
    category: 'sanduiches',
    description: 'Pão, carne à sua escolha, mussarela, presunto, salsicha, bacon crocante, ovo, alface, tomate, milho e batata.',
    basePrice: 29.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 29.0,
      Frango: 31.0,
      Lombo: 31.0,
      Filé: 32.0,
      Calabresa: 31.0,
    },
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 'x-tudo-duplo',
    name: 'X-Tudo Duplo',
    category: 'sanduiches',
    description: 'O gigante da chapa! Pão, 2 carnes, 2 mussarelas, 2 presuntos, ovo, 2 salsichas, 2 bacons, alface, tomate, milho e batata.',
    basePrice: 33.0,
    allowsMeatChoice: true,
    meatPrices: {
      Bovino: 33.0,
      Frango: 33.0,
      Lombo: 33.0,
      Filé: 33.0,
      Calabresa: 33.0,
    },
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop',
    isSpecial: true,
  },
  {
    id: 'x-betel-supremo',
    name: 'X-Betel Supremo',
    category: 'sanduiches',
    description: 'A obra-prima da casa! Pão artesanal, carne bovina, frango desfiado, filé em tiras, mussarela, presunto, salsicha, bacon crocante, ovo, alface, tomate, milho e batata palha.',
    basePrice: 36.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1583032015879-c63ab36357fc?q=80&w=800&auto=format&fit=crop',
    isSpecial: true,
    popular: true,
  },
  {
    id: 'x-frango-gourmet',
    name: 'X-Frango Especial',
    category: 'sanduiches',
    description: 'Pão brioche leve, filé de frango temperado na chapa, queijo derretido, presunto, alface americana fresca, tomate e molho especial.',
    basePrice: 26.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop',
  },

  // --- HAMBÚRGUERES ESPECIAIS ---
  {
    id: 'burger-artesanal-cheddar',
    name: 'Burger Betel Cheddar Melt',
    category: 'hamburgueres',
    description: 'Pão brioche selado na manteiga, burger artesanal 160g, muito cheddar cremoso derretido e cebola caramelizada.',
    basePrice: 28.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 'burger-classic-double',
    name: 'Burger Classic Double Smash',
    category: 'hamburgueres',
    description: 'Dois smash burgers de 90g com crostinha perfeita, queijo duplo prato, picles artesanal, alface e molho da casa.',
    basePrice: 31.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=800&auto=format&fit=crop',
    isSpecial: true,
  },

  // --- COMBOS ---
  {
    id: 'combo-individual-betel',
    name: 'Combo Betel Individual',
    category: 'combos',
    description: '1x X-Salada Especial ou X-Bacon Bovino + 1x Batata Frita Crocante Individual + 1x Refrigerante Lata 350ml.',
    basePrice: 38.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop',
    popular: true,
  },
  {
    id: 'combo-casal-betel',
    name: 'Combo Casal Perfeito',
    category: 'combos',
    description: '2x X-Salada Bovino + 1x Batata com Cheddar e Bacon Média + 1x Refrigerante 2 Litros.',
    basePrice: 68.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop',
    isSpecial: true,
  },
  {
    id: 'combo-galera-betel',
    name: 'Combo Galera Betel (3 Lanches)',
    category: 'combos',
    description: '1x X-Tudo + 1x X-Rangão + 1x X-Bacon Especial + 1x Batata Frita Grande + 1x Refrigerante 2 Litros.',
    basePrice: 96.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop',
  },

  // --- BATATA FRITA & PORÇÕES ---
  {
    id: 'batata-frita-individual',
    name: 'Batata Frita Crocante (Individual 150g)',
    category: 'batatas',
    description: 'Batatas palito sequinhas, douradas e bem temperadas, servidas com sachê de maionese temperada.',
    basePrice: 14.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'batata-frita-media',
    name: 'Batata Frita Média (300g)',
    category: 'batatas',
    description: 'Porção média de batatas fritas crocantes para compartilhar a dois.',
    basePrice: 20.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'batata-cheddar-bacon',
    name: 'Batata Turbinada com Cheddar & Bacon',
    category: 'batatas',
    description: 'Porção generosa de batatas fritas cobertas com cheddar cremoso derretido e cubos crocantes de bacon.',
    basePrice: 28.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop',
    popular: true,
    isSpecial: true,
  },
  {
    id: 'porcao-calabresa-acebolada',
    name: 'Porção de Calabresa Acebolada',
    category: 'porcoes',
    description: 'Linguiça calabresa fatiada frita com rodelas de cebola dourada e acompanha fatias de pão ou molho.',
    basePrice: 32.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },

  // --- BEBIDAS ---
  {
    id: 'coca-cola-lata',
    name: 'Coca-Cola Lata 350ml',
    category: 'bebidas',
    description: 'Original bem gelada.',
    basePrice: 6.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'coca-cola-zero-lata',
    name: 'Coca-Cola Sem Açúcar Lata 350ml',
    category: 'bebidas',
    description: 'Refrigerante geladinho zero açúcar.',
    basePrice: 6.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'guarana-lata',
    name: 'Guaraná Antarctica Lata 350ml',
    category: 'bebidas',
    description: 'O autêntico sabor brasileiro bem gelado.',
    basePrice: 6.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'coca-cola-2l',
    name: 'Coca-Cola 2 Litros',
    category: 'bebidas',
    description: 'Garrafa família 2L geladíssima.',
    basePrice: 14.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'guarana-2l',
    name: 'Guaraná Antarctica 2 Litros',
    category: 'bebidas',
    description: 'Garrafa família 2L gelada.',
    basePrice: 13.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'suco-polpa-500ml',
    name: 'Suco Natural 500ml (Polpa)',
    category: 'bebidas',
    description: 'Sabores: Laranja, Maracujá ou Acerola bem gelado e batido na hora.',
    basePrice: 9.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agua-mineral',
    name: 'Água Mineral 500ml',
    category: 'bebidas',
    description: 'Com ou sem gás.',
    basePrice: 4.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=800&auto=format&fit=crop',
  },

  // --- ADICIONAIS COMO PRODUTO ---
  {
    id: 'molho-especial-betel-pote',
    name: 'Molho Especial Betel da Casa (Pote 100ml)',
    category: 'adicionais',
    description: 'Nosso clássico molho verde artesanal temperado com ervas e especiarias secretas.',
    basePrice: 4.0,
    allowsMeatChoice: false,
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=800&auto=format&fit=crop',
  },
];
