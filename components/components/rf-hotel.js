import { p as proxyCustomElement, H } from './p-50d3ff30.js';
import { h } from './p-8011f781.js';

const Hotel = /*@__PURE__*/ proxyCustomElement(class Hotel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("div", { key: 'e564c3ed7e3d78d68ccf3d8f68b8f3ea0d05a1c0' }));
    }
}, [1, "rf-hotel"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-hotel"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-hotel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Hotel);
            }
            break;
    } });
}
defineCustomElement$1();

const RfHotel = Hotel;
const defineCustomElement = defineCustomElement$1;

export { RfHotel, defineCustomElement };

//# sourceMappingURL=rf-hotel.js.map