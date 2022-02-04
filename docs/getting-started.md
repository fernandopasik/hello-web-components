---
layout: page
---

## Usage

To create your own element, just clone the repository and modify it to your needs

```sh
git clone --depth 1 https://github.com/fernandopasik/hello-web-components.git
```

To try out the element, install from npm

```sh
npm install hello-web-components
```

and use it in your app

```js
import { html, render } from 'lit';
import './hello-world';

render(html`<hello-world></hello-world>`, document.body);
```
