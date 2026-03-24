import { Award, Crown, Trophy } from 'lucide-react';

const packages = [
  {
    name: 'Pacote Bronze',
    icon: Award,
    description:
      'Detalhamento nível 1 e cristalização. Ideal para um cuidado eficaz e renovação do veículo.',
    priceSmall: 'R$ 1.000',
    priceLarge: 'R$ 1.300',
    items: ['Detalhamento Nível 1', 'Cristalização'],
    color: 'from-amber-600 to-amber-700',
    borderColor: 'border-amber-600/30',
  },
  {
    name: 'Pacote Prata',
    icon: Trophy,
    description:
      'Detalhamento nível 2, polimento técnico e vitrificação de até 1 ano e meio. Para um cuidado completo e proteção prolongada.',
    priceSmall: 'R$ 1.500',
    priceLarge: 'R$ 1.700',
    items: [
      'Detalhamento Nível 2',
      'Polimento técnico',
      'Vitrificação até 1 ano e meio',
    ],
    color: 'from-gray-400 to-gray-500',
    borderColor: 'border-gray-400/30',
  },
  {
    name: 'Pacote Ouro',
    icon: Crown,
    description:
      'Dê ao seu veículo o melhor com o Detalhamento nível 3, polimento técnico e vitrificação de 3 anos.',
    priceSmall: 'R$ 2.000',
    priceLarge: 'R$ 2.300',
    items: [
      'Detalhamento Nível 3',
      'Polimento técnico',
      'Vitrificação até 3 anos',
    ],
    color: 'from-amber-400 to-amber-500',
    borderColor: 'border-amber-400/30',
    featured: true,
  },
];

export default function Packages() {
  return (
    <section
      id="pacotes"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          style={{ fontFamily: 'Bebas Neue, Montserrat, sans-serif' }}
        >
          Pacotes Premium
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Escolha o pacote ideal para seu veículo e garanta proteção e acabamento
          profissional
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border-2 ${pkg.borderColor} hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full ${
                  pkg.featured
                    ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-black'
                    : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}

                <div
                  className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${pkg.color} rounded-2xl mb-6 mx-auto transform -rotate-6 hover:rotate-0 transition-transform duration-300`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-3 text-center">
                  {pkg.name}
                </h3>

                <p className="text-gray-400 mb-6 text-center text-sm leading-relaxed min-h-[80px]">
                  {pkg.description}
                </p>

                <div className="bg-black/40 rounded-xl p-4 mb-6">
                  <ul className="space-y-3">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-800 mt-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center flex-1">
                      <p className="text-xs text-gray-500 mb-1">Pequeno/Médio</p>
                      <p className="text-2xl font-bold text-amber-400">
                        {pkg.priceSmall}
                      </p>
                    </div>

                    <div className="w-px h-16 bg-gray-800"></div>

                    <div className="text-center flex-1">
                      <p className="text-xs text-gray-500 mb-1">Grande</p>
                      <p className="text-2xl font-bold text-amber-400">
                        {pkg.priceLarge}
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5511966325430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 bg-gradient-to-r ${pkg.color} text-white font-bold text-center rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300`}
                  >
                    Agendar Agora
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}