import { b as bootstrapLazy } from './index-20b620b3.js';
export { s as setNonce } from './index-20b620b3.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-hotel",[[1,"rf-hotel"]]],["rf-property",[[1,"rf-property"]]],["rf-display-hotel_5",[[1,"rf-display-hotel"],[1,"rf-facilities"],[1,"rf-navbar"],[1,"rf-photo"],[1,"rf-rooms"]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map