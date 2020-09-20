import type { TemplateResult } from 'lit-element';
import { html } from 'lit-element';
import './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world',
};

interface HelloWorldProps {
  who: string;
}

export const helloWorld = ({ who }: Readonly<HelloWorldProps>): TemplateResult =>
  html`<hello-world who=${who}></hello-world>`;

helloWorld.args = { who: 'world' };
