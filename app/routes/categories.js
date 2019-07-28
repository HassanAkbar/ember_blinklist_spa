import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll('category');
  },

  afterModel() {
    let firstCategory = this.get('store').peekAll('category').get('firstObject.id');
    this.replaceWith('category', firstCategory);
  }
});
