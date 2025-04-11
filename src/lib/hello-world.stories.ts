import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './hello-world.ts';

export default {
  component: 'hello-world',
  render: ({ who }) => html`<hello-world who=${who}></hello-world>`,
  title: 'Hello World',
} as Meta;

export const helloWorld = { args: { who: 'world' } };
