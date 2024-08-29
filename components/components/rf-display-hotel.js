import { p as proxyCustomElement, H } from './p-50d3ff30.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-7109e9d6.js';
import { d as defineCustomElement$5 } from './p-82c15d39.js';
import { d as defineCustomElement$4 } from './p-8efdc729.js';
import { d as defineCustomElement$3 } from './p-5672e3f9.js';
import { d as defineCustomElement$2 } from './p-21505cbb.js';

const DisplayHotel = /*@__PURE__*/ proxyCustomElement(class DisplayHotel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    render() {
        return (h("div", { key: '52a35f8ddb7a124732be3ba93addea7c8b89fb7e', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: 'd846b0fb9c001f75835c34b3c6610444cea73618' }), h("rf-photo", { key: '37f7f50cb10b22fd99ab8373fdb23086d661de51' }), h("rf-rooms", { key: '5bb3d012f877014730cfcffe3815cae67772cc4f' }), h("rf-facilities", { key: 'de68001a5f18b2994d49f7a288f159cd13ba910a' })));
    }
    get element() { return this; }
}, [1, "rf-display-hotel"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-display-hotel", "rf-facilities", "rf-navbar", "rf-photo", "rf-rooms"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-display-hotel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DisplayHotel);
            }
            break;
        case "rf-facilities":
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