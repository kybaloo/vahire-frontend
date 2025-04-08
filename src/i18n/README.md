# Internationalization in VA Hire

This directory contains the internationalization (i18n) configuration for the VA Hire application.

## Structure

- `config.ts`: Main configuration file for i18n
- `../translations/`: Directory containing translation files
  - `en/`: English translations
  - `es/`: Spanish translations
  - `fr/`: French translations

## Usage

To use translations in your components:

```tsx
'use client'; // If using in a client component

import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('home')}</p>
    </div>
  );
}
```

## Adding a New Language

1. Create a new directory under `src/translations/` with the language code (e.g., `de` for German)
2. Add translation files in the new directory, following the same structure as existing languages
3. Update the `config.ts` file to include the new language

## Adding New Translation Keys

1. Add the new key to all language files to maintain consistency
2. Follow the existing naming convention for keys 