import type { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type { ReadonlyDeep } from 'type-fest';
import './hello-world';
import type HelloWorld from './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world',
} as Meta;

export const helloWorld: Story<ReadonlyDeep<HelloWorld>> = ({ who }) =>
  html`<hello-world who=${who}></hello-world>`;

helloWorld.args = { who: 'world' };
