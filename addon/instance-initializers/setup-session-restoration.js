import Ember from 'ember';

export default function setupSessionRestoration(instance, config) {
  const { container } = instance;
  const applicationRoute = container.lookup('route:application');
  const session = container.lookup(config.base.session);
  applicationRoute.reopen({
    beforeModel(transition) {
      const superCall = Ember.run.bind(this, this._super, transition);
      return session.restore().then(superCall, superCall);
    }
  });
}
