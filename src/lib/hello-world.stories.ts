import type { TemplateResult } from 'lit';
import { html } from 'lit';
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
