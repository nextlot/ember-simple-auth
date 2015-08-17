import ENV from '../config/environment';
import Configuration from 'ember-simple-auth/configuration';
import setupSession from 'ember-simple-auth/initializers/setup-session';
import setupSessionService from 'ember-simple-auth/initializers/setup-session-service';
import setupAuthorizers from 'ember-simple-auth/initializers/setup-authorizers';

export default {
  name:       'simple-auth',
  initialize: function(registry, application) {
    var config = ENV['simple-auth'];
    Configuration.load(config);
    setupSession(registry);
    setupSessionService(registry, config);
    setupAuthorizers(registry, config);
  }
};
