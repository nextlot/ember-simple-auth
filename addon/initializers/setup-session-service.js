export default function setupSessionStore(registry, config) {
  console.log(config.base.sessionService);
  console.log(config.base.session);
  registry.injection(config.base.sessionService, 'session', config.base.session);
}
