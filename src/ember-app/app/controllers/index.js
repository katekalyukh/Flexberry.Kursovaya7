import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya7.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya7.title'),
          children: [{
            link: 'i-i-s-kursovaya7-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-фотокиоск-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya7-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-печать-фото-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya7-оплата-l',
            caption: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya7.i-i-s-kursovaya7-оплата-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})