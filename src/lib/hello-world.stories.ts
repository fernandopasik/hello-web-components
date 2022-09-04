import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import './hello-world';

export default {
  title: 'Hello World',
  component: 'hello-world',
  render: ({ who }) => html`<hello-world who=${who}></hello-world>`,
} as Meta;

export const helloWorld = { args: { who: 'world' } };
