'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { UserCheck, Lightbulb, PackageCheck, Beaker, Bone, Gem } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    { icon: UserCheck, key: 'medicines' },
    { icon: Lightbulb, key: 'health' },
    { icon: PackageCheck, key: 'consultations' },
    { icon: Beaker, key: 'products' },
    { icon: Bone, key: 'emergency' },
    { icon: Gem, key: 'care' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="servicios" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Fondo con gradiente transparente en bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent" />

      {/* Gradient Background animado */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <svg
          className="absolute w-full h-[60%]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 400"
        >
          <defs>
            <motion.linearGradient
              id="servicesGradient"
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
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            d="M 0,150 Q 300,100 600,200 T 1200,150 L 1200,250 Q 900,300 600,200 T 0,250 Z"
            fill="url(#servicesGradient)"
            style={{ filter: 'blur(15px)' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-gray-900 mb-3 md:mb-4 px-4">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300 relative z-10"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#36a9e1] to-[#66ba80] rounded-full flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-semibold font-display text-gray-900 mb-3">
                {t(`items.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`items.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
