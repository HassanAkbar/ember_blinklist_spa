import Mixin from '@ember/object/mixin';
import Config from '../config/environment';
import { inject as service } from '@ember/service';

export default Mixin.create(Config, {
  notify: service(),

  failure: function(error_message) {
    this.notify.error(error_message, {
      classNames: ['error']
    });
  },

  success: function(message) {
    this.notify.success(message, {
      classNames: ['success']
    });
  },

  ajax: function(path, requestType) {
    return Ember.$.ajax({
      url: `${Config.host}/${path}`,
      type: requestType
    });
  } 
});
