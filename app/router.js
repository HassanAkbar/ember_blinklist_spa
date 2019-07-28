import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories');
  this.route('category', { path: '/category/:category_id' });
  this.route('book', { path: '/book/:book_id' });
  this.route('books');
});

export default Router;
