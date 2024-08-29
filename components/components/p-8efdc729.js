import { p as proxyCustomElement, H } from './p-50d3ff30.js';
import { h } from './p-8011f781.js';
import { d as data, t as tailwind } from './p-7109e9d6.js';

const Navbar = /*@__PURE__*/ proxyCustomElement(class Navbar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.hotel = data.My_Result;
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
        return (h("nav", { key: '89d73ea293924f2bbeacefedd482bc3789450b6a', class: "flex flex-row justify-between px-4 lg:px-20 xl:px-60 py-3 fixed top-0 left-0 w-full bg-white z-10" }, h("div", { key: '507716f7f1a563b9afedc33fb74677042125cd7c', class: 'flex flex-col' }, h("div", { key: '3ef4835ba94f395f049586e5dc39a90aa321bb0a', class: 'font-bold text-xl' }, this.hotel.name), h("small", { key: 'f0336f13c86d7a7e2c655d8f0b48b3e3f088d453', class: 'text-gray-600 text-base' }, this.hotel.area + ', ' + this.hotel.city.name + ', ' + this.hotel.country.name)), h("div", { key: 'aa5dac9be7cbe4f688a9bc1943af4e7175fde478', class: "hidden lg:flex flex-row gap-10 items-center text-gray-600 font-semibold" }, h("button", { key: '314370356a325210d530a00a3bd0d52a0b4ae7c4' }, "Booking code"), h("button", { key: 'ea7148befb5cf43d1f41646086a3fde00bf4c30a' }, "$"), h("button", { key: 'cc232365f1a931dab60ce9cb69a3d8c376dfdbcd' }, "English"), h("button", { key: 'd0d534bd69c6381605b3bbcc78ae4bb6119ff842' }, "Sign in"))));
    }
    get element() { return this; }
}, [1, "rf-navbar"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-navbar"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-navbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Navbar);
            }
            break;
    } });
}
defineCustomElement();

export { Navbar as N, defineCustomElement as d };

//# sourceMappingURL=p-8efdc729.js.map