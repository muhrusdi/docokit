export const imports = {
  'documentation/Container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-container" */ 'documentation/Container.mdx'),
  'documentation/_blank.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-blank" */ 'documentation/_blank.mdx'),
  'documentation/accordion.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-accordion" */ 'documentation/accordion.mdx'),
  'documentation/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-button" */ 'documentation/button.mdx'),
  'documentation/eproc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-eproc" */ 'documentation/eproc.mdx'),
  'documentation/globalnav.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-globalnav" */ 'documentation/globalnav.mdx'),
  'documentation/grid.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-grid" */ 'documentation/grid.mdx'),
  'documentation/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-index" */ 'documentation/index.mdx'),
  'documentation/spinner.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-spinner" */ 'documentation/spinner.mdx'),
}
