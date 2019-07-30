import Controller from '@ember/controller';
import Requestable from '../mixins/requestable';
import { inject as service } from '@ember/service';

export default Controller.extend(Requestable, {
  user: service('current-user'),
  actions: {
    auth() {
      this.ajax('auth', 'POST')
        .then((response) => {
          if(response['status'] === 'success'){
            this.set('user.userId', response['user_id']);
            this.success('User Login Successful');
            this.send("userDetails");
          }
          else {
            this.set('user.userId', null);
            this.failure('User Login Failed');
          }
      }).catch(function(error) {
        this.set('user.userId', null);
        this.failure(`Something wrong happened Error Message: ${error}. Please try again later`);
      });
    },

    userDetails() {
      this.ajax('me', 'GET')
        .then((response) => {
          if(response['user_id'] === this.get('user.userId')){
            this.set('user.accessType', response['access_type']);
            this.success('User Details Fetched Successfully');
            this.transitionToRoute('books');
          }
          else {
            this.failure("Unable to fetch user details at the moment. Please try again later");
          }
      }).catch(function(error) {
        this.failure(`Something wrong happened Error Message: ${error}. Please try again later`);
      });
    }
  }
});
