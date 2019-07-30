import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition(transition) {
      if(!this.get('controller.user.userId')) {
        transition.abort();
      }
      return true;
    }

  }
});
