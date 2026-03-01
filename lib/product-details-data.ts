export interface Review {
  title: string
  date: string
  rating: number
  text: string
  author: string
}

export interface ProductDetail {
  productId: number
  longDescription: string
  characteristics: string[]
  reviews: Review[]
}

export const productDetails: Record<number, ProductDetail> = {
  1: {
    productId: 1,
    longDescription:
      "O Kit Cuide-se Bem Melancia e a escolha perfeita para quem busca uma rotina de autocuidado completa, com produtos que oferecem frescor, hidratacao e uma fragrancia deliciosa de melancia. Este kit reune sete itens essenciais para cuidados diarios, proporcionando uma experiencia sensorial unica. 1. Sabonete Liquido Corporal Cuide-se Bem Melancia 150ml Limpa suavemente a pele, deixando-a perfumada e com sensacao de frescor. Sua formula contem extrato de melancia, proporcionando uma espuma cremosa e agradavel. 2. Gel Esfoliante Corporal Cuide-se Bem Melancia 150g Promove uma esfoliacao delicada, removendo celulas mortas e deixando a pele macia e renovada. Ideal para uso semanal. 3. Gel Hidratante Desodorante Corporal Cuide-se Bem Melancia 200g Hidrata profundamente a pele, com rapida absorcao e toque refrescante. Sua fragrancia de melancia proporciona uma sensacao revigorante. 4. Desodorante Roll-On Cuide-se Bem Melancia 55ml Oferece protecao eficaz contra odores, mantendo as axilas frescas e perfumadas ao longo do dia. 5. Mascara Facial Noturna Cuide-se Bem Melancia 50g Enquanto voce dorme, esta mascara atua na renovacao da pele, deixando-a hidratada, radiante e com aparencia saudavel pela manha. 6. Balm Labial Intense Cuide-se Bem Melancia 6,2g Hidrata e protege os labios, proporcionando um toque de cor natural e brilho suave. Pode ser usado tambem como blush para um efeito corado. 7. Necessaire Exclusiva Cuide-se Bem Melancia Uma necessaire pratica e estilosa para armazenar e transportar seus produtos com seguranca e charme. Este kit e vegano e cruelty-free, alinhado com o compromisso de O Boticario com a sustentabilidade e o bem-estar animal.",
    characteristics: [
      "01 Sabonete Liquido Corporal 150ml",
      "01 Gel Esfoliante Corporal 150g",
      "01 Gel Hidratante Desodorante Corporal 200g",
      "01 Desodorante Roll-On 55ml",
      "01 Mascara Facial Noturna 50g",
      "01 Balm Labial Intense 6,2g",
      "01 Necessaire Exclusiva",
    ],
    reviews: [
      {
        title: "CHEIRO MARAVILHOSO",
        date: "27 de janeiro de 2026",
        rating: 5,
        text: "A linha Melancia e refrescante demais! Perfeita para o verao, o cheiro e delicioso e nao enjoa.",
        author: "Isabela",
      },
      {
        title: "KIT COMPLETO",
        date: "21 de janeiro de 2026",
        rating: 5,
        text: "Amei ter 7 produtos! A mascara noturna e incrivel e o lip tint e muito pratico.",
        author: "Carolina",
      },
      {
        title: "SUPER FRESQUINHO",
        date: "14 de janeiro de 2026",
        rating: 5,
        text: "Perfeito para dias quentes! A colonia Egeo Melancia e viciante, uso todos os dias.",
        author: "Larissa",
      },
      {
        title: "ADOREI",
        date: "7 de janeiro de 2026",
        rating: 5,
        text: "O gel corporal e super refrescante e a locao hidrata muito bem. Vale cada centavo!",
        author: "Vanessa",
      },
      {
        title: "PRESENTE INCRIVEL",
        date: "19 de dezembro de 2025",
        rating: 5,
        text: "Ganhei de presente e fiquei apaixonada! Os produtos sao de altissima qualidade.",
        author: "Bruna",
      },
    ],
  },
  2: {
    productId: 2,
    longDescription:
      "O Kit Body Splash Dream reune 8 fragancias exclusivas da linha Dream O Boticario, cada uma com 200ml. Sao perfumes corporais com notas unicas que vao desde o floral ate o frutado, perfeitas para quem ama variar o cheiro a cada dia. Os body splashs possuem fixacao moderada e sao ideais para usar apos o banho ou ao longo do dia, proporcionando frescor e perfumacao leve. As fragancias incluem Amor no Ar, Viagem Encantada, Espelho Secreto, Jardim de Misterios, Filtro dos Sonhos, Ceu de Baunilha, Banho de Sorte e Doce Tarde.",
    characteristics: [
      "01 Body Splash Dream Amor no Ar 200ml",
      "01 Body Splash Dream Viagem Encantada 200ml",
      "01 Body Splash Dream Espelho Secreto 200ml",
      "01 Body Splash Dream Jardim de Misterios 200ml",
      "01 Body Splash Dream Filtro dos Sonhos 200ml",
      "01 Body Splash Dream Ceu de Baunilha 200ml",
      "01 Body Splash Dream Banho de Sorte 200ml",
      "01 Body Splash Dream Doce Tarde 200ml",
    ],
    reviews: [
      {
        title: "COLECAO PERFEITA",
        date: "25 de janeiro de 2026",
        rating: 5,
        text: "Ter 8 fragancias e um sonho! Cada dia uso uma diferente. Jardim de Misterios e minha favorita.",
        author: "Fernanda",
      },
      {
        title: "PRESENTE IDEAL",
        date: "18 de janeiro de 2026",
        rating: 5,
        text: "Dei de presente para minha mae e ela amou! As fragancias sao delicadas e duram bastante.",
        author: "Amanda",
      },
      {
        title: "FRAGANCIAS DIVINAS",
        date: "10 de janeiro de 2026",
        rating: 5,
        text: "Todas as fragancias sao maravilhosas. Espelho Secreto e Doce Tarde sao minhas preferidas!",
        author: "Juliana",
      },
      {
        title: "AMEI DEMAIS",
        date: "3 de janeiro de 2026",
        rating: 5,
        text: "O rendimento e otimo e os cheiros sao viciantes. Recomendo para quem gosta de variedade.",
        author: "Tatiana",
      },
    ],
  },
  3: {
    productId: 3,
    longDescription:
      "O Kit Nuvem de Alegria traz 6 produtos da linha Cuide-se Bem com fragrancia suave e reconfortante. A linha e inspirada no conceito de leveza e conforto, com textura em nuvem e aroma delicado. Todos os itens sao veganos e possuem formula com ingredientes de origem natural. O kit inclui locao desodorante iluminadora, locao desodorante hidratante, body splash, oleo hidratante corporal, sabonetes sortidos e sabonete liquido corporal. Ideal para quem busca uma rotina de cuidados leve e delicada.",
    characteristics: [
      "01 Locao Desodorante Iluminadora 150ml",
      "01 Locao Desodorante Hidratante 400ml",
      "01 Body Splash Desodorante Colonia 200ml",
      "01 Oleo Hidratante Corporal 110ml",
      "01 Sabonetes Sortidos (4 unidades de 60g)",
      "01 Sabonete Liquido Corporal 150ml",
    ],
    reviews: [
      {
        title: "CHEIRO DE BEBE",
        date: "24 de janeiro de 2026",
        rating: 5,
        text: "O cheiro e suave e delicado, parece cheirinho de bebe! Perfeito para o dia a dia.",
        author: "Gabriela",
      },
      {
        title: "PELE SUPER MACIA",
        date: "16 de janeiro de 2026",
        rating: 5,
        text: "A locao hidratante deixa a pele incrivelmente macia e o cheiro dura o dia todo!",
        author: "Patricia",
      },
      {
        title: "KIT MARAVILHOSO",
        date: "8 de janeiro de 2026",
        rating: 5,
        text: "Todos os produtos sao incriveis. O oleo corporal e um luxo e os sabonetes sao lindos.",
        author: "Rafaela",
      },
      {
        title: "RECOMENDO MUITO",
        date: "1 de janeiro de 2026",
        rating: 5,
        text: "Ja e o segundo kit que compro. A qualidade e excepcional e a fragrancia e viciante.",
        author: "Camila",
      },
    ],
  },
  4: {
    productId: 4,
    longDescription:
      "O Kit Celebre Sua Forca traz 2 itens exclusivos da linha Celebre, criada para mulheres que querem celebrar sua propria essencia. O eau de parfum Celebre Sua Forca possui fragrancia floral frutal vibrante, com notas de topo de frutas vermelhas, corpo floral e fundo ambarado. A locao hidratante desodorante corporal complementa a perfumacao, deixando a pele macia, hidratada e deliciosamente perfumada por muito mais tempo. O kit vem em uma caixa presenteavel exclusiva com design sofisticado.",
    characteristics: [
      "01 Eau de Parfum Celebre Sua Forca 100ml",
      "01 Locao Hidratante Desodorante Corporal 200ml",
    ],
    reviews: [
      {
        title: "FRAGRANCIA PODEROSA",
        date: "22 de janeiro de 2026",
        rating: 5,
        text: "O perfume e forte e marcante, dura o dia inteiro! Me sinto poderosa usando.",
        author: "Leticia",
      },
      {
        title: "CHEIRO INCRIVEL",
        date: "15 de janeiro de 2026",
        rating: 5,
        text: "A combinacao do perfume com a locao e perfeita. O cheiro fica por horas na pele.",
        author: "Mariana",
      },
      {
        title: "PRESENTE PERFEITO",
        date: "5 de janeiro de 2026",
        rating: 5,
        text: "Comprei para presentear e a caixa e linda! O perfume e sofisticado e feminino.",
        author: "Renata",
      },
    ],
  },
  5: {
    productId: 5,
    longDescription:
      "O Kit Cuide-se Bem Deleite reune 3 produtos especiais da linha Deleite, com fragrancia doce e envolvente inspirada em doces artesanais. O creme hidratante para as maos tem formula rica que protege e hidrata intensamente. O body splash desodorante colonia traz a fragrancia Deleite em versao refrescante para usar ao longo do dia. A locao desodorante hidratante completa o trio com hidratacao prolongada e perfumacao duradoura. O kit vem em uma caixa presenteavel exclusiva O Boticario.",
    characteristics: [
      "01 Creme Hidratante para as Maos 45g",
      "01 Body Splash Desodorante Colonia 60ml",
      "01 Locao Desodorante Hidratante 200ml",
    ],
    reviews: [
      {
        title: "CHEIRINHO DOCE",
        date: "23 de janeiro de 2026",
        rating: 5,
        text: "O cheiro e de doce de leite! Simplesmente viciante, nao consigo parar de usar.",
        author: "Aline",
      },
      {
        title: "HIDRATACAO TOP",
        date: "12 de janeiro de 2026",
        rating: 5,
        text: "O creme para maos e o melhor que ja usei. Hidrata sem deixar oleoso e o cheiro e divino.",
        author: "Monica",
      },
      {
        title: "AMEI O KIT",
        date: "4 de janeiro de 2026",
        rating: 5,
        text: "Perfeito para presentear! A caixinha e linda e os produtos sao de otima qualidade.",
        author: "Daniela",
      },
      {
        title: "SUPER RECOMENDO",
        date: "28 de dezembro de 2025",
        rating: 5,
        text: "Todos os 3 produtos sao maravilhosos. A locao hidrata muito e o cheiro dura horas.",
        author: "Beatriz",
      },
    ],
  },
  6: {
    productId: 6,
    longDescription:
      "O Combo Cuide-se Bem Docura Na Pessegura Completo traz 7 itens da linha inspirada no pessego, com fragrancia frutada e doce. Sao produtos para uma rotina completa de cuidados corporais que hidratam, perfumam e cuidam da pele. A linha possui formula com extrato de pessego e ingredientes de origem natural, proporcionando maciez e perfumacao duradoura. Todos os produtos sao veganos e cruelty-free, alinhados com o compromisso de sustentabilidade do Boticario.",
    characteristics: [
      "01 Sabonetes em Barra (4 unidades de 80g)",
      "01 Creme Hidratante Depilatorio Corporal 150ml",
      "01 Hidratante Desodorante para Lamina 200ml",
      "01 Serum Uniformizador Corporal 30ml",
      "01 Body Splash Desodorante Colonia 200ml",
      "01 Locao Desodorante Hidratante 400ml",
      "01 Creme Esfoliante Intenso 200g",
    ],
    reviews: [
      {
        title: "LINHA COMPLETA",
        date: "26 de janeiro de 2026",
        rating: 5,
        text: "Ter todos os produtos da linha e maravilhoso! O cheiro de pessego e irresistivel.",
        author: "Natalia",
      },
      {
        title: "PELE RENOVADA",
        date: "19 de janeiro de 2026",
        rating: 5,
        text: "O esfoliante e incrivel e o serum uniformizador fez milagres na minha pele!",
        author: "Thais",
      },
      {
        title: "MELHOR COMBO",
        date: "11 de janeiro de 2026",
        rating: 5,
        text: "Vale muito a pena! Sao 7 produtos de qualidade por um preco incrivel.",
        author: "Priscila",
      },
      {
        title: "CHEIRO DELICIOSO",
        date: "2 de janeiro de 2026",
        rating: 5,
        text: "O body splash de pessego e viciante e a locao hidrata profundamente. Amei!",
        author: "Luana",
      },
    ],
  },
  7: {
    productId: 7,
    longDescription:
      "O Combo Chocolate reune 4 produtos irresistiveis com o cheirinho de chocolate que e marca registrada das linhas Egeo e Cuide-se Bem. Este combo traz o Creme Esfoliante Cuide-se Bem Deleite Chocolatudo, o Sabonete em Barra Deleite Especial com formato de vaquinha, o Egeo Choc High Desodorante Colonia e o Sufle Hidratante Desodorante Corporal Egeo Choc High. Perfeito para os amantes de chocolate que querem levar essa paixao para a rotina de cuidados.",
    characteristics: [
      "01 Creme Esfoliante Deleite Chocolatudo 150ml",
      "01 Sabonete em Barra Deleite Especial",
      "01 Egeo Choc High Desodorante Colonia",
      "01 Sufle Hidratante Corporal Egeo Choc High 250g",
    ],
    reviews: [
      {
        title: "CHOCOLATE PURO",
        date: "20 de janeiro de 2026",
        rating: 5,
        text: "O cheiro e identico a chocolate de verdade! O Egeo Choc High e o melhor perfume que ja usei.",
        author: "Helena",
      },
      {
        title: "VICIANTE",
        date: "13 de janeiro de 2026",
        rating: 5,
        text: "Nao consigo parar de cheirar minha pele! O sufle hidratante e uma delicia.",
        author: "Joana",
      },
      {
        title: "SABONETE FOFO",
        date: "6 de janeiro de 2026",
        rating: 5,
        text: "O sabonete de vaquinha e a coisa mais fofa! E ainda cheira super bem.",
        author: "Raquel",
      },
      {
        title: "COMBO PERFEITO",
        date: "30 de dezembro de 2025",
        rating: 5,
        text: "A combinacao dos 4 produtos e perfeita. Saio do banho cheirando chocolate!",
        author: "Simone",
      },
    ],
  },
  8: {
    productId: 8,
    longDescription:
      "O Kit Liz Sublime traz 2 produtos sofisticados da linha Liz, uma das mais iconica do Boticario. O Eau de Parfum Liz Sublime possui fragrancia floral oriental com notas de jasmin, rosa e sândalo, criando uma aura de feminilidade e elegancia. A Locao Hidratante Desodorante Corporal complementa a perfumacao, deixando a pele macia e delicadamente perfumada. O kit vem em uma caixa presenteavel exclusiva com acabamento em relevo e detalhes dourados.",
    characteristics: [
      "01 Eau de Parfum Liz Sublime 100ml",
      "01 Locao Hidratante Desodorante Corporal 100ml",
    ],
    reviews: [
      {
        title: "ELEGANCIA PURA",
        date: "24 de janeiro de 2026",
        rating: 5,
        text: "O Liz Sublime e pura sofisticacao. O perfume e refinado e a fixacao e impressionante.",
        author: "Cristina",
      },
      {
        title: "PERFUME MARCANTE",
        date: "17 de janeiro de 2026",
        rating: 5,
        text: "Recebo elogios toda vez que uso! A fragrancia e unica e muito feminina.",
        author: "Angela",
      },
      {
        title: "CAIXA LINDA",
        date: "9 de janeiro de 2026",
        rating: 5,
        text: "A apresentacao do kit e impecavel. A caixa rosa com detalhes em relevo e um luxo!",
        author: "Sandra",
      },
    ],
  },
  9: {
    productId: 9,
    longDescription:
      "O Kit Lily traz 2 itens da mais iconica e sofisticada linha de perfumaria do Boticario. O Eau de Parfum Lily possui fragrancia floral sofisticada com acorde de lirio e notas amadeiradas, reconhecido internacionalmente pela sua qualidade e elegancia. O Creme Acetinado Lily complementa a experiencia, deixando a pele com toque sedoso e perfumacao duradoura. O kit vem em uma caixa presenteavel exclusiva com design elegante em tons de rosa e dourado.",
    characteristics: [
      "01 Eau de Parfum Lily 75ml",
      "01 Creme Acetinado Desodorante Lily 250g",
    ],
    reviews: [
      {
        title: "CLASSICO ATEMPORAL",
        date: "25 de janeiro de 2026",
        rating: 5,
        text: "Lily e um classico que nunca sai de moda. O creme acetinado deixa a pele divina!",
        author: "Marcia",
      },
      {
        title: "SOFISTICACAO",
        date: "18 de janeiro de 2026",
        rating: 5,
        text: "O perfume mais sofisticado que ja usei. A fixacao e de mais de 12 horas na pele.",
        author: "Regina",
      },
      {
        title: "PRESENTE ESPECIAL",
        date: "10 de janeiro de 2026",
        rating: 5,
        text: "Presenteei minha sogra e ela amou! A caixa e sofisticada e o perfume e maravilhoso.",
        author: "Claudia",
      },
      {
        title: "MEU PREFERIDO",
        date: "3 de janeiro de 2026",
        rating: 5,
        text: "Uso Lily ha anos e nunca me canso. O creme acetinado potencializa a fragrancia.",
        author: "Lucia",
      },
    ],
  },
  10: {
    productId: 10,
    longDescription:
      "O Kit Floratta Red traz 4 itens sofisticados da linha Floratta, uma das mais queridas do Boticario. O Desodorante Colonia Floratta Red possui fragrancia floral vermelha intensa com notas de rosa vermelha, framboesa e madeira. O Oleo Perfumado Desodorante Corporal proporciona hidratacao intensa e perfumacao duradoura. A Locao Hidratante Desodorante Corporal complementa os cuidados. O kit inclui ainda uma necessaire exclusiva branca com detalhes dourados. Tudo em uma caixa presenteavel com acabamento premium.",
    characteristics: [
      "01 Desodorante Colonia Floratta Red 75ml",
      "01 Oleo Perfumado Desodorante Corporal 150ml",
      "01 Locao Hidratante Desodorante Corporal 200ml",
      "01 Necessaire Exclusiva",
    ],
    reviews: [
      {
        title: "FLORAL PERFEITO",
        date: "23 de janeiro de 2026",
        rating: 5,
        text: "O Floratta Red e o perfume floral mais lindo que ja usei. A rosa vermelha e marcante!",
        author: "Viviane",
      },
      {
        title: "KIT LUXUOSO",
        date: "14 de janeiro de 2026",
        rating: 5,
        text: "A necessaire e linda e os 3 produtos sao de altissima qualidade. Vale cada centavo!",
        author: "Debora",
      },
      {
        title: "CHEIRO QUE ENCANTA",
        date: "7 de janeiro de 2026",
        rating: 5,
        text: "Sempre recebo elogios quando uso o Floratta Red. O oleo corporal e um luxo!",
        author: "Fabiana",
      },
    ],
  },
  11: {
    productId: 11,
    longDescription:
      "O Kit Deleite Chocolatudo reune 8 itens irresistiveis da linha Cuide-se Bem Deleite Chocolatudo e Intense. Este combo e perfeito para os amantes de chocolate, com produtos que vao desde cuidados corporais ate maquiagem. Inclui a iconica paleta de sombras Intense com formato de barra de chocolate, lip gloss com cheirinho de chocolate, creme hidratante para maos, locao hidratante corporal, body splash desodorante colonia, sabonete em barra formato de vaquinha e muito mais. Todos os produtos possuem a irresistivel fragrancia de chocolate.",
    characteristics: [
      "01 Paleta de Sombras Intense Chocolate",
      "01 Lip Gloss Intense Chocolate",
      "01 Creme Hidratante para Maos 150ml",
      "01 Sabonete em Barra Chocolatudo",
      "01 Body Splash Desodorante Colonia 200ml",
      "01 Locao Desodorante Hidratante 400ml",
      "01 Creme Esfoliante 150ml",
      "01 Necessaire Exclusiva",
    ],
    reviews: [
      {
        title: "MAQUIAGEM INCRIVEL",
        date: "21 de janeiro de 2026",
        rating: 5,
        text: "A paleta de sombras e linda e o lip gloss tem um brilho maravilhoso! Tudo cheirando chocolate.",
        author: "Bianca",
      },
      {
        title: "KIT COMPLETO",
        date: "14 de janeiro de 2026",
        rating: 5,
        text: "8 produtos por esse preco e incrivel! O body splash e viciante e a locao hidrata super bem.",
        author: "Elaine",
      },
      {
        title: "PRESENTE DOS SONHOS",
        date: "5 de janeiro de 2026",
        rating: 5,
        text: "Ganhei de aniversario e amei cada produto! A paleta Intense e um espetaculo.",
        author: "Flavia",
      },
      {
        title: "CHOCO LOVER",
        date: "29 de dezembro de 2025",
        rating: 5,
        text: "Se voce ama chocolate, esse kit e obrigatorio! O sabonete de vaquinha e muito fofo.",
        author: "Adriana",
      },
    ],
  },
}
