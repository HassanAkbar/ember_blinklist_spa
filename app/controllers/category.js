import Controller from '@ember/controller';
import { computed } from '@ember/object';
export default Controller.extend({
  category_id: null,

  books: computed('category_id', function() {
    return this.get('store').peekAll('book').filter((item) => {
      return item.category_id.get('id') == this.get('category_id');
    });
  }),

  categories: computed('category_id', function() {
    return this.get('store').peekAll('category');
  })
});
