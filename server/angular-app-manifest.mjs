
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://DibujoZ.github.io/san-valentine/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/san-valentine"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5478, hash: '89bf4ad002271920a3b72cb889aa1591ab8e531189c7d9dd192d8d083acb1d1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 999, hash: '23efb77394d315859adb1cda59b96eaf1fb005e507240508d48fd0d374613bc5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 231, hash: '95b0549451393558480f08f8e0970214c70e476b9c95b697c15c37fa7d6b6dc0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AVF7YPR5.css': {size: 12842, hash: 'd/WTxO9yuq4', text: () => import('./assets-chunks/styles-AVF7YPR5_css.mjs').then(m => m.default)}
  },
};
