import { axe } from 'jest-axe';
import type { LitElement } from 'lit';
import { html, render } from 'lit';
import './hello-world.js';

describe('hello world', () => {
  it('starts with hello', async () => {
    const wrapper = document.createElement('div');
    render(html`<hello-world></hello-world>`, wrapper);
    document.body.appendChild(wrapper);

    const hello: LitElement | null = document.body.querySelector('hello-world');
    await hello?.updateComplete;

    expect(hello?.shadowRoot?.textContent).toStrictEqual(expect.stringContaining('Hello world!'));

    document.body.innerHTML = '';
  });

  it('can say hi to another', async () => {
    const wrapper = document.createElement('div');
    render(html`<hello-world who="Fernando"></hello-world>`, wrapper);
    document.body.appendChild(wrapper);

    const hello: LitElement | null = document.body.querySelector('hello-world');
    await hello?.updateComplete;

    expect(hello?.shadowRoot?.textContent).toStrictEqual(
      expect.stringContaining('Hello Fernando!'),
    );

    document.body.innerHTML = '';
  });

  it('should be accessible', async () => {
    const wrapper = document.createElement('div');
    render(html`<hello-world who="Fernando"></hello-world>`, wrapper);
    document.body.appendChild(wrapper);

    const hello: LitElement | null = document.body.querySelector('hello-world');
    await hello?.updateComplete;

    expect(await axe(hello as Element)).toHaveNoViolations();
  });
});
