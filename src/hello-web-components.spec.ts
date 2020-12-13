import HelloWebComponents from './hello-web-components';
import HelloWorld from './lib/hello-world';

describe('hello web components', () => {
  it('exports the web component', () => {
    expect(HelloWebComponents).toStrictEqual(HelloWorld);
  });
});
