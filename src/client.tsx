import {
  init as initFbt,
  IntlViewerContext,
} from 'fbt';
import React from 'react';
import { hydrate } from 'react-dom';
import translations from './i18n/translatedFbts.json';
import App from './App';

import { loadTranslations } from './helpers/translations';

function initClient() {
  const locale = document.documentElement.getAttribute('lang') || null;
  loadTranslations(locale);
  hydrate(
    <App />,
    document.getElementById('root')
  );
}

initClient();
