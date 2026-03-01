export interface Product {
  id: number
  image: string
  brand: string
  name: string
  rating: number
  oldPrice: string
  newPrice: string
  description: string
  badge?: string
  tag?: string
}

export const products: Product[] = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20O%20Botic%C3%A1rio%20Melancia%20%287%20Itens%29-MskAaLIpDsJR69UsszGikLOI4aaADV.webp",
    brand: "O Boticario",
    name: "Kit O Botic\u00E1rio Melancia (7 Itens)",
    rating: 5,
    oldPrice: "R$ 312,89",
    newPrice: "R$ 0,00",
    description:
      "Kit O Botic\u00E1rio Melancia com 7 itens cheios de frescor e cuidado para uma rotina perfumada e revitalizante.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Body%20Splash%20Dream%20O%20Botic%C3%A1rio%20200ml%20%288%20itens%29-DWABcaO3kOnlgs3Ucek1agHQKmd8oe.png",
    brand: "OBOTICARIO",
    name: "Kit Body Splash Dream O Botic\u00E1rio 200ml (8 itens)",
    rating: 5,
    oldPrice: "R$ 328,55",
    newPrice: "R$ 0,00",
    description:
      "8 fragr\u00E2ncias femininas em tamanho 200ml, perfeitas para perfumar o dia a dia com leveza, frescor e personalidade.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Nuvem%20de%20Alegria%20%286%20itens%29-deS678alAzJxhMMjYOFttcFbLF4LVY.png",
    brand: "OBOTICARIO",
    name: "Kit Nuvem de Alegria (6 itens)",
    rating: 5,
    oldPrice: "R$ 287,45",
    newPrice: "R$ 0,00",
    description:
      "Com 6 itens veganos e cheios de brilho, o Kit Nuvem de Alegria hidrata, perfuma e transforma seu dia.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Celebre%20Sua%20For%C3%A7a%20%282%20itens%29-jKdQ0Siv10cUXRX9TM8gD6MgxqeCCO.png",
    brand: "OBOTICARIO",
    name: "Kit Celebre Sua For\u00E7a (2 itens)",
    rating: 5,
    oldPrice: "R$ 198,76",
    newPrice: "R$ 0,00",
    description:
      "Kit Celebre Sua For\u00E7a com eau de parfum e lo\u00E7\u00E3o hidratante para uma rotina cheia de poder e fragr\u00E2ncia.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Cuide-se%20Bem%20Deleite%20%283%20itens%29-62VVUZoQxl3eF8ggzNdhfSapSxZfTV.png",
    brand: "OBOTICARIO",
    name: "Kit Cuide-se Bem Deleite (3 itens)",
    rating: 5,
    oldPrice: "R$ 256,33",
    newPrice: "R$ 0,00",
    description:
      "Kit Cuide-se Bem Deleite com creme hidratante, body splash e lo\u00E7\u00E3o para uma rotina doce e perfumada.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Combo%20Cuide-se%20Bem%20Do%C3%A7ura%20Na%20Pessegura%20Completo%20%287%20itens%29.webp-z1REkMRWoEsTc0PfALqyRH7BslBfyv.jpeg",
    brand: "OBOTICARIO",
    name: "Combo Cuide-se Bem Do\u00E7ura Na Pessegura Completo (7 itens)",
    rating: 5,
    oldPrice: "R$ 378,22",
    newPrice: "R$ 0,00",
    description:
      "Combo Do\u00E7ura na Pessegura com 7 itens para hidratar, perfumar e cuidar da pele com cheirinho delicioso.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Combo%20Chocolate%20%284%20itens%29-0gyUWaRUkuJdHpJOGZHWDEM58dM5Ma.webp",
    brand: "OBOTICARIO",
    name: "Combo Chocolate (4 itens)",
    rating: 5,
    oldPrice: "R$ 229,54",
    newPrice: "R$ 0,00",
    description:
      "Combo Chocolate com 4 itens que combinam cuidado, hidrata\u00E7\u00E3o e o cheirinho irresist\u00EDvel de chocolate com morango.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Liz%20Sublime%20%282%20itens%29-BHNAk8DKdTJDyR4096V3qh6eENPnVg.webp",
    brand: "OBOTICARIO",
    name: "Kit Liz Sublime (2 itens)",
    rating: 5,
    oldPrice: "R$ 185,67",
    newPrice: "R$ 0,00",
    description:
      "Kit Liz Sublime com eau de parfum e lo\u00E7\u00E3o hidratante para uma experi\u00EAncia sofisticada e envolvente.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Lily%20%282%20itens%29-x1Ta8MZb5hgcDxos74n3bZwNHXWcW4.webp",
    brand: "OBOTICARIO",
    name: "Kit Lily (2 itens)",
    rating: 5,
    oldPrice: "R$ 342,18",
    newPrice: "R$ 0,00",
    description:
      "Kit Lily com eau de parfum e creme acetinado, um presente sofisticado para quem ama eleg\u00E2ncia.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 10,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Floratta%20Red%20%284%20itens%29-cYD16RX8utyOLILe4QfyqITEMXEfRS.webp",
    brand: "OBOTICARIO",
    name: "Kit Floratta Red (4 itens)",
    rating: 5,
    oldPrice: "R$ 264,91",
    newPrice: "R$ 0,00",
    description:
      "Kit Floratta Red com 4 itens elegantes, fragr\u00E2ncia floral vermelha intensa e n\u00E9cessaire exclusiva.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
  {
    id: 11,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20Deleite%20Chocolatudo%20%288%20itens%29.webp-MkuXzgWgbTknWKoZZZECvCJMHIPNHw.jpeg",
    brand: "OBOTICARIO",
    name: "Kit Deleite Chocolatudo (8 itens)",
    rating: 5,
    oldPrice: "R$ 173,42",
    newPrice: "R$ 0,00",
    description:
      "Kit Deleite Chocolatudo com 8 itens de cuidado e maquiagem, cheirinho doce e muito brilho na rotina.",
    badge: "GR\u00C1TIS",
    tag: "Lan\u00E7amento",
  },
]
