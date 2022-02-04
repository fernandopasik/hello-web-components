# hello-web-components

A simple starter **<hello-world \/>** web component written in typescript, using [lit](https://github.com/lit/lit). Unit tested with [jest](https://github.com/facebook/jest) and e2e tested with [puppeteer](https://github.com/puppeteer/puppeteer) and [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer).

<!-- BADGES - START -->

[![Gzip Bundle Size](https://img.badgesize.io/https://unpkg.com/hello-web-components/hello-web-components.min.js?compression=gzip)](https://unpkg.com/hello-web-components/hello-web-components.min.js 'Gzip Bundle Size')
[![Build Status](https://github.com/fernandopasik/hello-web-components/actions/workflows/main.yml/badge.svg)](https://github.com/fernandopasik/hello-web-components/actions/workflows/main.yml 'Build Status')
[![Coverage Status](https://codecov.io/gh/fernandopasik/hello-web-components/branch/main/graph/badge.svg)](https://codecov.io/gh/fernandopasik/hello-web-components 'Coverage Status')
[![Known Vulnerabilities](https://snyk.io/test/github/fernandopasik/hello-web-components/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fernandopasik/hello-web-components?targetFile=package.json 'Known Vulnerabilities')

[![npm version](https://img.shields.io/npm/v/hello-web-components.svg?logo=npm)](https://www.npmjs.com/package/hello-web-components 'npm version')
[![npm downloads](https://img.shields.io/npm/dm/hello-web-components.svg)](https://www.npmjs.com/package/hello-web-components 'npm downloads')

<!-- BADGES - END -->

## Usage

Clone the repository and modify it to your needs

```sh
git clone --depth 1 https://github.com/fernandopasik/hello-web-components.git
```

Install the package in your project and import the component

```sh
npm i hello-web-components lit
```

```js
import { html, render } from 'lit';
import 'hello-web-components';

const test = () => html`<hello-world who="web components"></hello-world>`;

render(test(), document.body);
```

## License

MIT (c) 2020 [Fernando Pasik](https://fernandopasik.com)
