import {
  init as initFbt,
  IntlViewerContext,
} from 'fbt';
import translations from '../../i18n/translatedFbts.json';

const DEFAULT_LOCALE = 'en_US';

export async function loadTranslations(locale: string) {
  IntlViewerContext.locale = locale || DEFAULT_LOCALE;
  initFbt({ translations });
}
