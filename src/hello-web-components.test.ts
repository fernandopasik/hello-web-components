import assert from 'node:assert';
import { describe, it } from 'node:test';
import HelloWebComponents from './hello-web-components.js';
import HelloWorld from './lib/hello-world.js';

describe('hello web components', () => {
  it('exports the web component', () => {
    assert.strictEqual(HelloWebComponents, HelloWorld);
  });
});
