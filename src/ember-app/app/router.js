import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya7-оплата-l');
  this.route('i-i-s-kursovaya7-оплата-e',
  { path: 'i-i-s-kursovaya7-оплата-e/:id' });
  this.route('i-i-s-kursovaya7-оплата-e.new',
  { path: 'i-i-s-kursovaya7-оплата-e/new' });
  this.route('i-i-s-kursovaya7-печать-фото-l');
  this.route('i-i-s-kursovaya7-печать-фото-e',
  { path: 'i-i-s-kursovaya7-печать-фото-e/:id' });
  this.route('i-i-s-kursovaya7-печать-фото-e.new',
  { path: 'i-i-s-kursovaya7-печать-фото-e/new' });
  this.route('i-i-s-kursovaya7-фотокиоск-l');
  this.route('i-i-s-kursovaya7-фотокиоск-e',
  { path: 'i-i-s-kursovaya7-фотокиоск-e/:id' });
  this.route('i-i-s-kursovaya7-фотокиоск-e.new',
  { path: 'i-i-s-kursovaya7-фотокиоск-e/new' });
});

export default Router;
