import { 
  Category, 
  HighlightSlide, 
  DifferentialCard, 
  ReviewCard, 
  StatItem, 
  GalleryItem,
  RegionalRoute 
} from "./types";

export const CUSTOMER_RATING_INFO = {
  averageRating: 4.5,
  totalReviews: 218,
  source: "Google Reviews",
  badgeText: "Destaque em Itapetininga & Região"
};

export const HIGHLIGHT_SLIDES: HighlightSlide[] = [
  {
    id: 1,
    title: "Materiais para Construção",
    subtitle: "A fundação sólida de toda grande obra.",
    description: "Areia, tijolos, cimento CP-II e CP-III, ferro, vergalhões, lajes e tudo para iniciar seu projeto estrutural com a máxima segurança.",
    imageUrl: new URL("./imagens/i8.png", import.meta.url).href,
    badge: "Fundação"
  },
  {
    id: 2,
    title: "Acabamentos Premium",
    subtitle: "A beleza que valoriza sua conquista.",
    description: "Metais sanitários, louças finas, torneiras gourmet, iluminação planejada para dar aquele toque de luxo e sofisticação à sua casa.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    badge: "Acabamento"
  },
  {
    id: 3,
    title: "Ferragens & Estruturas",
    subtitle: "Resistência máxima sob medida.",
    description: "Treliças, malhas de ferro, colunas prontas, pregos e arames com as especificações exigidas pelos melhores calculistas.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    badge: "Segurança"
  },
  {
    id: 4,
    title: "Hidráulica Inteligente",
    subtitle: "Condução segura e sem dores de cabeça.",
    description: "Tubos de esgoto e água fria/quente Amanco e Tigre, conexões, caixas d'água, sistemas de escoamento e válvulas de alta durabilidade.",
    imageUrl: new URL("./imagens/i5.png", import.meta.url).href,
    badge: "Instalações"
  },
  {
    id: 5,
    title: "Elétrica Confiável",
    subtitle: "Energia estável e fiação certificada.",
    description: "Cabos elétricos com selo Inmetro, disjuntores magnéticos, eletrodutos reforçados, interruptores modernos e painéis de distribuição.",
    imageUrl: new URL("./imagens/i6.png", import.meta.url).href,
    badge: "Tecnologia"
  },
  {
    id: 6,
    title: "Ferramentas Profissionais",
    subtitle: "Sua melhor aliada no canteiro de obras.",
    description: "Temos desde ferramentas manuais (desempenadeiras, colheres de pedreiro, trenas compasso) até elétricas profissionais de última geração.",
    imageUrl: new URL("./imagens/i7.png", import.meta.url).href,
    badge: "Precisão"
  },
  {
    id: 7,
    title: "Entrega Expressa Inteligente",
    subtitle: "Seu canteiro de obras nunca parado.",
    description: "Frota própria de caminhões, muncks e carros de carga. Agendamento com hora marcada e facilidade extrema no descarregamento.",
    imageUrl: new URL("./imagens/i9.png", import.meta.url).href, // Logística
    badge: "Logística Incomasa"
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "cimento",
    name: "Cimento",
    icon: "Layers",
    description: "Votoran, Cauê e Itaú. Ampla resistência para vigas, reboco e assentamentos estruturais.",
    items: ["Cimento CP-II (Saco 50kg)", "Cimento CP-III Ecológico", "Massa Pronta Multiuso", "Gesso Liso Rápido"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tijolos",
    name: "Tijolos & Blocos",
    icon: "Box",
    description: "Tijolos cerâmicos padrão de qualidade extrema, blocos estruturais e de fechamento perfeitos.",
    items: ["Tijolo Baianinho 8 Furos", "Tijolo Baiano 9 Furos", "Bloco de Concreto Estrutural", "Canaletas em U"],
    imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "areia-pedra",
    name: "Areia & Pedra",
    icon: "Grid",
    description: "Areia lavada fina, média e grossa puríssima. Pedras britadas em diversos diâmetros.",
    items: ["Areia Lavada Fina (Metro/Saco)", "Areia Lavada Média", "Pedra Brita Nº 1 e Nº 0", "Pedrisco para Calçadas"],
    imageUrl: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ferragens",
    name: "Ferragens & Aço",
    icon: "Shield",
    description: "Vergalhões de aço de alta resistência, malhas de ferro soldadas para concretagem de lajes de piso.",
    items: ["Vergalhão CA-50 3/8\" barra", "Coluna Montada pronta", "Malha POP de Concreto (Grossa)", "Arame Recozido trançado"],
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "eletrica",
    name: "Materiais Elétricos",
    icon: "Zap",
    description: "Tudo do relógio de entrada aos soquetes de tomadas. Segurança aprovada para sobrecargas elétricas.",
    items: ["Fio Flexível 2,5mm (Rolo 100m)", "Disjuntor DIN bipolar NEMA", "Eletroduto Corrugado 3/4\"", "Quadro de Distribuição 18+"],
    imageUrl: "https://images.unsplash.com/photo-1455165814004-112da42799d9?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "hidraulica",
    name: "Tubos & Conexões",
    icon: "Droplet",
    description: "Instalações hidráulicas completas para água quente, fria e sistemas de escoamento predial.",
    items: ["Tubo PVC de 100mm Esgoto", "Tubo de Cobre Água Quente", "Conexão Te Amanco Premium", "Registro de Pressão Docol"],
    imageUrl: "https://images.unsplash.com/photo-1542013936693-8848e57b442b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ferramentas",
    name: "Equipamentos & Ferramentas",
    icon: "Hammer",
    description: "Ferramentas manuais resistentes, furadeiras, serras, discos de corte diamantados de alta precisão.",
    items: ["Esmerilhadeira Bosch Professional", "Colher de Pedreiro Nº 8 Inox", "Desempenadeira de PVC corrugada", "Disco Segmentado de Diamante"],
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "acabamentos",
    name: "Acabamentos Finos",
    icon: "Award",
    description: "Louças sanitárias requintadas, armários elegantes e metais que elevam o padrão visual da sua obra.",
    items: ["Torneira Gourmet Monocomando Aura", "Vaso Sanitário com Caixa Acoplada", "Ralo Click Inteligente Inox", "Nicho em Quartzo para Box"],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "pisos",
    name: "Pisos & Revestimentos",
    icon: "Sparkles",
    description: "Porcelanatos polidos, acetinados e texturizados, juntas perfeitas, argamassas especiais.",
    items: ["Porcelanato 80x80 Polido Extra", "Piso Retificado Amadeirado", "Argamassa AC-III de Alta Aderência", "Espaçador Nivelador com Clipe"],
    imageUrl: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tintas",
    name: "Tintas & Selantes",
    icon: "Paintbrush",
    description: "Variedade vasta de tintas acrílicas laváveis, impermeabilizantes de alta performance, vernizes e rolos.",
    items: ["Tinta Suvinil Toque de Seda 18L", "Massa Corrida PVA Premium", "Impermeabilizante Vedacit Balde", "Fita Crepe Premium Ampla"],
    imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=400&auto=format&fit=crop"
  }
];

export const DIFFERENTIALS: DifferentialCard[] = [
  {
    id: 1,
    title: "Atendimento de Excelência",
    description: "Consultores técnicos altamente capacitados para guiar seus cálculos de materiais evitando desperdício de dinheiro.",
    icon: "UserCheck"
  },
  {
    id: 2,
    title: "Entrega Programada",
    description: "Receba seus insumos no dia exato solicitado, mantendo o cronograma dos seus pedreiros e engenheiros em perfeito fluxo.",
    icon: "Calendar"
  },
  {
    id: 3,
    title: "Ótimos Preços",
    description: "Condições de parcelamento facilitadas, convênios de crédito e descontos robustos para compras fechadas de grande volume.",
    icon: "Percent"
  },
  {
    id: 4,
    title: "Loja Tradicional",
    description: "Incomasa é sinônimo de ética comercial sólida e tradição em Itapetininga, construindo parcerias duradouras há anos.",
    icon: "Heart"
  },
  {
    id: 5,
    title: "Grande Estoque",
    description: "Não dependa de prazos de terceiros. Mantemos milhares de fardos, sacos e barras prontos para faturamento e carregamento imediato.",
    icon: "Warehouse"
  },
  {
    id: 6,
    title: "Equipe Especializada",
    description: "Logística ágil e motoristas experientes que manuseiam sua carga com extrema cautela, garantindo zero danos às peças finas.",
    icon: "Users"
  }
];

export const GOOGLE_REVIEWS: ReviewCard[] = [
  {
    id: 1,
    name: "Gabriel Santos",
    role: "Proprietário & Construtor",
    text: "Ótimo preço e entrega rápida de material e um ótimo atendimento aos clientes. Sempre cumprem o prazo prometido!",
    rating: 5,
    date: "1 mês atrás",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mariana Alencar",
    role: "Arquiteta de Interiores",
    text: "Loja com preços excelentes e funcionários extremamente atenciosos. Me ajudaram a calcular os acabamentos finos do projeto.",
    rating: 5,
    date: "3 semanas atrás",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "José Roberto Mendes",
    role: "Empreiteiro Geral",
    text: "Sempre compro meus materiais ali. Atendimento excelente, muita eficiência no munck e o estoque está sempre bem suprido.",
    rating: 5,
    date: "Aproximadamente 2 meses atrás",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Ana Beatriz Vieira",
    role: "Engenheira Civil",
    text: "Parceiro estratégico para minhas obras em Itapetininga. O faturamento corporativo deles facilita muito nossa contabilidade.",
    rating: 5,
    date: "2 meses atrás",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  }
];

export const STATS: StatItem[] = [
  {
    id: 1,
    value: 218,
    suffix: "+",
    label: "Avaliações Reais",
    icon: "ThumbsUp"
  },
  {
    id: 2,
    value: 4.5,
    suffix: "★",
    label: "Nota no Google",
    icon: "Star"
  },
  {
    id: 3,
    value: 1000,
    suffix: "+",
    label: "Clientes Atendidos",
    icon: "UsersRound"
  },
  {
    id: 4,
    value: 10000,
    suffix: "+",
    label: "Produtos em Estoque",
    icon: "Boxes"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Showroom de Pisos & Revestimentos",
    category: "Pisos",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Estoque Amplo de Tijolos de Primeira",
    category: "Estoque",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cimento Fresco & Armazenado com Cuidado",
    category: "Produtos",
    imageUrl: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Logística Ágil no Carregamento Munck",
    category: "Logística",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sessão de Conexões Hidráulicas Organizadas",
    category: "Estoque",
    imageUrl: "https://images.unsplash.com/photo-1542013936693-8848e57b442b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Atendimento Personalizado no Balcão",
    category: "Loja",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop"
  }
];

export const REGIONAL_ROUTES: RegionalRoute[] = [
  { cityName: "Itapetininga (Centro/Sede)", distance: "0 km", time: "Entrega Imediata", coords: { x: 50, y: 50 } },
  { cityName: "Alambari", distance: "24 km", time: "Mesmo Dia", coords: { x: 68, y: 38 } },
  { cityName: "São Miguel Arcanjo", distance: "39 km", time: "Mesmo Dia ou Programado", coords: { x: 38, y: 78 } },
  { cityName: "Capela do Alto", distance: "30 km", time: "Dia Seguinte", coords: { x: 74, y: 56 } },
  { cityName: "Sarapuí", distance: "34 km", time: "Dia Seguinte", coords: { x: 60, y: 72 } },
  { cityName: "Angatuba", distance: "52 km", time: "Entrega Programada", coords: { x: 22, y: 40 } },
  { cityName: "Guareí", distance: "45 km", time: "Entrega Programada", coords: { x: 33, y: 25 } }
];
