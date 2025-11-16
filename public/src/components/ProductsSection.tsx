'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ProductsSection() {
  const t = useTranslations('products');

  const products = [
    {
      key: 'vitamins',
      gradient: 'from-orange-400 to-rose-400'
    },
    {
      key: 'skincare',
      gradient: 'from-pink-400 to-purple-400'
    },
    {
      key: 'medicines',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      key: 'hygiene',
      gradient: 'from-green-400 to-teal-400'
    },
    {
      key: 'baby',
      gradient: 'from-yellow-400 to-amber-400'
    },
    {
      key: 'orthopedics',
      gradient: 'from-indigo-400 to-blue-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section id="productos" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Fondo con gradiente transparente en bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent" />
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <svg className="absolute w-full h-[60%]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="productsGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#36a9e1" />
              <stop offset="50%" stopColor="#66ba80" />
              <stop offset="100%" stopColor="#95c11f" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.2 }}
            d="M 0,180 Q 300,120 600,220 T 1200,180 L 1200,280 Q 900,340 600,240 T 0,280 Z"
            fill="url(#productsGradient)"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#36a9e1] to-[#66ba80] text-white px-3 sm:px-4 py-2 rounded-full mb-3 md:mb-4"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm font-semibold">{t('badge')}</span>
          </motion.div>
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
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-[#36a9e1]" />
                  <span className="text-sm font-medium text-gray-600">
                    {t(`items.${product.key}.category`)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3 relative z-10">
                  {t(`items.${product.key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6 relative z-10">
                  {t(`items.${product.key}.description`)}
                </p>

                <Link href={`/catalogo/${product.key}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 bg-gradient-to-r ${product.gradient} text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300`}
                  >
                    {t('button')}
                  </motion.button>
                </Link>

                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${product.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
