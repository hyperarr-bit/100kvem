export interface QuizQuestion {
  id: number
  image: string
  question: string
  options: {
    label: string
    emoji: string
  }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produto-foto-1-FbkBkGk30GCVzzy2dPZQUNta4Cnb63.png",
    question:
      "O Kit Body Splash Dream \u00e9 perfeito para quem ama fragr\u00e2ncias marcantes! Qual sensa\u00e7\u00e3o voc\u00ea mais busca em um perfume?",
    options: [
      { label: "Frescor e leveza", emoji: "\u2728" },
      { label: "Do\u00e7ura e romantismo", emoji: "\ud83c\udf38" },
      { label: "Sofistica\u00e7\u00e3o e eleg\u00e2ncia", emoji: "\ud83c\udf19" },
      { label: "Mist\u00e9rio e sensualidade", emoji: "\ud83c\udf1c" },
    ],
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pruduto-nova-foto-HgX8huooe39Jc1nD8MLYSo4xHCQbzt.png",
    question:
      "Se voc\u00ea pudesse escolher um presente para emocionar algu\u00e9m especial, qual desses kits escolheria?",
    options: [
      { label: "Kit Nuvem de Alegria", emoji: "\u2601\ufe0f \ud83c\udf38" },
      { label: "Kit Presente Lily", emoji: "\ud83c\udf3c" },
      { label: "Combo Chocolate", emoji: "\ud83c\udf6b \ud83c\udf53" },
      { label: "Kit Deleite Chocolatudo", emoji: "\ud83c\udf6b \u2728" },
    ],
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produto-foto-3-haCmUt3uKncFwRkxmJFSWjwVhT06qL.png",
    question:
      "O que voc\u00ea gostaria que essa pessoa especial sentisse ao receber um presente do Botic\u00e1rio?",
    options: [
      { label: "Emo\u00e7\u00e3o e felicidade", emoji: "\ud83e\udd29" },
      { label: "Orgulho e alegria", emoji: "\ud83c\udf1f" },
      { label: "Amor e ternura", emoji: "\ud83d\udc95" },
      { label: "Surpresa e gratid\u00e3o", emoji: "\ud83c\udf81" },
    ],
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produto-foto-4-YnTdefrTuXB0XIr5KkIiALlp3eJcqp.png",
    question:
      "Entre os kits especiais do Botic\u00e1rio, qual combina mais com a personalidade dessa pessoa?",
    options: [
      { label: "Delicada como a Nuvem de Alegria", emoji: "\u2601\ufe0f \ud83c\udf38" },
      { label: "Sofisticada como o Lily", emoji: "\ud83c\udf3c" },
      { label: "Doce como o Combo Chocolate", emoji: "\ud83c\udf6b \ud83c\udf53" },
      { label: "Encantadora como o Floratta Red", emoji: "\ud83c\udf39" },
    ],
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produto-foto-5-bfeHq1DXLb3U5z2YdlyCqk3ATmqcnn.png",
    question:
      "Se essa pessoa pudesse escolher um cheirinho para usar no dia a dia, qual seria?",
    options: [
      {
        label: "Frescor leve e alegre como o Kit Nuvem de Alegria",
        emoji: "\u2601\ufe0f",
      },
      {
        label: "Aroma elegante e cl\u00e1ssico do Kit Lily",
        emoji: "\ud83c\udf3c",
      },
      {
        label: "Perfume adocicado e envolvente do Combo Do\u00e7ura na Pessegura",
        emoji: "\ud83c\udf51",
      },
      {
        label: "Um toque de sensualidade com o Combo Chocolate",
        emoji: "\ud83c\udf6b",
      },
    ],
  },
]
