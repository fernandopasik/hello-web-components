import { html, TemplateResult } from 'lit-element';
import './hello-world';

export default {
  title: 'Hello World',
};

export const withDefaultValues = (): TemplateResult => html`<hello-world></hello-world>`;

export const withAProvidedName = (): TemplateResult =>
  html`<hello-world who="Fernando"></hello-world>`;
