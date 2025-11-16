'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from '@/i18n/routing';

type CategoryDetailProps = {
  categoria: string;
};

// Imágenes de ejemplo para cada categoría
const categoryImages: Record<string, string[]> = {
  vitamins: [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
    'https://images.unsplash.com/photo-1550572017-4ab93c3ad4b4?w=800',
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800',
  ],
  skincare: [
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800',
  ],
  medicines: [
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800',
    'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800',
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
  ],
  hygiene: [
    'https://images.unsplash.com/photo-1556228852-80f2e729e5e2?w=800',
    'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=800',
    'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
  ],
  baby: [
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
    'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800',
    'https://images.unsplash.com/photo-1567225591450-74e60b5f921b?w=800',
  ],
  orthopedics: [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800',
  ],
};

const gradients: Record<string, string> = {
  vitamins: 'from-orange-400 to-rose-400',
  skincare: 'from-pink-400 to-purple-400',
  medicines: 'from-blue-400 to-cyan-400',
  hygiene: 'from-green-400 to-teal-400',
  baby: 'from-yellow-400 to-amber-400',
  orthopedics: 'from-indigo-400 to-blue-400',
};

export default function CategoryDetail({ categoria }: CategoryDetailProps) {
  const t = useTranslations('products');
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const images = categoryImages[categoria] || [];
  const gradient = gradients[categoria] || 'from-blue-400 to-cyan-400';

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Botón de regreso */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Slider de imágenes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`${t(`items.${categoria}.name`)} ${currentImage + 1}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Controles del slider */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage
                        ? `bg-white w-8`
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImage
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Información del producto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full mb-4">
                <span className="text-sm font-medium text-gray-600">
                  {t(`items.${categoria}.category`)}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                {t(`items.${categoria}.name`)}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t(`items.${categoria}.description`)}
              </p>
            </div>

            {/* Sección de características */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Características principales
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2`} />
                  <span className="text-gray-700">Productos de alta calidad certificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2`} />
                  <span className="text-gray-700">Asesoramiento farmacéutico profesional</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2`} />
                  <span className="text-gray-700">Envío rápido y seguro disponible</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2`} />
                  <span className="text-gray-700">Garantía de satisfacción</span>
                </li>
              </ul>
            </div>

            {/* Botón de acción */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-gradient-to-r ${gradient} text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-3`}
            >
              <ShoppingCart className="w-5 h-5" />
              Consultar disponibilidad
            </motion.button>

            {/* Información adicional */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Para más información o pedidos personalizados, contacta con nuestro equipo farmacéutico
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
