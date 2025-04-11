import { expect, test } from '@sand4rt/experimental-ct-web';
import HelloWorld from './hello-world.ts';

// eslint-disable-next-line @typescript-eslint/unbound-method
test('starts with hello', async ({ mount }) => {
  const component = await mount(HelloWorld);

  await expect(component).toContainText('Hello world!');
});
