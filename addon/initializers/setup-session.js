import Session from '../session';
import LocalStorage from '../stores/local-storage';

export default function setupSession(registry) {
  registry.register('simple-auth-session:main', Session);
  registry.register('session-store:local-storage', LocalStorage);
  registry.injection('simple-auth-session:main', 'store', 'session-store:local-storage');
}
