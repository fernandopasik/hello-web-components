import { fixture } from '@open-wc/testing-helpers';
import { html } from 'lit-html';
import './hello-world';

describe('hello world', () => {
  it('starts with hello', async () => {
    const hello = await fixture(html`<hello-world></hello-world>`);

    expect(hello.shadowRoot?.textContent).toStrictEqual(expect.stringContaining('Hello world!'));
  });

  it('can say hi to another', async () => {
    const hello = await fixture(html`<hello-world who="Fernando"></hello-world>`);

    expect(hello.shadowRoot?.textContent).toStrictEqual(expect.stringContaining('Fernando!'));
  });
});
