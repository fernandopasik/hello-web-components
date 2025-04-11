import assert from 'node:assert';
import { describe, it } from 'node:test';
import HelloWebComponents from './hello-web-components.ts';
import HelloWorld from './lib/hello-world.ts';

describe('hello web components', () => {
  it('exports the web component', () => {
    assert.strictEqual(HelloWebComponents, HelloWorld);
  });
});
