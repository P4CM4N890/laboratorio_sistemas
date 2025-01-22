import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { english, spanish } from './';

i18n
    .use( initReactI18next )
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: english
            },
            es: {
                translation: spanish
            }
        }
    })

    export default i18n;