export type Category = "Scooter" | "E-bikes" | "Patinetes" | "Triciclos"
export type PowerFilter = "Todas as potências" | "Até 800 W" | "801 a 1000 W" | "Acima de 1000 W" | "Potência não informada"

export type ProductImage = {
  src: string
  alt: string
  color?: string
}

export type Product = {
  id: string
  name: string
  category: Category
  powerW: number | null
  image: string
  alt: string
  images?: ProductImage[]
  manualUrl?: string
  description: string
  autonomy?: string | null
  maxSpeed?: string | null
  battery?: string | null
  chargingTime?: string | null
  weight?: string | null
  maxLoad?: string | null
  highlights: string[]
  availability?: "Disponível sob consulta" | "Aguardando reposição"
}

export const categories: Array<"Todos os produtos" | Category> = [
  "Todos os produtos",
  "Scooter",
  "E-bikes",
  "Patinetes",
  "Triciclos",
]

export const powerFilters: PowerFilter[] = [
  "Todas as potências",
  "Até 800 W",
  "801 a 1000 W",
  "Acima de 1000 W",
  "Potência não informada",
]

const legalInfo = "A loja informa que o modelo é autopropelido e dispensa CNH/emplacamento; confirme o enquadramento aplicável antes da compra."
const commonScooterFeatures = ["Amortecedor traseiro duplo", "Iluminação em LED", "Chave eletrônica", "Painel digital", "Alarme e trava antifurto"]
const imagePlaceholder = "/products/placeholder.svg"

export const products: Product[] = [
  {
    id: "muuv-emax-pix", name: "MUUV EMAX PIX", category: "Scooter", powerW: 800,
    image: "/products/muuv-emax.jpeg", alt: "Imagem provisória — substituir pela foto oficial da MUUV EMAX PIX",
    description: "Scooter elétrica com cesto, painel digital e recursos antifurto.", autonomy: "25 km em média", maxSpeed: "32 km/h", battery: "Lítio 48 V · 12 Ah", maxLoad: "120 kg",
    highlights: [...commonScooterFeatures, "Cesto", legalInfo],
  },
  {
    id: "muuv-milu", name: "MUUV MILU 1000W", category: "Scooter", powerW: 1000,
    image: "/products/muuv-milu-cinza.jpeg", alt: "MUUV MILU 1000W",
    images: [
      {src: "/products/muuv-milu-cinza.jpeg", alt: "MUUV MILU 1000W", color: "Cinza"},
      {src: "/products/muuv-milu-cinza-tras.jpeg", alt: "MUUV MILU 1000W", color: "Cinza"},
      {src: "/products/muuv-milu-cinza-cesto.jpeg", alt: "MUUV MILU 1000W", color: "Cinza"},
      {src: "/products/muuv-milu-cinza-painel.jpeg", alt: "MUUV MILU 1000W", color: "Cinza"},
      {src: "/products/muuv-milu-rosa.jpeg", alt: "MUUV MILU 1000W", color: "Rosa"},
      {src: "/products/muuv-milu-bege.jpeg", alt: "MUUV MILU 1000W", color: "Bege"}
    ],
    description: "Scooter elétrica com cesto, painel digital, recursos antifurto e cesto.", autonomy: "35 km em média", maxSpeed: "32 km/h", battery: "Lítio 48 V · 20 Ah", maxLoad: "150 kg",
    highlights: [...commonScooterFeatures, "Cesto", legalInfo],
  },
  {
    id: "muuv-goo-rapid-1000", name: "MUUV GOO RAPID 1000", category: "Scooter", powerW: 1000,
    image: "/products/muuv-rapid-cinza.jpeg", alt: "MUUV GOO RAPID 1000",
    images: [
      {src: "/products/muuv-rapid-cinza.jpeg", alt: "MUUV GOO RAPID 1000", color: "Cinza"},
      {src: "/products/muuv-rapid-cinza-tras.jpeg", alt: "MUUV GOO RAPID 1000", color: "Cinza"},
      {src: "/products/muuv-rapid-azul.jpeg", alt: "MUUV GOO RAPID 1000", color: "Azul"},
      {src: "/products/muuv-rapid-azul-tras.jpeg", alt: "MUUV GOO RAPID 1000", color: "Azul"},
      {src: "/products/muuv-rapid-laranja.jpeg", alt: "MUUV GOO RAPID 1000", color: "Laranja"},
      {src: "/products/muuv-rapid-laranja-tras.jpeg", alt: "MUUV GOO RAPID 1000", color: "Laranja"},
      {src: "/products/muuv-rapid-bege.jpeg", alt: "MUUV GOO RAPID 1000", color: "Bege"},
      {src: "/products/muuv-rapid-bege-tras.jpeg", alt: "MUUV GOO RAPID 1000", color: "Bege"}
    ],
    manualUrl: "/manuals/rapid.pdf",
    description: "Scooter elétrica com bateria de lítio de alta capacidade e recursos antifurto.", autonomy: "45 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah",
    highlights: [...commonScooterFeatures, legalInfo],
  },
  {
    id: "muuv-ebike-one-1000", name: "MUUV E-BIKE ONE 1000", category: "E-bikes", powerW: 1000,
    image: "/products/muuv-ebike-one-frente.jpeg", alt: "MUUV E-BIKE ONE 1000",
    images: [
      {src: "/products/muuv-ebike-one-frente.jpeg", alt: "MUUV E-BIKE ONE 1000"},
      {src: "/products/muuv-ebike-one-tras.jpeg", alt: "MUUV E-BIKE ONE 1000"},
      {src: "/products/muuv-ebike-one-farol.jpeg", alt: "MUUV E-BIKE ONE 1000"},
    ],
    description: "E-bike elétrica com bateria de lítio e recursos antifurto.", autonomy: "35 km em média", maxSpeed: "32 km/h", battery: "Lítio 48 V · 20 Ah", maxLoad: "120 kg",
    highlights: [...commonScooterFeatures, legalInfo], availability: "Aguardando reposição",
  },
  {
    id: "muuv-m105", name: "MUUV M105", category: "Scooter", powerW: 1000,
    image: "/products/muuv-m105-preta.jpeg", alt: "MUUV M105",
    images:[
      {src: "/products/muuv-m105-preta.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-preta-tras.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-preta-zoom.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-painel.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-preta-farol.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-preta-cargo.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-preta-roda.jpeg", alt: "MUUV M105", color: "Preto"},
      {src: "/products/muuv-m105-branca.jpeg", alt: "MUUV M105", color: "Branco"},
      {src: "/products/muuv-m105-branca-tras.jpeg", alt: "MUUV M105", color: "Branco"},
    ],
    manualUrl: "/manuals/105.pdf",
    description: "Scooter elétrica com bagageiro, entrada USB e cavalete de estacionamento.", autonomy: "40 a 45 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah", maxLoad: "140 kg",
    highlights: [...commonScooterFeatures, "Bagageiro", "Entrada USB", "Cavalete de estacionamento", "Consulte cores disponíveis", legalInfo],
  },
  {
    id: "muuv-joy-super", name: "MUUV JOY SUPER", category: "Scooter", powerW: 800,
    image: "/products/muuv-joy.jpeg", alt: "Imagem provisória — substituir pela foto oficial da MUUV JOY SUPER",
    description: "Scooter elétrica com cesto e bateria de lítio.", autonomy: "25 a 30 km em média", maxSpeed: "32 km/h", battery: "Lítio 48 V · 20 Ah", maxLoad: "140 kg",
    highlights: [...commonScooterFeatures, "Cesto", legalInfo],
  },
  {
    id: "muuv-goo-luna-1000", name: "MUUV GOO LUNA 1000W", category: "Scooter", powerW: 1000,
    image: "/products/muuv-luna-cinza.jpeg", alt: "MUUV GOO LUNA",
    images: [
      {src: "/products/muuv-luna-cinza.jpeg", alt: "MUUV GOO LUNA", color: "Cinza"},
      {src: "/products/muuv-luna-tras-cinza.jpeg", alt: "MUUV GOO LUNA TRÁS", color: "Cinza"},
      {src: "/products/muuv-luna-azul.jpeg", alt: "MUUV GOO LUNA", color: "Azul"},
      {src: "/products/muuv-luna-tras-azul.jpeg", alt: "MUUV GOO LUNA", color: "Azul"},
    ],
    manualUrl: "/manuals/luna.pdf",
    description: "Scooter elétrica com tecnologia NFC, entrada USB e cavalete de estacionamento.", autonomy: "35 a 45 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah", maxLoad: "170 kg",
    highlights: [...commonScooterFeatures, "Tecnologia NFC", "Entrada USB", "Cavalete de estacionamento", "Consulte cores disponíveis", legalInfo], availability: "Aguardando reposição"
  },
  {
    id: "muuv-mdot", name: "MUUV MDOT", category: "Scooter", powerW: 1000,
    image: "/products/muuv-mdot.jpeg", alt: "Imagem provisória — substituir pela foto oficial da MUUV MDOT",
    description: "Scooter elétrica com ré e acesso por pulseira ou cartão NFC.", autonomy: "40 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 20 Ah", maxLoad: "180 kg",
    highlights: [...commonScooterFeatures, "Pulseira e cartão NFC", "Possui ré", legalInfo],
  },
  {
    id: "muuv-goo-vespa-1000", name: "MUUV GOO VESPA 1000W", category: "Scooter", powerW: 1000,
    image: "/products/muuv-vespa-creme.jpeg", alt: "MUUV GOO VESPA",
    images: [
      {src: "/products/muuv-vespa-creme.jpeg", alt: "MUUV GOO VESPA", color: "Creme"},
      {src: "/products/muuv-vespa-creme-tras.jpeg", alt: "MUUV GOO VESPA", color: "Creme"},
      {src: "/products/muuv-vespa-creme-painel.jpeg", alt: "MUUV GOO VESPA", color: "Creme"},
      {src: "/products/muuv-vespa-verde.jpeg", alt: "MUUV GOO VESPA", color: "Verde"},
      {src: "/products/muuv-vespa-verde-seat.jpeg", alt: "MUUV GOO VESPA", color: "Verde"},
      {src: "/products/muuv-vespa-verde-detail.jpeg", alt: "MUUV GOO VESPA", color: "Verde"},
      {src: "/products/muuv-vespa-verde-zoom.jpeg", alt: "MUUV GOO VESPA", color: "Verde"},
    ],
    manualUrl: "/manuals/vespa.pdf",
    description: "Scooter elétrica com tecnologia NFC, bagageiro e entrada USB.", autonomy: "35 a 45 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah", maxLoad: "160 kg",
    highlights: [...commonScooterFeatures, "Tecnologia NFC", "Bagageiro", "Entrada USB", "Cavalete de estacionamento", "Consulte cores disponíveis", legalInfo],
  },
  {
    id: "muuv-m5-pro-x11", name: "MUUV M5 PRO X11", category: "Scooter", powerW: 1000,
    image: "/products/muuv-m5-pro-x11.jpeg", alt: "Imagem provisória — substituir pela foto oficial da MUUV M5 PRO X11",
    description: "Scooter elétrica com sistema de ré, tecnologia NFC e compartimento para bateria extra.", autonomy: "45 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah", maxLoad: "180 kg",
    highlights: [...commonScooterFeatures, "Sistema de ré", "Tecnologia NFC", "Compartimento para bateria extra", "Consulte cores disponíveis", legalInfo],
  },
  {
    id: "muuv-t10", name: "MUUV T10", category: "Triciclos", powerW: 1000,
    image: "products/muuv-t10.jpeg", alt: "MUUV T10",
    images: [
      {src: "/products/muuv-t10.jpeg", alt: "MUUV T10"},
      {src: "/products/muuv-t10-tras.jpeg", alt: "MUUV T10"},
    ],
    manualUrl: "/manuals/t10.pdf",
    description: "Triciclo elétrico com até três lugares, dois bagageiros e banco regulável.", autonomy: "45 km em média", maxSpeed: "32 km/h", battery: "Lítio 23 Ah", maxLoad: "170 kg",
    highlights: ["Possui ré", "Alerta de ré", "Iluminação em LED", "Freio motor", "Alarme e trava antifurto", "Dois bagageiros", "Banco regulável", "Até 3 lugares", "Versão informada pela loja como dispensada de CNH/emplacamento; confirme o enquadramento aplicável."],
  },
  {
    id: "muuv-m5-pro-x12-super", name: "MUUV M5 PRO X12 SUPER", category: "Scooter", powerW: 1000,
    image: "products/muuv-x12-super-branca.jpeg", alt: "MUUV M5 PRO X12 SUPER",
    images: [
      {src: "products/muuv-x12-super-branca.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Branco"},
      {src: "products/muuv-x12-super-branca-tras.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Branco"},
      {src: "products/muuv-x12-super-painel.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Branco"},
      {src: "products/muuv-x12-super-freio.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Branco"},
      {src: "products/muuv-x12-super-susp.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Branco"},
      {src: "products/muuv-x12-super-vermelha.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Vermelho"},
      {src: "products/muuv-x12-super-preta.jpeg", alt: "MUUV M5 PRO X12 SUPER", color: "Preto"},
    ],
    manualUrl: "/manuals/x12-super.pdf",
    description: "Scooter elétrica com sistema de ré, Bluetooth e compartimento para bateria extra.", autonomy: "40 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 20 Ah", maxLoad: "180 kg",
    highlights: [...commonScooterFeatures, "Sistema de ré", "Bluetooth", "Tecnologia NFC", "Compartimento para bateria extra", "Consulte cores disponíveis", legalInfo],
  },
  {
    id: "muuv-work-1000", name: "MUUV WORK 1000W", category: "Scooter", powerW: 1000,
    image: "/products/muuv-work.jpeg", alt: "MUUV WORK",
    images: [
      {src: "/products/muuv-work.jpeg", alt: "MUUV WORK"},
      {src: "/products/muuv-work-tras.jpeg", alt: "MUUV WORK"},
      {src: "/products/muuv-work-painel.jpeg", alt: "MUUV WORK"},
    ],
    manualUrl: "/manuals/work.pdf",
    description: "Scooter elétrica com alta capacidade de carga, ré e acesso por cartão NFC.", autonomy: "55 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 24 Ah", maxLoad: "220 kg",
    highlights: [...commonScooterFeatures, "Cartão NFC", "Possui ré", legalInfo],
  },
  {
    id: "muuv-tera-1000", name: "MUUV TERA 1000W", category: "Scooter", powerW: 1000,
    image: "/products/muuv-tera.jpeg", alt: "MUUV TERA",
    images: [
      {src: "/products/muuv-tera.jpeg", alt: "MUUV TERA"},
      {src: "/products/muuv-tera-tras.jpeg", alt: "MUUV TERA"},
    ],
    description: "Scooter elétrica com espaço para bateria adicional, controle automático de velocidade e bagageiro.", autonomy: "40 a 50 km em média", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah", maxLoad: "200 kg",
    highlights: [...commonScooterFeatures, "Espaço para bateria adicional", "Controle automático de velocidade", "Bagageiro", "Cartão NFC", "Entrada USB", "Cavalete de estacionamento", "Consulte cores disponíveis", legalInfo],
  },
  {
    id: "muuv-gt2000", name: "MUUV GT2000", category: "E-bikes", powerW: null,
    image: "/products/muuv-gt2000.jpeg", alt: "MUUV GT2000",
    images: [
      {src: "/products/muuv-gt2000.jpeg", alt: "MUUV GT2000"},
      {src: "/products/muuv-gt2000-tras.jpeg", alt: "MUUV GT2000"},
      {src: "/products/muuv-gt2000-lateral.jpeg", alt: "MUUV GT2000"},
      {src: "/products/muuv-gt2000-painel.jpeg", alt: "MUUV GT2000"},
      {src: "/products/muuv-gt2000-farol.jpeg", alt: "MUUV GT2000"},
      {src: "/products/muuv-gt2000-batery.jpeg", alt: "MUUV GT2000"},
    ],
    description: "E-bike elétrica com freio a disco hidráulico, tecnologia NFC e entrada USB.", autonomy: "60 km em média", maxSpeed: "60 km/h", battery: "Lítio 48 V · 30 Ah", maxLoad: "190 kg",
    highlights: ["Freio a disco hidráulico", "Amortecedor traseiro", "Iluminação em LED", "Chave eletrônica", "Tecnologia NFC", "Painel digital", "Alarme e trava antifurto", "Entrada USB", "A loja informa dispensa de CNH/emplacamento; por atingir 60 km/h, confirmar classificação e requisitos legais antes de publicar essa alegação."],
  },
  {
    id: "muuv-gt1000", name: "MUUV GT1000", category: "E-bikes", powerW: null,
    image: "/products/muuv-gt1000-preta.jpeg", alt: "MUUV GT1000",
    images: [
      {src: "/products/muuv-gt1000-preta.jpeg", alt: "MUUV GT1000", color: "Preto"},
      {src: "/products/muuv-gt1000-preta-tras.jpeg", alt: "MUUV GT1000", color: "Preto"},
      {src: "/products/muuv-gt1000-preta-painel.jpeg", alt: "MUUV GT1000", color: "Preto"},
      {src: "/products/muuv-gt1000-bege.jpeg", alt: "MUUV GT1000", color: "Bege"},
      {src: "/products/muuv-gt1000-verde.jpeg", alt: "MUUV GT1000", color: "Verde"},
    ],
    manualUrl: "/manuals/gt1000.pdf",
    description: "E-bike elétrica com freio a disco, amortecedor traseiro e tecnologia NFC.", autonomy: "50 km em média", maxSpeed: "32 km/h", battery: "Lítio 48 V · 15 Ah", maxLoad: "150 kg",
    highlights: ["Freio a disco", "Amortecedor traseiro", "Iluminação em LED", "Chave eletrônica", "Tecnologia NFC", "Painel digital", "Alarme e trava antifurto", "Consulte cores disponíveis", legalInfo],
  },
  {
    id: "muuv-m12-sport-701", name: "SPORT 701 — MUUV M12 AUTOPROP.", category: "Scooter", powerW: 1000,
    image: "/products/muuv-sport-701-preta.jpeg", alt: "SPORT 701 MUUV M12",
    images: [
      {src: "/products/muuv-sport-701-preta.jpeg", alt: "SPORT 701 MUUV M12", color: "Preto"},
      {src: "/products/muuv-sport-701-azul.jpeg", alt: "SPORT 701 MUUV M12", color: "Azul"},
      {src: "/products/muuv-sport-701-tras-azul.jpeg", alt: "SPORT 701 MUUV M12", color: "Azul"},
      {src: "/products/muuv-sport-701-vermelha.jpeg", alt: "SPORT 701 MUUV M12", color: "Vermelho"},
      {src: "/products/muuv-sport-701-tras-vermelha.jpeg", alt: "SPORT 701 MUUV M12", color: "Vermelho"},
    ],
    manualUrl: "/manuals/sport-701.pdf",
    description: "Modelo autopropelido com banco único, freio a disco e marcha à ré.", autonomy: "40 km", maxSpeed: "32 km/h", battery: "Lítio 60 V · 23 Ah", maxLoad: "180 kg",
    highlights: ["Freio a disco", "Amortecedores dianteiro e traseiro duplos", "Banco único", "Iluminação em LED", "Chave eletrônica", "Painel digital", "Possui marcha à ré", legalInfo],
  },
  {
    id: "muuv-l12-2000", name: "MUUV L12 2000W", category: "Patinetes", powerW: 2000,
    image: "/products/muuv-l12.jpeg", alt: "MUUV L12 2000W",
    description: "Patinete elétrico com motor duplo e suspensão dianteira e traseira.", autonomy: "60 km", maxSpeed: "Até 75 km/h (mediante solicitação de desbloqueio)", battery: "Lítio 48 V · 20 Ah", maxLoad: "150 kg",
    highlights: ["Motor duplo de 1000 W", "Painel digital com indicador de velocidade e nível de bateria", "Farol em LED", "Suspensão dianteira e traseira", "Velocidade de 75 km/h mediante solicitação de desbloqueio"],
  },
  {
    id: "muuv-l10-1000", name: "MUUV L10 1000W", category: "Patinetes", powerW: 1000,
    image: "/products/muuv-l10.jpeg", alt: "MUUV L10 1000W",
    description: "Patinete elétrico com painel digital, farol em LED e suspensão dianteira e traseira.", autonomy: "35 km em média", maxSpeed: "Até 45 km/h (mediante solicitação de desbloqueio)", battery: "Lítio 48 V · 12 Ah", maxLoad: "120 kg",
    highlights: ["Painel digital com indicador de velocidade e nível de bateria", "Farol em LED", "Suspensão dianteira e traseira", "Velocidade de 45 km/h mediante solicitação de desbloqueio"],
  },
  {
    id: "muuv-e40-800", name: "MUUV E40 800W", category: "Patinetes", powerW: 800,
    image: "/products/muuv-e40.jpeg", alt: "MUUV E40 800W",
    description: "Patinete elétrico com painel digital, farol em LED e suspensão dianteira e traseira.", autonomy: "30 km em média", maxSpeed: "Até 25 km/h (mediante solicitação de desbloqueio)", battery: "Lítio 36 V · 10 Ah", maxLoad: "120 kg",
    highlights: ["Painel digital com indicador de velocidade e nível de bateria", "Farol em LED", "Suspensão dianteira e traseira", "Velocidade de 25 km/h mediante solicitação de desbloqueio"],
  },
  {
    id: "muuv-e30-650", name: "MUUV E30 650W", category: "Patinetes", powerW: 650,
    image: "/products/muuv-e30.jpeg", alt: "MUUV E30 650W",
    description: "Patinete elétrico com painel digital, farol em LED e suspensão dianteira e traseira.", autonomy: "25 km em média", maxSpeed: "25 km/h", battery: "Lítio 36 V · 7,8 Ah", maxLoad: "90 kg",
    highlights: ["Painel digital com indicador de velocidade e nível de bateria", "Farol em LED", "Suspensão dianteira e traseira"],
  },
  {
    id: "muuv-e20-500", name: "MUUV E20 500W", category: "Patinetes", powerW: 500,
    image: "/products/muuv-e20.jpeg", alt: "MUUV E20 500W",
    description: "Patinete elétrico com painel digital e farol em LED.", autonomy: "25 km em média", maxSpeed: "25 km/h", battery: "Lítio 36 V · 7,8 Ah", maxLoad: "80 kg",
    highlights: ["Painel digital com indicador de velocidade e nível de bateria", "Farol em LED"],
  },
  {
    id: "muuv-t2", name: "MUUV T2", category: "Patinetes", powerW: 800,
    image: "/products/muuv-t2-pro.jpeg", alt: "MUUV T2",
    description: "Patinete elétrico com painel digital, farol em LED e suspensão dianteira e traseira.", autonomy: "30 km", maxSpeed: "60 km/h", battery: "Lítio 48 V · 18 Ah", maxLoad: "150 kg",
    highlights: ["Motor de 800 W (pico de 1000 W)", "Painel digital com indicador de velocidade e nível de bateria", "Farol em LED", "Suspensão dianteira e traseira", "Confirmar classificação e requisitos legais para o modelo de 60 km/h antes de afirmar dispensa de CNH/emplacamento."],
  },
  {
    id: "muuv-d2", name: "MUUV D2", category: "Patinetes", powerW: 800,
    image: "/products/muuv-d2.jpeg", alt: "MUUV D2",
    description: "Patinete elétrico com banco dobrável e removível, banco traseiro com baú e suspensão dianteira e traseira.", autonomy: "30 km", maxSpeed: "60 km/h", battery: "Lítio 48 V · 18 Ah", maxLoad: "150 kg",
    highlights: ["Motor de 800 W (pico de 1000 W)", "Painel digital com indicador de velocidade e bateria", "Farol em LED", "Banco dobrável e removível", "Banco traseiro com baú", "Suspensão dianteira e traseira", "Confirmar classificação e requisitos legais para o modelo de 60 km/h antes de afirmar dispensa de CNH/emplacamento."],
  },
]
