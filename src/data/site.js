const WHATSAPP = 'https://wa.me/5511970824236'

export const links = {
  whatsapp: WHATSAPP,
  instagram: 'https://www.instagram.com/guustavo.aa/',
}

export const nav = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

export const services = [
  {
    id: 'detalhamento',
    name: 'DETALHAMENTO AUTOMOTIVO',
    description:
      'Limpeza minuciosa do interior ao exterior, com atenção especial a cada acabamento.',
    price: 'R$ 349,90',
    image: 'detalhamento',
    alt: 'Porsche preto coberto de espuma durante o detalhamento, em garagem com luzes vermelhas',
    href: `${WHATSAPP}?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Detalhamento%20Automotivo.`,
  },
  {
    id: 'polimento',
    name: 'POLIMENTO TÉCNICO',
    description:
      'Refinamento da pintura para reduzir imperfeições superficiais e recuperar o brilho.',
    price: 'R$ 599,90',
    image: 'polimento',
    alt: 'Politriz refinando a pintura preta ao lado do farol de um Porsche',
    href: `${WHATSAPP}?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Polimento%20T%C3%A9cnico.`,
  },
]

export const hours = [
  { days: 'Segunda a sexta', time: '09h às 20h' },
  { days: 'Sábado', time: '09h às 17h' },
]
