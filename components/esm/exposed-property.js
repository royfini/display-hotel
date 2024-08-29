import { p as promiseResolve, b as bootstrapLazy } from './index-20b620b3.js';
export { s as setNonce } from './index-20b620b3.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["rf-hotel",[[1,"rf-hotel"]]],["rf-property",[[1,"rf-property"]]],["rf-display-hotel_5",[[1,"rf-display-hotel"],[1,"rf-facilities"],[1,"rf-navbar"],[1,"rf-photo"],[1,"rf-rooms"]]]], options);
});

//# sourceMappingURL=exposed-property.js.map