export default function setupSessionRestoration(instance, config) {
  const { container } = instance;
  const applicationRoute = container.lookup('route:application');
  const session = container.lookup(config.base.session);
  applicationRoute.reopen({
    beforeModel() {
      const superResult = this._super(...arguments);
      return session.restore().then(() => superResult, () => superResult);
    }
  });
}
