import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

import { loadTranslations } from './helpers/translations';

async function initClient() {
  const locale = document.documentElement.getAttribute('lang') || null;
  await loadTranslations(locale);
  hydrate(
    <App />,
    document.getElementById('root')
  );
}

initClient();
