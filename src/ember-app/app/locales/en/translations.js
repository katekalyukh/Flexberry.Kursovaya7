import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya7ОплатаLForm from './forms/i-i-s-kursovaya7-оплата-l';
import IISKursovaya7ПечатьФотоLForm from './forms/i-i-s-kursovaya7-печать-фото-l';
import IISKursovaya7ФотокиоскLForm from './forms/i-i-s-kursovaya7-фотокиоск-l';
import IISKursovaya7ОплатаEForm from './forms/i-i-s-kursovaya7-оплата-e';
import IISKursovaya7ПечатьФотоEForm from './forms/i-i-s-kursovaya7-печать-фото-e';
import IISKursovaya7ФотокиоскEForm from './forms/i-i-s-kursovaya7-фотокиоск-e';
import IISKursovaya7КоррекцияModel from './models/i-i-s-kursovaya7-коррекция';
import IISKursovaya7ОплатаModel from './models/i-i-s-kursovaya7-оплата';
import IISKursovaya7ПечатьФотоModel from './models/i-i-s-kursovaya7-печать-фото';
import IISKursovaya7ФотокиоскModel from './models/i-i-s-kursovaya7-фотокиоск';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya7-коррекция': IISKursovaya7КоррекцияModel,
    'i-i-s-kursovaya7-оплата': IISKursovaya7ОплатаModel,
    'i-i-s-kursovaya7-печать-фото': IISKursovaya7ПечатьФотоModel,
    'i-i-s-kursovaya7-фотокиоск': IISKursovaya7ФотокиоскModel
  },

  'application-name': 'Kursovaya7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya7',
          title: 'Kursovaya7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya7: {
          caption: 'Kursovaya7',
          title: 'Kursovaya7',
          'i-i-s-kursovaya7-фотокиоск-l': {
            caption: 'Фотокиоск',
            title: ''
          },
          'i-i-s-kursovaya7-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-kursovaya7-оплата-l': {
            caption: 'Оплата',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya7-оплата-l': IISKursovaya7ОплатаLForm,
    'i-i-s-kursovaya7-печать-фото-l': IISKursovaya7ПечатьФотоLForm,
    'i-i-s-kursovaya7-фотокиоск-l': IISKursovaya7ФотокиоскLForm,
    'i-i-s-kursovaya7-оплата-e': IISKursovaya7ОплатаEForm,
    'i-i-s-kursovaya7-печать-фото-e': IISKursovaya7ПечатьФотоEForm,
    'i-i-s-kursovaya7-фотокиоск-e': IISKursovaya7ФотокиоскEForm
  },

});

export default translations;
