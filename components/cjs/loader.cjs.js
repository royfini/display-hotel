'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cec488c7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-hotel.cjs",[[1,"rf-hotel"]]],["rf-property.cjs",[[1,"rf-property"]]],["rf-carousel_7.cjs",[[1,"rf-display-hotel",{"modal":[32],"myId":[32]},[[16,"rf_hide","hide"],[16,"rf_show","show"],[16,"rf_sendId","getId"]]],[1,"rf-modal",{"roomId":[2,"room-id"]}],[1,"rf-rooms"],[1,"rf-facilities"],[1,"rf-navbar"],[1,"rf-photo"],[1,"rf-carousel",{"images":[16],"roomId":[2,"room-id"],"currentIndex":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map