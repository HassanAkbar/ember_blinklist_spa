import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  userId: null,
  accessType: null,

  loggedIn: computed('userId', function() {
    return this.get('userId') != null;
  }),

  freeUser: computed.equal('accessType', 'free')
});