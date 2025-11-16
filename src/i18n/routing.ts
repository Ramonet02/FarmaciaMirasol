import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ca', 'es', 'en'],
  defaultLocale: 'ca',
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
