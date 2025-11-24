'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollToContent = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-white to-transparent h-screen overflow-hidden flex items-center">
      {/* Gradient Background animado con movimiento descendente */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <svg className="absolute w-full h-[80%]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
        <defs>
          <motion.linearGradient
            id="heroGradient"
            x1="50%" y1="0%" x2="50%" y2="100%"
            animate={{ 
              y1: ["0%", "20%", "0%"],
              y2: ["100%", "120%", "100%"]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <motion.stop
              offset="0%"
              stopColor="#36a9e1"
              animate={{ 
                stopColor: ["#36a9e1", "#66ba80", "#36a9e1"],
                offset: ["0%", "10%", "0%"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.stop
              offset="50%"
              stopColor="#66ba80"
              animate={{ 
                stopColor: ["#66ba80", "#95c11f", "#66ba80"],
                offset: ["50%", "60%", "50%"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            <motion.stop
              offset="100%"
              stopColor="#95c11f"
              animate={{ 
                stopColor: ["#95c11f", "#36a9e1", "#95c11f"],
                offset: ["100%", "90%", "100%"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.linearGradient>
        </defs>

          {/* Path principal con ondulación descendente */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.7,
              d: [
                "M 0,150 Q 300,100 600,200 T 1200,150 L 1200,250 Q 900,300 600,200 T 0,250 Z",
                "M 0,180 Q 300,130 600,230 T 1200,180 L 1200,280 Q 900,330 600,230 T 0,280 Z",
                "M 0,150 Q 300,100 600,200 T 1200,150 L 1200,250 Q 900,300 600,200 T 0,250 Z"
              ]
            }}
            transition={{ 
              opacity: { duration: 1.2 },
              d: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            fill="url(#heroGradient)"
            style={{ filter: 'blur(20px)' }}
          />

          {/* Path secundario para efecto de profundidad */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.4,
              d: [
                "M 0,180 Q 300,230 600,130 T 1200,180 L 1200,280 Q 900,230 600,330 T 0,280 Z",
                "M 0,200 Q 300,250 600,150 T 1200,200 L 1200,300 Q 900,250 600,350 T 0,300 Z",
                "M 0,180 Q 300,230 600,130 T 1200,180 L 1200,280 Q 900,230 600,330 T 0,280 Z"
              ]
            }}
            transition={{ 
              opacity: { duration: 1.4, delay: 0.2 },
              d: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            fill="url(#heroGradient)"
            style={{ filter: 'blur(25px)' }}
          />
        </svg>
      </div>

      {/* Elementos decorativos flotantes con movimiento descendente */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, 5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden md:block absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-[#36a9e1]/20 to-[#66ba80]/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, -5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden md:block absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-[#66ba80]/20 to-[#95c11f]/20 rounded-full blur-xl"
      />

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-gray-900 mb-4 md:mb-6 leading-tight px-4"
          >
            {t('welcome')}
            <br />
            <span className="bg-gradient-to-r from-[#36a9e1] via-[#66ba80] to-[#95c11f] bg-clip-text text-transparent">
              {t('pharmacyName')}
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4"
          >
            <Heart className="w-6 h-6 text-[#36a9e1]" />
            {t('tagline')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
