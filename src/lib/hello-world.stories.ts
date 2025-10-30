import { html } from 'lit';
import './hello-world.ts';

export default {
  component: 'hello-world',
  render: ({ who }: { who: string }) => html`<hello-world who=${who}></hello-world>`,
  title: 'Hello World',
};

export const helloWorld = { args: { who: 'world' } };
