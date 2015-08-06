import ENV from '../config/environment';

export default function setupSessionStore(registry) {
  registry.injection('service:session', 'session', ENV['simple-auth'].base.session);
}
