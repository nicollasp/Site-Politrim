import { Bike } from 'lucide-react';

const motorcycleServices = [
  {
    title: 'Detalhamento Nível 1',
    price: 'R$ 50',
    description:
      'Proteção e cuidado para manter sua moto impecável! Ideal para quem busca uma limpeza pro dia a dia.',
    items: [
      'Limpeza detalhada',
      'Selante de pintura',
      'Selante nos pneus',
    ],
  },
  {
    title: 'Detalhamento Nível 2',
    price: 'R$ 100',
    description:
      'Cuidado completo com técnicas avançadas para máxima proteção e brilho.',
    items: [
      'Limpeza Detalhada',
      'Tratamento da Corrente',
      'Selante de pneus',
      'Revitalização de plásticos',
      'Selante 5 meses pintura',
      'Aplicação de Verniz de Motor',
    ],
  },
];

export default function MotorcycleServices() {
  return (
    <section id="motos" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center mb-4">
          <Bike className="w-12 h-12 text-amber-500 mr-4" />
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Bebas Neue, Montserrat, sans-serif' }}
          >
            Serviços para Motos
          </h2>
        </div>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-16"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {motorcycleServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6 mx-auto">
                <Bike className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold text-amber-400 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-3xl font-bold text-white mb-4 text-center">
                {service.price}
              </p>

              <p className="text-gray-400 mb-6 text-center text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="bg-black/40 rounded-xl p-4">
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="text-amber-500 mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BOTÃO ALINHADO NO FINAL */}
              <a
                href="https://wa.me/5511966325430"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-auto py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-center rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
              >
                Agendar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}