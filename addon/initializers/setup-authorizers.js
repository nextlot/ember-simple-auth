export default function setupAuthorizers(registry, config) {
  registry.injection(config.base.authorizer, 'session', 'simple-auth-session:main');
}
