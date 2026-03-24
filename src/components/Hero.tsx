interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)`
        }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            src="/WhatsApp_Image_2026-02-26_at_22.17.51.jpeg"
            alt="POLITRIM Logo"
            className="w-64 h-64 object-contain drop-shadow-2xl animate-fadeIn"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider animate-slideDown" style={{ fontFamily: 'Bebas Neue, Montserrat, sans-serif' }}>
          POLITRIM
        </h1>

        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>

        <h2 className="text-2xl md:text-4xl text-amber-400 mb-6 font-light tracking-wide">
          Estética Automotiva Premium
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Cuidado profissional para seu veículo com acabamento impecável
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate('servicos')}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg rounded-lg hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 w-full sm:w-auto"
          >
            Ver Serviços
          </button>

          <a
            href="https://wa.me/5511966325430"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 font-bold text-lg rounded-lg hover:bg-amber-500 hover:text-black transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
             WhatsApp
          </a>
        </div>
      </div>

    </section>
  );
}
