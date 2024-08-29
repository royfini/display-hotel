'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a84343ce.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-hotel.cjs",[[1,"rf-hotel"]]],["rf-property.cjs",[[1,"rf-property"]]],["rf-display-hotel_5.cjs",[[1,"rf-display-hotel"],[1,"rf-facilities"],[1,"rf-navbar"],[1,"rf-photo"],[1,"rf-rooms"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map