export const imports = {
  'documentation/Container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-container" */ 'documentation/Container.mdx'),
  'documentation/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-button" */ 'documentation/button.mdx'),
  'documentation/globalnav.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-globalnav" */ 'documentation/globalnav.mdx'),
  'documentation/grid.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-grid" */ 'documentation/grid.mdx'),
  'documentation/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-index" */ 'documentation/index.mdx'),
}
