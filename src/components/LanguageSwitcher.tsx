"use client"
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback((language: string) => {
    i18n.changeLanguage(language);
    
    // Get the current path and redirect to the localized version
    let path = window.location.pathname;
    const locales = ['en', 'es', 'fr'];
    
    // Check if the current path already has a locale prefix
    const hasLocalePrefix = locales.some(locale => path.startsWith(`/${locale}/`));
    
    if (hasLocalePrefix) {
      // Replace the current locale with the new one
      locales.forEach(locale => {
        if (path.startsWith(`/${locale}/`)) {
          path = path.replace(`/${locale}/`, `/${language}/`);
        }
      });
    } else {
      // Add the locale prefix
      path = `/${language}${path}`;
    }
    
    router.push(path);
  }, [i18n, router]);
  
  return (
    <div className="flex gap-3 items-center">
      <span>{t('language')}:</span>
      <div className="flex gap-2">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage('fr')}
          className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          FR
        </button>
      </div>
    </div>
  );
} 