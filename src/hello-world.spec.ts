import { fixture } from '@open-wc/testing-helpers';
import { html } from 'lit-html';
import './hello-world';

describe('hello world', () => {
  it('starts with hello', async () => {
    const SUT = await fixture(html`<hello-world></hello-world>`);
    const hello = SUT.shadowRoot?.querySelector('.hello-world');

    expect(hello?.textContent).toStrictEqual('Hello world!');
  });

  it('can say hi to another', async () => {
    const SUT = await fixture(html`<hello-world who="Fernando"></hello-world>`);
    const hello = SUT.shadowRoot?.querySelector('.hello-world');

    expect(hello?.textContent).toStrictEqual('Hello Fernando!');
  });
});
