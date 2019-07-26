import DS from 'ember-data';
import Config from '../config/environment';

export default DS.JSONAPIAdapter.extend(Config, {
  host: 'https://ancient-springs-73658.herokuapp.com'

});
