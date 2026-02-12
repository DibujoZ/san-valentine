
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5439, hash: 'f7255a51360d71c0cdb4da84fcca7c68feaec114a83a708446e1de679b048638', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '29d27793f0a5d8ce5bca8d96251b1d64d7ff1bbe8154d33d0f800e1af184b6bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12516, hash: '4bc95641560fb9f07cf7299ecbcda4a1205a8580b866e0e5a90a02c100acf125', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AVF7YPR5.css': {size: 12842, hash: 'd/WTxO9yuq4', text: () => import('./assets-chunks/styles-AVF7YPR5_css.mjs').then(m => m.default)}
  },
};
