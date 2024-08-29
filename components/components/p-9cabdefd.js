import { p as proxyCustomElement, H } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-f713899e.js';
import { d as data } from './p-2240281a.js';

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
        return (h("nav", { key: '91f5e41ba6275ec046d32397ae289ca0108712af', class: "flex flex-row justify-between px-4 lg:px-20 xl:px-60 py-3 fixed top-0 left-0 w-full bg-white z-10" }, h("div", { key: '1da137fdbafa776e88f294f6751c4a13ec768e00', class: 'flex flex-col' }, h("div", { key: '119c3050220d8a4df8d187a7d32adca61bfcccf4', class: 'font-bold text-xl' }, this.hotel.name), h("small", { key: '106975766518dc494b8bbe79cf23879ccb0a3281', class: 'text-gray-600 text-base' }, this.hotel.area + ', ' + this.hotel.city.name + ', ' + this.hotel.country.name)), h("div", { key: '8b8d664a8e944df664679ad38fed53c37d8f370c', class: "hidden lg:flex flex-row gap-10 items-center text-gray-600 font-semibold" }, h("button", { key: '2ad3f3471c1350d60cad757ee6a32f978a885cca' }, "Booking code"), h("button", { key: 'aada0942130c11c48304db48d70bcc5cfe09a25e' }, "$"), h("button", { key: 'b44a8a40fb6a1a4bda58e7e28c70e6830cc90f19' }, "English"), h("button", { key: '735991133aa10b00af6093991f3560a3ea1997a3' }, "Sign in"))));
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

//# sourceMappingURL=p-9cabdefd.js.map