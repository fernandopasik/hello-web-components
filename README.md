# hello-web-components

[![Gzip Bundle Size][badge-size]][url-size] [![Build Status][badge-ci]][url-ci] [![Test Coverage Status][badge-cov]][url-cov] [![Known Vulnerabilities][badge-sec]][url-sec]

[badge-ci]: https://circleci.com/gh/fernandopasik/hello-web-components.svg?style=svg
[badge-cov]: https://codecov.io/gh/fernandopasik/hello-web-components/branch/master/graph/badge.svg
[badge-sec]: https://snyk.io/test/github/fernandopasik/hello-web-components/badge.svg?targetFile=package.json
[badge-size]: http://img.badgesize.io/https://unpkg.com/hello-web-components/hello-web-components.min.js?compression=gzip
[url-ci]: https://circleci.com/gh/fernandopasik/hello-web-components 'Build Status'
[url-cov]: https://codecov.io/gh/fernandopasik/hello-web-components 'Test Coverage Status'
[url-sec]: https://snyk.io/test/github/fernandopasik/hello-web-components?targetFile=package.json 'Known Vulnerabilities'
[url-size]: https://unpkg.com/hello-web-components/hello-web-components.min.js 'Gzip Bundle Size'

A simple starter **<hello-world \/>** web component written in typescript, using [lit-html](https://github.com/polymer/lit-html) and [lit-element](https://github.com/polymer/lit-element). Unit tested with [jest](https://github.com/facebook/jest) and e2e tested with [puppeteer](https://github.com/puppeteer/puppeteer) and [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer).

## Usage

Clone the repository and modify it to your needs

```sh
git clone --depth 1 https://github.com/fernandopasik/hello-web-components.git
```

Install the package in your project and import the component

```sh
yarn add hello-web-components lit-html lit-element
```

```js
import { html, render } from 'lit-html';
import 'hello-web-components';

const test = () => html`<hello-world who="web components"></hello-world>`;

render(test(), document.body);
```

## License

MIT (c) 2020 [Fernando Pasik](https://fernandopasik.com)
