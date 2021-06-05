import type { Meta, Story } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';
import './hello-world';
import type HelloWorld from './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world',
} as Meta;

interface HelloWorldProps {
  who: string;
}

export const helloWorld: Story<HelloWorld> = ({ who }: Readonly<HelloWorldProps>): TemplateResult =>
  html`<hello-world who=${who}></hello-world>`;

helloWorld.args = { who: 'world' };
