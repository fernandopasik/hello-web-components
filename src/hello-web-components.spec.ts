import { describe, expect, it } from '@jest/globals';
import HelloWebComponents from './hello-web-components.js';
import HelloWorld from './lib/hello-world.js';

describe('hello web components', () => {
  it('exports the web component', () => {
    expect(HelloWebComponents).toStrictEqual(HelloWorld);
  });
});
