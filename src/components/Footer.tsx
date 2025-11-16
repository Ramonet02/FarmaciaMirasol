'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              Contacte
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
              Horari
            </h3>
            <div className="space-y-2 text-sm">
              <p>Dilluns - Divendres: 8:30h - 20:30h</p>
              <p>Dissabtes: 9:00h - 14:00h</p>
              <p>Diumenges: Tancat</p>
            </div>
          </div>

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary-400">
              Farmàcia Mirasol
            </h3>
            <p className="text-gray-400 text-sm">
              La teva farmàcia de confiança a Sant Cugat del Vallès
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Farmàcia Mirasol. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
