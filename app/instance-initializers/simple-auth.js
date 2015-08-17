import setupSessionRestoration from 'ember-simple-auth/instance-initializers/setup-session-restoration';
import ENV from '../config/environment';

export default {
  name:       'simple-auth',
  initialize: function(instance) {
    var config = ENV['simple-auth'];
    setupSessionRestoration(instance, config);
  }
};
