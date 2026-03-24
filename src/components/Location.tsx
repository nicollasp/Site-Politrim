import { MapPin, Instagram, Download } from "lucide-react";

export default function Location() {
  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          style={{ fontFamily: "Bebas Neue, Montserrat, sans-serif" }}
        >
          Onde Estamos
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Nossa Localização
              </h3>
            </div>

            <p className="text-gray-400 mb-6">
              Visite-nos e conheça nosso espaço dedicado ao cuidado do seu
              veículo com tecnologia e profissionalismo.
            </p>

            <a
              href="https://maps.app.goo.gl/TMBtxgCZWERA4zww6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
            >
              Abrir no Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-amber-500/20 h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8642863934407!2d-46.6520877!3d-23.5456841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzQ0LjUiUyA0NsKwMzknMDcuNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização POLITRIM"
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/politrim_oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-6 px-12 w-full max-w-lg rounded-2xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-lg">Siga no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
