export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" style={{ fontFamily: 'Bebas Neue, Montserrat, sans-serif' }}>
          Sobre a Politrim
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-12"></div>

        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-amber-500/20 shadow-xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            A Politrim é especializada em <span className="text-amber-400 font-semibold">estética automotiva</span>,
            oferecendo serviços profissionais de detalhamento, polimento e proteção da pintura.
            Nosso objetivo é entregar <span className="text-amber-400 font-semibold">acabamento impecável</span> e
            valorização do seu veículo através de técnicas avançadas e produtos de alta qualidade.
          </p>
        </div>
      </div>
    </section>
  );
}
