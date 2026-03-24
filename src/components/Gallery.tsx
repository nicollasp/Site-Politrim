import { Camera } from 'lucide-react';

const galleryImages = [
  '/img/img1.jpg?auto=compress&cs=tinysrgb&w=800',
  '/img/img2.jpg?auto=compress&cs=tinysrgb&w=800',
  '/img/img3.jpg?auto=compress&cs=tinysrgb&w=800',
  '/img/img4.jpg?auto=compress&cs=tinysrgb&w=800',
  '/img/img5.jpg?auto=compress&cs=tinysrgb&w=800',
  '/img/img6.jpg?auto=compress&cs=tinysrgb&w=800'
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-center mb-4">
          <Camera className="w-10 h-10 text-amber-500 mr-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, Montserrat, sans-serif' }}>
            Galeria
          </h2>
        </div>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Veja alguns dos nossos trabalhos e a qualidade que entregamos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square border-2 border-amber-500/20 hover:border-amber-500 transition-all duration-300"
            >
              <img
                src={image}
                alt={`Trabalho de estética automotiva ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
