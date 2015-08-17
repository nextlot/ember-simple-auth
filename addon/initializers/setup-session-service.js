export default function setupSessionStore(registry, config) {
  registry.injection(config.base.sessionService, 'session', config.base.session);
}
