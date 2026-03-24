import { Car, Sparkles, Shield, Droplets } from 'lucide-react';

const services = [
  {
    title: 'Detalhamento Nível 1',
    description: 'Mais do que limpeza, um brilho duradouro! Cuide da parte externa do seu carro com um toque especial.',
    icon: Car,
    priceSmall: 'R$ 100',
    priceLarge: 'R$ 120',
    items: [
      'Limpeza completa da parte externa',
      'Revitalizador de plásticos internos',
      'Limpeza interna leve',
      'Detalhamento em cantos minuciosos'
    ]
  },
  {
    title: 'Detalhamento Nível 2',
    description: 'Um toque de sofisticação para o seu dia a dia! Este serviço completo é ideal para quem busca realçar a beleza do veículo.',
    icon: Sparkles,
    priceSmall: 'R$ 150',
    priceLarge: 'R$ 170',
    items: [
      'Limpeza externa e interna intermediária',
      'Aplicação de cera Premium',
      'Revitalização de plásticos externos',
      'Revitalização dos pneus',
      'Revitalização de carpetes'
    ]
  },
  {
    title: 'Detalhamento Nível 3',
    description: 'Cuidados completos para um acabamento impecável! Com atenção aos mínimos detalhes.',
    icon: Shield,
    priceSmall: 'R$ 200',
    priceLarge: 'R$ 220',
    items: [
      'Limpeza externa e interna detalhada',
      'Cera premium top',
      'Higienização tapetes',
      'Revitalização de plásticos externos',
      'Revitalização pneus',
      'Revitalização caixa de rodas'
    ]
  },
  {
    title: 'Detalhamento Nível 4',
    description: 'Renovação total para quem valoriza os mínimos detalhes! Este serviço vai além do básico.',
    icon: Sparkles,
    priceSmall: 'R$ 300',
    priceLarge: 'R$ 350',
    items: [
      'Revitalização de tapetes',
      'Limpeza externa',
      'Limpeza básica interna',
      'Limpeza de rodas',
      'Cera premium',
      'Limpeza emblemas/grades/borrachas'
    ]
  },
  {
    title: 'Higienização Interna',
    description: 'O interior do seu carro higienizado e seguro! Um serviço completo para renovar estofados, plásticos e carpetes.',
    icon: Droplets,
    priceSmall: 'R$ 550',
    priceLarge: 'R$ 700',
    items: [
      'Limpeza de couro ou estofados',
      'Limpeza de carpete',
      'Limpeza do teto',
      'Limpeza de cintos',
      'Limpeza do porta malas',
      'Condicionamento dos plásticos internos'
    ]
  },
  {
    title: 'Higienização de Motor',
    description: 'Cuide do coração do seu carro! Prolongue a vida útil do motor com um serviço técnico especializado.',
    icon: Shield,
    priceSmall: 'R$ 120 (Simples)',
    priceLarge: 'R$ 200 (Detalhada)',
    items: [
      'Inspeção técnica',
      'Isolamento de partes sensíveis',
      'Limpeza especializada com proteção duradoura'
    ]
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" style={{ fontFamily: 'Bebas Neue, Montserrat, sans-serif' }}>
          Nossos Serviços
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-2xl font-bold text-amber-400 mb-3 text-center">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 text-center text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="text-amber-500 mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <div className="text-center flex-1">
                      <p className="text-xs text-gray-500 mb-1">Pequeno/Médio</p>
                      <p className="text-lg font-bold text-amber-400">{service.priceSmall}</p>
                    </div>
                    <div className="w-px h-12 bg-gray-800"></div>
                    <div className="text-center flex-1">
                      <p className="text-xs text-gray-500 mb-1">Grande</p>
                      <p className="text-lg font-bold text-amber-400">{service.priceLarge}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl p-8 border border-amber-500/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 rounded-xl p-6 border border-amber-500/10">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Polimento Comercial</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Melhora o brilho da pintura e corrige pequenas imperfeições, proporcionando uma grande mudança em seu carro!
              </p>
              <ul className="space-y-2 mb-4">
                {['Lavagem', 'Descontaminação da pintura', 'Correção do verniz', 'Aplicação de proteção (Cera)'].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between pt-4 border-t border-gray-800">
                <span className="text-amber-400 font-bold">R$ 500</span>
                <span className="text-gray-500">|</span>
                <span className="text-amber-400 font-bold">R$ 700</span>
              </div>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-amber-500/10">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Polimento Técnico</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Perfeição no brilho e correção das imperfeições! Um processo avançado que elimina riscos e marcas.
              </p>
              <ul className="space-y-2 mb-4">
                {['Detalhamento Nível 1', 'Descontaminação da pintura', 'Correção do verniz', 'Aplicação de Vitrificador'].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <span className="text-amber-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-amber-400 font-bold pt-4 border-t border-gray-800">
                Consulte-nos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
