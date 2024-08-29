import { p as proxyCustomElement, H } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-f713899e.js';
import { d as defineCustomElement$7 } from './p-759fb32a.js';
import { d as defineCustomElement$6 } from './p-d6ec34cb.js';
import { d as defineCustomElement$5 } from './p-4c0d3561.js';
import { d as defineCustomElement$4 } from './p-9cabdefd.js';
import { d as defineCustomElement$3 } from './p-c5fe848a.js';
import { d as defineCustomElement$2 } from './p-70210f3a.js';

const DisplayHotel = /*@__PURE__*/ proxyCustomElement(class DisplayHotel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.modal = false;
        this.myId = undefined;
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
    render() {
        return (h("div", { key: '57d9d9632958d9bfc5cd1b65474aefaaa6cb889f', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: '939a55959fa0f2177a34faa73e49557150ae5456' }), h("rf-photo", { key: 'f46d24cb19a08397680a1a51d70f1b59b105e8cb' }), h("rf-rooms", { key: '4c1e2dc4af91e04feefb6ccb7641f0398bb27f2f' }), this.modal ? h("rf-modal", { roomId: this.myId }) : null, h("rf-facilities", { key: 'e4fb714d7fa4c782b9397bc83b2f5f0dd2b21885' })));
    }
    get element() { return this; }
}, [1, "rf-display-hotel", {
        "modal": [32],
        "myId": [32]
    }, [[16, "rf_hide", "hide"], [16, "rf_show", "show"], [16, "rf_sendId", "getId"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-display-hotel", "rf-carousel", "rf-facilities", "rf-modal", "rf-navbar", "rf-photo", "rf-rooms"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-display-hotel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DisplayHotel);
            }
            break;
        case "rf-carousel":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "rf-facilities":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "rf-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "rf-navbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "rf-photo":
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