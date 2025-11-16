import { notFound } from 'next/navigation';
import CategoryDetail from '@/components/CategoryDetail';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const validCategories = [
  'vitamins',
  'skincare',
  'medicines',
  'hygiene',
  'baby',
  'orthopedics',
];

type PageProps = {
  params: Promise<{ categoria: string; locale: string }>;
};

export async function generateStaticParams() {
  return validCategories.map((categoria) => ({
    categoria,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { categoria, locale } = await params;
  
  if (!validCategories.includes(categoria)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'products' });

  return {
    title: `${t(`items.${categoria}.name`)} - Farmacia Mirasol`,
    description: t(`items.${categoria}.description`),
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { categoria } = await params;

  if (!validCategories.includes(categoria)) {
    notFound();
  }

  return <CategoryDetail categoria={categoria} />;
}
