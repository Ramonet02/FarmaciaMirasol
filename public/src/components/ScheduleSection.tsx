'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';

export default function ScheduleSection() {
  const t = useTranslations('schedule');

  const scheduleItems = [
    {
      icon: Calendar,
      day: t('weekdays'),
      time: t('weekdaysTime'),
    },
    {
      icon: Calendar,
      day: t('saturday'),
      time: t('saturdayTime'),
    },
    {
      icon: Calendar,
      day: t('sunday'),
      time: t('sundayTime'),
    }
  ];

  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden -mt-[280px]"
      style={{
        background: 'linear-gradient(135deg, #36a9e1 0%, #66ba80 50%, #95c11f 100%)'
      }}
    >
      {/* Extended gradient fade-in at the top - much longer and smoother */}
      <div 
        className="absolute top-0 left-0 right-0 h-[350px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.1) 85%, transparent 100%)'
        }}
      />

      {/* Glossy overlay effect */}
      <div 
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none z-20"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          backdropFilter: 'blur(1px)'
        }}
      />

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-[280px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Clock className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto italic">
            Designed to Help You Do More <span className="font-serif">With Less Stress</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#36a9e1] to-[#95c11f] rounded-full mb-6">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.day}
              </h3>
              <p className="text-2xl font-semibold bg-gradient-to-r from-[#36a9e1] to-[#95c11f] bg-clip-text text-transparent">
                {item.time}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional features section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-2">Atenció Personalitzada</h3>
            <p className="text-white/80 text-sm">Professionals dedicats a la teva salut</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-2">Comandes Ràpides</h3>
            <p className="text-white/80 text-sm">Rep els teus productes de forma àgil</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-2">Consell Expert</h3>
            <p className="text-white/80 text-sm">Assessorament farmacèutic professional</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
