import { p as proxyCustomElement, H } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-aa5b55de.js';
import { d as defineCustomElement$9 } from './p-9b8484e2.js';
import { d as defineCustomElement$8 } from './p-62d585db.js';
import { d as defineCustomElement$7 } from './p-57396bc5.js';
import { d as defineCustomElement$6 } from './p-1ebf5f22.js';
import { d as defineCustomElement$5 } from './p-6e7dbd8c.js';
import { d as defineCustomElement$4 } from './p-2cdf3bf0.js';
import { d as defineCustomElement$3 } from './p-ec7ed802.js';
import { d as defineCustomElement$2 } from './p-2115f5d4.js';

const DisplayHotel = /*@__PURE__*/ proxyCustomElement(class DisplayHotel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.modal = false;
        this.myId = undefined;
        this.popup = false;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    hide(event) {
        this.modal = event.detail;
    }
    show(event) {
        this.modal = true;
        this.myId = event.detail;
    }
    getId(event) {
        this.myId = event.detail;
        this.modal = true;
    }
    showPopup(event) {
        this.popup = event.detail;
    }
    hidePopup(event) {
        this.popup = event.detail;
    }
    render() {
        return (h("div", { key: 'a8d2fb931dee930043c1d9c1ab632c6919a8226b', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: 'aef4dcc66bdaf2a68f214cf98b8eb757eac30133' }), h("rf-photo", { key: '5061fe0d5ff58f7fa18972a36b5de356dd6e2e1e' }), h("rf-read", { key: 'e3b49aff3ac1ab05b0baeff7fbe0488a69ffab93' }), h("rf-rooms", { key: 'a49407260b046939ff3dbf1a8ed27c5fa2714054' }), this.modal ? h("rf-modal", { roomId: this.myId }) : null, this.popup ? h("rf-popup", null) : null, h("rf-facilities", { key: '8a3e9522fe046b02a4d632da49c4892b22b1ec6c' })));
    }
    get element() { return this; }
}, [1, "rf-display-hotel", {
        "modal": [32],
        "myId": [32],
        "popup": [32]
    }, [[16, "rf_hide", "hide"], [16, "rf_show", "show"], [16, "rf_sendId", "getId"], [16, "rf_show_popup", "showPopup"], [16, "rf_hide_popup", "hidePopup"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-display-hotel", "rf-carousel", "rf-facilities", "rf-modal", "rf-navbar", "rf-photo", "rf-popup", "rf-read", "rf-rooms"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-display-hotel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DisplayHotel);
            }
            break;
        case "rf-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "rf-facilities":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "rf-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "rf-navbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "rf-photo":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "rf-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "rf-read":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "rf-rooms":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const RfDisplayHotel = DisplayHotel;
const defineCustomElement = defineCustomElement$1;

export { RfDisplayHotel, defineCustomElement };

//# sourceMappingURL=rf-display-hotel.js.map