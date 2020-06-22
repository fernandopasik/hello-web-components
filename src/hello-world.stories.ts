import { html, TemplateResult } from 'lit-element';
import './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world',
};

interface HelloWorldProps {
  who: string;
}

export const helloWorld = ({ who = 'world' }: Readonly<HelloWorldProps>): TemplateResult =>
  html`<hello-world who=${who}></hello-world>`;
