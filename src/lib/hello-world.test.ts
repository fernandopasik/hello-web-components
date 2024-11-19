import 'global-jsdom/register';
import { html, render, type LitElement } from 'lit';
import assert from 'node:assert';
import { afterEach, describe, it } from 'node:test';
import './hello-world.js';

const fixture = async (value: unknown): Promise<Element | null> => {
  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  render(value, wrapper);
  document.body.appendChild(wrapper);
  const litElem = document.querySelector<LitElement>('#wrapper :first-child');
  await litElem?.updateComplete;

  return litElem;
};

const cleanup = (): void => {
  document.querySelector('#wrapper')?.remove();
};

describe('hello world', () => {
  afterEach(() => {
    cleanup();
  });

  it('starts with hello', async () => {
    const SUT = await fixture(html`<hello-world></hello-world>`);

    assert.ok(Boolean(SUT?.shadowRoot?.textContent?.includes('Hello world!')));
  });

  it('can say hi to another', async () => {
    const SUT = await fixture(html`<hello-world who="Fernando"></hello-world>`);

    assert.ok(Boolean(SUT?.shadowRoot?.textContent?.includes('Hello Fernando!')));
  });
});
