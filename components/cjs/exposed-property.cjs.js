'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a84343ce.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('exposed-property.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-hotel.cjs",[[1,"rf-hotel"]]],["rf-property.cjs",[[1,"rf-property"]]],["rf-display-hotel_5.cjs",[[1,"rf-display-hotel"],[1,"rf-facilities"],[1,"rf-navbar"],[1,"rf-photo"],[1,"rf-rooms"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=exposed-property.cjs.js.map