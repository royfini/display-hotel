import { p as proxyCustomElement, H, h } from './p-b4114b3c.js';
import { t as tailwind } from './p-aa5b55de.js';

const Read = /*@__PURE__*/ proxyCustomElement(class Read extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.guests = undefined;
        this.checkin = undefined;
        this.checkout = undefined;
    }
    componentWillLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
        const params = new URLSearchParams(window.location.search);
        this.guests = params.get('check_availability') || 'No param found';
        this.checkin = params.get('check_in') || 'No param found';
        this.checkout = params.get('check_out') || 'No param found';
    }
    render() {
        return (h("div", { key: 'd8cdcd980136574eebf937d3c743e56f8b91925b', class: 'flex flex-row justify-center gap-5 mb- text-xl font-semibold' }, h("h2", { key: '636f54bf9ca902655b2a71b8cabaf03355605cad' }, "Number of guests: ", this.guests), h("h2", { key: 'e6170d24405d5d20387bd1707f62036001eb9c18' }, "From: ", this.checkin, " to: ", this.checkout)));
    }
    get element() { return this; }
}, [1, "rf-read", {
        "guests": [32],
        "checkin": [32],
        "checkout": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-read"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-read":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Read);
            }
            break;
    } });
}
defineCustomElement();

export { Read as R, defineCustomElement as d };

//# sourceMappingURL=p-ec7ed802.js.map