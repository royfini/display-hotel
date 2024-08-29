import { p as proxyCustomElement, H } from './p-50d3ff30.js';
import { h } from './p-8011f781.js';
import { d as data, t as tailwind } from './p-7109e9d6.js';

const Rooms = /*@__PURE__*/ proxyCustomElement(class Rooms extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.rooms = data.My_Result.roomtypes;
        this.amenities = data.My_Result.amenities;
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
        return (h("div", { key: 'bd95a78cafeded8c011ccc454cb1126f1c5095ff' }, this.rooms.map(e => {
            var _a;
            return (h("div", { class: "flex flex-col md:flex-row bg-gray-200 rounded-lg my-4 p-4 gap-4" }, h("div", { class: "rounded-lg overflow-hidden w-full md:w-1/4 h-72 md:h-48 relative" }, h("img", { src: (_a = e.main_image) === null || _a === void 0 ? void 0 : _a.url, class: "w-full h-full object-cover" }), h("div", { class: "absolute bottom-0 flex flex-row w-full justify-between px-4 bg-gray-400 bg-opacity-70" }, h("div", null, "Max ", e.occupancy_max.adult_nbr), h("div", null, e.size, "m", h("sup", null, "2")))), h("div", { class: "w-full md:w-3/4 flex flex-col gap-y-2" }, h("h3", { class: "text-2xl font-semibold" }, e.name), h("div", { class: "flex flex-row gap-x-4" }, e.bedding_setup.map(b => {
                return h("div", { class: "text-sm" }, b.name);
            })), h("div", { class: "flex flex-row gap-x-4 text-sm" }, h("div", null, this.amenities[2].description), h("div", null, this.amenities[14].description), h("div", null, this.amenities[25].description)), h("div", { class: "text-sm" }, e.description))));
        })));
    }
    get element() { return this; }
}, [1, "rf-rooms"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-rooms"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-rooms":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Rooms);
            }
            break;
    } });
}
defineCustomElement();

export { Rooms as R, defineCustomElement as d };

//# sourceMappingURL=p-21505cbb.js.map