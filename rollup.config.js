import rollupConfig from '@monx/rollup-config';
import { peerDependencies, dependencies } from './package.json';

export default rollupConfig({
  peerDependencies,
  dependencies,
  input: ['src/index.ts', 'src/firebase.ts', 'src/stripe.ts'],
});
