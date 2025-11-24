'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tSchedule = useTranslations('schedule');
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const whatsappNumber = '34634829057';
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+34634829057';
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              {t('contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p>{t('address')}</p>
                  <p>{t('city')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <p>{t('phone')}</p>
              </div>
            </div>
          </div>

          {/* Hours Summary */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              {tSchedule('title')}
            </h3>
            <div className="space-y-2 text-sm">
              <p>{tSchedule('weekdays')}: {tSchedule('weekdaysTime')}</p>
              <p>{tSchedule('saturday')}: {tSchedule('saturdayTime')}</p>
              <p>{tSchedule('sunday')}: {tSchedule('sundayTime')}</p>
            </div>
          </div>

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary-400">
              {t('brand')}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('tagline')}
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mirasolfarmacia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group"
                aria-label="Instagram Farmacia Mirasol"
              >
                <Instagram className="w-5 h-5 text-purple-600 group-hover:text-pink-600 transition-colors" />
              </a>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group"
                aria-label="WhatsApp Farmacia Mirasol"
              >
                <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors" />
              </button>

              {/* Teléfono */}
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl group"
                aria-label="Llamar a Farmacia Mirasol"
              >
                <Phone className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} {t('brand')}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
