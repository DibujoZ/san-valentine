
export default {
  basePath: 'https://DibujoZ.github.io/san-valentine',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
