import { Phone, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-amber-500/20 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <img
              src="/WhatsApp_Image_2026-02-26_at_22.17.51.jpeg"
              alt="POLITRIM Logo"
              className="w-32 h-32 object-contain mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-400 text-sm">
              Estética Automotiva Premium
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pacotes" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511966325430"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 96632-5430</span>
              </a>

              <a
                href="https://www.instagram.com/politrim_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@politrim_oficial</span>
              </a>

              <a
                href="https://maps.app.goo.gl/TMBtxgCZWERA4zww6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-gray-400 hover:text-amber-500 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Ver Localização</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="text-center">
            <a
              href="https://wa.me/5511966325430"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 mb-6"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <p className="text-center text-gray-500 text-sm">
            © 2026 POLITRIM - Estética Automotiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
