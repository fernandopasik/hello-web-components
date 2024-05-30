import { afterEach, describe, expect, it } from '@jest/globals';
import { axe } from 'jest-axe';
import type { LitElement } from 'lit';
import { html, render } from 'lit';
import './hello-world.js';

const fixture = async (value: unknown): Promise<Element> => {
  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  render(value, wrapper);
  document.body.appendChild(wrapper);
  const litElem = document.querySelector('#wrapper')?.firstElementChild as LitElement;
  await litElem.updateComplete;

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

    expect(SUT.shadowRoot?.textContent).toStrictEqual(expect.stringContaining('Hello world!'));
  });

  it('can say hi to another', async () => {
    const SUT = await fixture(html`<hello-world who="Fernando"></hello-world>`);

    expect(SUT.shadowRoot?.textContent).toStrictEqual(expect.stringContaining('Hello Fernando!'));
  });

  it('should be accessible', async () => {
    const SUT = await fixture(html`<hello-world who="Fernando"></hello-world>`);

    await expect(axe(SUT)).resolves.toHaveNoViolations();
  });
});
