'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: MapPin,
      key: 'address',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      key: 'phone',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      key: 'email',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      key: 'schedule',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="contacto" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Fondo con gradiente transparente en bordes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent" />
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <svg className="absolute w-full h-[60%]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#36a9e1" />
              <stop offset="50%" stopColor="#66ba80" />
              <stop offset="100%" stopColor="#95c11f" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1.2 }}
            d="M 0,160 Q 300,210 600,140 T 1200,160 L 1200,260 Q 900,210 600,280 T 0,260 Z"
            fill="url(#contactGradient)"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold font-display text-gray-900 mb-2">
                  {t(`info.${info.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`info.${info.key}.content`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-2 shadow-xl h-full min-h-[400px] overflow-hidden">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.0234567890!2d2.034567890123456!3d41.50123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMwJzA0LjQiTiAywrAwMicwNC40IkU!5e0!3m2!1sen!2ses!4v1234567890123!5m2!1sen!2ses&q=Passeig+del+Baixador,+78,+08195+Mira-sol,+Barcelona"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-[#36a9e1] to-[#66ba80] rounded-2xl p-4 shadow-lg"
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
