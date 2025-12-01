'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandsSlider() {
  const t = useTranslations('brands');

  const brands = [
    { name: 'Uriach', logo: '/logos/uriach.png' },
    { name: 'Aquilea', logo: '/logos/aquilea.png' },
    { name: 'SVR', logo: '/logos/svr.png' },
    { name: 'ISDIN', logo: '/logos/isdin.svg' },
    { name: 'Nutergia', logo: '/logos/nutergia.jpg' },
    { name: 'Vitae', logo: '/logos/vitae.png' },
    { name: 'Prim', logo: '/logos/prim.png' },
    { name: 'Lacer', logo: '/logos/lacer.png' },
    { name: 'Neutrogena', logo: '/logos/neutrogena.png' },
    { name: 'Farline', logo: '/logos/farline.jpg' },
    { name: 'Bayer', logo: '/logos/bayer.png' },
    { name: 'Dentaid', logo: '/logos/dentaid.png' },
    { name: 'Ferrer', logo: '/logos/ferrer.png' },
    { name: 'Vitis', logo: '/logos/vitis.png' }
  ];

  // Duplicar el array para efecto infinito sin cortes
  const duplicatedBrands = [...brands, ...brands];

  // Calcular el ancho total dinámicamente
  // Ancho de cada card (160px en desktop) + gap (64px) = 224px por elemento
  const cardWidth = 224; // 160px card + 64px gap
  const totalWidth = brands.length * cardWidth;

  return (
    <section className="relative py-12 sm:py-16 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-transparent via-gray-50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold font-display text-center text-gray-800 mb-12"
        >
          {t('title')}
        </motion.h3>

        <div className="relative overflow-hidden py-4">
          {/* Gradientes laterales para fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Contenedor del slider */}
          <motion.div
            className="flex gap-12 sm:gap-16"
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: brands.length * 2.5, // 2.5 segundos por marca
                ease: 'linear',
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 flex items-center justify-center rounded-lg hover:shadow-xl transition-shadow duration-300 p-4"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

}
