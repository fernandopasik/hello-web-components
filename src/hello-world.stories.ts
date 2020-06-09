import { text, withKnobs } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-element';
import './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world',
  decorators: [withKnobs],
};

export const withDefaultValues = (): TemplateResult => html`<hello-world></hello-world>`;

export const withAProvidedName = (): TemplateResult =>
  html`<hello-world who=${text('who', 'Fernando')}></hello-world>`;
