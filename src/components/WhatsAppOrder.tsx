'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, Shield, CheckCircle, Clock, Zap } from 'lucide-react';

export default function WhatsAppOrder() {
  const t = useTranslations('whatsapp');
  const whatsappNumber = '34634829057';

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Hola! Us escric des de la vostra web')}`;
    window.open(url, '_blank');
  };

  return (
    <section id="whatsapp-order" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-lg"
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 mb-2">{t('subtitle')}</p>
            <p className="text-lg text-gray-500">{t('description')}</p>
          </div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-100 mb-12"
          >
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-semibold py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 mb-6"
            >
              <MessageCircle className="w-7 h-7" />
              {t('button')}
            </button>

            <div className="flex items-center justify-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">{t('simple')}</span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#36a9e1] to-[#66ba80] rounded-full mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('features.fast.title')}</h3>
              <p className="text-sm text-gray-600">{t('features.fast.description')}</p>
            </div>

            <div className="text-center p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#66ba80] to-[#95c11f] rounded-full mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('features.easy.title')}</h3>
              <p className="text-sm text-gray-600">{t('features.easy.description')}</p>
            </div>

            <div className="text-center p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#95c11f] to-[#36a9e1] rounded-full mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('features.schedule.title')}</h3>
              <p className="text-sm text-gray-600">{t('features.schedule.description')}</p>
            </div>
          </motion.div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-md p-6 border border-amber-100"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t('notice.title')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('notice.content')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
