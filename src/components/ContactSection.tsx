'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [showParkingTooltip, setShowParkingTooltip] = useState(false);
  const [showParkingModal, setShowParkingModal] = useState(false);

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

  const handlePhoneClick = () => {
    window.location.href = 'tel:+34634829057';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:mirasolfarmacia@gmail.com';
  };

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
            {contactInfo.map((info, index) => {
              const isPhone = info.key === 'phone';
              const isEmail = info.key === 'email';
              const isClickable = isPhone || isEmail;
              const handleClick = isPhone ? handlePhoneClick : isEmail ? handleEmailClick : undefined;

              return (
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
                  onClick={handleClick}
                  className={`rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 ${isClickable ? 'cursor-pointer' : ''}`}
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
                  {info.key === 'phone' || info.key === 'schedule' ? (
                    <p className="text-gray-600 mt-1">
                      {t(`info.${info.key}.content2`)}
                    </p>
                  ) : null}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl p-2 shadow-xl h-full min-h-[400px] overflow-hidden">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.4557989287564!2d2.0328269!3d41.4763889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a495a1c1234567%3A0xabcdef1234567890!2sPasseig%20del%20Baixador%2C%2078%2C%2008195%20Mira-sol%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
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

            <motion.button
              onClick={handlePhoneClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-[#36a9e1] to-[#66ba80] rounded-2xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              aria-label="Llamar a la farmacia"
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.button>

            {/* Botón de parking debajo del botón de teléfono */}
            <motion.button
              onClick={() => setShowParkingModal(true)}
              onMouseEnter={() => setShowParkingTooltip(true)}
              onMouseLeave={() => setShowParkingTooltip(false)}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-16 -right-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              aria-label="Ver información del parking"
            >
              <Car className="w-6 h-6 text-white" />

              {/* Tooltip hover */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: showParkingTooltip ? 1 : 0,
                  x: showParkingTooltip ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
                className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 pointer-events-none whitespace-nowrap"
              >
                <div className="bg-white rounded-lg shadow-xl p-2 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-900">{t('parking.title')}</p>
                </div>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 -ml-1">
                  <div className="border-4 border-transparent border-l-white" />
                </div>
              </motion.div>

              {/* Pulso animado */}
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 bg-blue-600 rounded-2xl"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Modal de parking */}
        {showParkingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowParkingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="sticky top-0 bg-gradient-to-r from-[#36a9e1] to-[#66ba80] p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{t('parking.modal.title')}</h3>
                      <p className="text-white/90 text-sm">{t('parking.modal.subtitle')}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowParkingModal(false)}
                    className="bg-white/20 hover:bg-white/30 rounded-xl p-2 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-6">
                {/* Imagen del parking */}
                <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                  <img
                    src="/images/parking.jpg"
                    alt="Parking Farmacia Mirasol"
                    className="w-full h-auto"
                  />
                </div>

                {/* Información */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-600 rounded-lg p-2">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">{t('parking.modal.time')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{t('parking.modal.timeDesc')}</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-600 rounded-lg p-2">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">{t('parking.modal.location')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{t('parking.modal.locationDesc')}</p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-600 rounded-lg p-2">
                        <Car className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">{t('parking.modal.free')}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{t('parking.modal.freeDesc')}</p>
                  </div>
                </div>

                {/* Nota adicional */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-blue-700">ℹ️ {t('parking.modal.note')}</span> {t('parking.modal.noteDesc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
