import { configure } from '@storybook/web-components';

const req = require.context('../src', true, /\.stories\.(js|ts|mdx)$/);

configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
