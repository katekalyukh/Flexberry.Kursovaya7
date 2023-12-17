import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya7',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya7',
          title: 'Kursovaya7'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
