import { p as proxyCustomElement, H, c as createEvent } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';
import { t as tailwind } from './p-aa5b55de.js';
import { d as data } from './p-2240281a.js';

const Navbar = /*@__PURE__*/ proxyCustomElement(class Navbar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rf_show_popup = createEvent(this, "rf_show_popup", 7);
        this.hotel = data.My_Result;
        this.language = 'English';
        this.currency = 'US$';
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    show() {
        console.log('hello');
        this.rf_show_popup.emit(true);
    }
    getData(event) {
        this.language = event.detail.lang;
        this.currency = event.detail.cur;
    }
    render() {
        return (h("nav", { key: 'dd1d3fef618f83f5d44d3b562716c0baaffb1bca', class: "flex flex-row justify-between px-4 lg:px-20 xl:px-60 py-3 fixed top-0 left-0 w-full bg-white z-10" }, h("div", { key: 'e4a38991fb244f1d75115a48f7fa28091181d18e', class: 'flex flex-col' }, h("div", { key: '0b47edfbafae07e7c5e4153dffc7bcdce2fd4487', class: 'font-bold text-xl' }, this.hotel.name), h("small", { key: 'f1f3f2aa5e3132a58048ba8a38fd1fd09086b46f', class: 'text-gray-600 text-base' }, this.hotel.area + ', ' + this.hotel.city.name + ', ' + this.hotel.country.name)), h("div", { key: 'a30ec11217bbefddd73e182edfb4308bd297ca90', class: "flex flex-row gap-2 md:gap-10 items-center text-gray-600 font-semibold" }, h("button", { key: '2ba9615b5a1e30b1e2b54aa0433b8626273bab90', class: 'hidden md:block hover:bg-gray-300 p-2 hover:rounded-full' }, "Booking code"), h("button", { key: '4fc3e08a502d5000d41c88276a32ba578589e230', class: 'hover:bg-gray-300 p-2 hover:rounded-full', onClick: this.show.bind(this) }, this.currency), h("button", { key: '411eb15e26d6b919b5da481db50b4430b76db36c', class: 'hover:bg-gray-300 p-2 hover:rounded-full', onClick: this.show.bind(this) }, this.language), h("button", { key: '96f72afc0d7ecfafd3138df2a6eb0aff243aa62f', class: 'hidden md:block hover:bg-gray-300 p-2 hover:rounded-full' }, "Sign in"))));
    }
    get element() { return this; }
}, [1, "rf-navbar", {
        "language": [32],
        "currency": [32]
    }, [[16, "rf_send_data", "getData"]]]);
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

//# sourceMappingURL=p-1ebf5f22.js.map