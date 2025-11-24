'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Car, Clock, MapPin } from 'lucide-react';

export default function ParkingSection() {
  const t = useTranslations('parking');

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50 to-transparent" />

      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <svg className="absolute w-full h-[60%]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="parkingGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#36a9e1" />
              <stop offset="50%" stopColor="#4a9fd8" />
              <stop offset="100%" stopColor="#36a9e1" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.2 }}
            d="M 0,180 Q 300,140 600,200 T 1200,180 L 1200,280 Q 900,240 600,300 T 0,280 Z"
            fill="url(#parkingGradient)"
            style={{ filter: 'blur(15px)' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Lado izquierdo - Información */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block bg-gradient-to-r from-[#36a9e1] to-[#66ba80] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t('badge')}
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                  {t('title')}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('description')}
                </p>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#36a9e1] to-[#4a9fd8] rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('time.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('time.description')}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#66ba80] to-[#95c11f] rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('location.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('location.description')}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('free.title')}</h3>
                      <p className="text-gray-600 text-sm">{t('free.description')}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Lado derecho - Visual */}
            <div className="relative bg-gradient-to-br from-[#36a9e1] to-[#66ba80] p-8 sm:p-12 flex items-center justify-center min-h-[400px] lg:min-h-0">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Icono de coche grande */}
                <div className="relative z-10">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
                    <Car className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                  </div>
                </div>

                {/* Elementos decorativos */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-xl"
                />

                {/* Badge flotante */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#36a9e1]" />
                    <span className="font-bold text-gray-900">15 min</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
