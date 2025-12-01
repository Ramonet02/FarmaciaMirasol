'use client';

import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const t = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;
  const [scrolled, setScrolled] = useState(false);

  const locales = [
    { code: 'ca', name: 'Català' },
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ];

  const navItems = [
    { key: 'contact', label: 'Contacto', href: '#contacto' },
    { key: 'services', label: 'Servicios', href: '#servicios' },
    { key: 'about', label: 'Nosotros', href: '#nosotros' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = scrolled ? 70 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-sm shadow-md py-3'
        : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + texto alineados en fila */}
          <motion.div
            className="cursor-pointer flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="./images/logo_farmacia.jpg"
              alt="Logo de la farmacia"
              className={`h-10 w-auto md:h-12 max-w-[140px] object-contain transition-all duration-300 ${scrolled ? 'h-9 md:h-10' : 'h-10 md:h-12'
                }`}
            />
            <div className="flex flex-col justify-center">
              <h1
                className={`font-bold font-display bg-gradient-to-r from-[#36a9e1] via-[#66ba80] to-[#95c11f] bg-clip-text text-transparent transition-all duration-300 ${scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                  }`}
              >
                {t('title')}
              </h1>
              <p
                className={`text-gray-600 transition-all duration-300 ${scrolled
                  ? 'text-[10px] sm:text-xs opacity-0 h-0'
                  : 'text-xs sm:text-sm opacity-100'
                  }`}
              >
                {t('subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Navegación - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100/80 ${scrolled ? 'text-sm' : 'text-base'
                  }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Selector de idioma */}
          <div className="relative group">
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100/80 transition-all duration-200 ${scrolled ? 'text-sm' : 'text-base'
                }`}
            >
              <Globe
                className={`text-[#36a9e1] transition-all duration-300 ${scrolled ? 'w-4 h-4' : 'w-5 h-5'
                  }`}
              />
              <span className="font-medium hidden sm:inline">
                {locales.find((l) => l.code === currentLocale)?.name}
              </span>
            </button>

            <div className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => handleLocaleChange(locale.code)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${currentLocale === locale.code
                    ? 'bg-gradient-to-r from-[#36a9e1]/10 to-[#66ba80]/10 text-[#36a9e1] font-semibold'
                    : 'text-gray-700'
                    }`}
                >
                  {locale.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
