import Controller from '@ember/controller';
import Requestable from '../mixins/requestable';
import { inject as service } from '@ember/service';

export default Controller.extend(Requestable, {
  user_id: null,
  access_type: null,

  actions: {
    auth() {
      this.ajax('auth', 'POST')
        .then((response) => {
          if(response['status'] === 'success'){
            this.set('user_id', response['user_id']);
            this.success('User Login Successful');
            this.send("userDetails");
          }
          else {
            this.set('user_id', null);
            this.failure('User Login Failed');
          }
        debugger;
      }).catch(function(error) {
        this.set('user_id', null);
        this.failure('Something wrong happened. Please try again later');
      });
    },

    userDetails() {
      debugger;
      this.ajax('me', 'GET')
        .then((response) => {
          debugger;
          if(response['user_id'] === this.get('user_id')){
            debugger;
            this.set('access_type', response['access_type']);
            this.success('User Details Fetched Successfully');
            this.transitionToRoute("categories").then((e) => {
              debugger;
            });
          }
          else {
            this.failure("Unable to fetch user details at the moment. Please try again later");
          }
        debugger;
      }).catch(function(error) {
        this.failure("Something wrong happened. Please try again later");
      });
    }
  }
});
