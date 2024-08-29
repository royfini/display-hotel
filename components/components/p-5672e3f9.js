import { p as proxyCustomElement, H } from './p-50d3ff30.js';
import { h } from './p-8011f781.js';
import { d as data, t as tailwind } from './p-7109e9d6.js';

const Photo = /*@__PURE__*/ proxyCustomElement(class Photo extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.images = data.My_Result.images;
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
        return (h("div", { key: '159c6728b4c3b508cd3e183b00b1652f36eaf9dd', class: "flex flex-row gap-2 mt-20 mb-10" }, h("div", { key: '3e215c8aa71ab2b1d89393c0c6cfd6ef04341e19', class: "w-full md:w-1/2 h-full" }, h("img", { key: '158e67ad2e2d0c0712089d488ce58b9797341e11', src: this.images[0].url, class: "rounded-2xl object-cover w-full h-full" })), h("div", { key: 'e0aeea84fe51f852667f0c1dfc176f0dcf51b29e', class: "w-1/2 hidden md:grid grid-cols-2 gap-2 h-full" }, h("img", { key: 'a19311947514f29210843a1bd0d8b2c71f6cdc14', src: this.images[1].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: 'adc8ba20a778750944fcb0abb00838dcc24869fa', src: this.images[2].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: '0c28624530e61214d1739f57d9f21467e01c25d4', src: this.images[3].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: 'a3a87824393d31ca6f227e943f3853291e5cbbcd', src: this.images[4].url, class: "rounded-2xl object-cover w-full h-26" }))));
    }
    get element() { return this; }
}, [1, "rf-photo"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-photo"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-photo":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Photo);
            }
            break;
    } });
}
defineCustomElement();

export { Photo as P, defineCustomElement as d };

//# sourceMappingURL=p-5672e3f9.js.map