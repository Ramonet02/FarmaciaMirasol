import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('products');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Categoría no encontrada</p>
        <Link
          href="/#productos"
          className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
        >
          Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
