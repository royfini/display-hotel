import { p as promiseResolve, b as bootstrapLazy } from './index-516e205b.js';
export { s as setNonce } from './index-516e205b.js';
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
  return bootstrapLazy([["rf-hotel",[[1,"rf-hotel"]]],["rf-property",[[1,"rf-property"]]],["rf-carousel_9",[[1,"rf-display-hotel",{"modal":[32],"myId":[32],"popup":[32]},[[16,"rf_hide","hide"],[16,"rf_show","show"],[16,"rf_sendId","getId"],[16,"rf_show_popup","showPopup"],[16,"rf_hide_popup","hidePopup"]]],[1,"rf-modal",{"roomId":[2,"room-id"]}],[1,"rf-rooms",{"roy":[32],"rooms":[32]}],[1,"rf-facilities"],[1,"rf-navbar",{"language":[32],"currency":[32]},[[16,"rf_send_data","getData"]]],[1,"rf-photo"],[1,"rf-popup",{"language":[32],"currency":[32],"index":[32]}],[1,"rf-read",{"guests":[32],"checkin":[32],"checkout":[32]}],[1,"rf-carousel",{"images":[16],"roomId":[2,"room-id"],"currentIndex":[32]}]]]], options);
});

//# sourceMappingURL=exposed-property.js.map