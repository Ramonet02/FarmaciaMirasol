'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Clock, MapPin, Users } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { icon: Award, value: '25+', key: 'experience' },
    { icon: Users, value: '4,7/5', key: 'clients' }
  ];

  return (
    <section id="nosotros" className="relative py-12 sm:py-16 md:py-20 overflow-hidden mb-10">
      {/* Fondo con gradiente transparente en bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent" />

      {/* Gradient Background animado */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <svg
          className="absolute w-full h-[60%]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 400"
        >
          <defs>
            <motion.linearGradient
              id="aboutGradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              animate={{
                x1: ['0%', '-20%', '0%'],
                x2: ['100%', '80%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.stop
                offset="0%"
                stopColor="#36a9e1"
                animate={{ stopColor: ['#36a9e1', '#66ba80', '#36a9e1'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.stop
                offset="50%"
                stopColor="#66ba80"
                animate={{ stopColor: ['#66ba80', '#95c11f', '#66ba80'] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
              <motion.stop
                offset="100%"
                stopColor="#95c11f"
                animate={{ stopColor: ['#95c11f', '#36a9e1', '#95c11f'] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.linearGradient>
          </defs>

          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.2 }}
            d="M 0,200 Q 300,250 600,150 T 1200,200 L 1200,300 Q 900,250 600,350 T 0,300 Z"
            fill="url(#aboutGradient)"
            style={{ filter: 'blur(15px)' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4 md:mb-6 px-4">
              {t('title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed px-4">
              {t('description1')}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
              {t('description2')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 mb-12 md:mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl"
                >
                  <stat.icon className="w-8 h-8 text-[#36a9e1] mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t(`stats.${stat.key}`)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-[#36a9e1] to-[#66ba80] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-8">
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">
                    {t('mission.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('mission.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#66ba80] rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#36a9e1] rounded-full blur-3xl"
            />
          </motion.div>
        </div>

        {/* Espaciador transparente para suavizar transición */}
        <div className="h-12 sm:h-16 md:h-20"></div>
      </div>
    </section>
  );
}
