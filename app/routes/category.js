import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    this.set('category_id', params.category_id);
    if(this.get('controller')) {
      this.set('controller.category_id', params.category_id);
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('category_id', this.get('category_id'));
  }
});
