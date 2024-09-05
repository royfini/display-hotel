import { h } from "@stencil/core";
import tailwind from "../../output.css";
import { languages } from "../../languages";
import { currencies } from "../../currencies";
export class Popup {
    constructor() {
        this.languages = languages;
        this.currencies = currencies;
        this.language = 'English';
        this.currency = 'US$';
        this.index = undefined;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    hide() {
        this.rf_hide_popup.emit(false);
    }
    getLang(lang, i) {
        this.language = lang;
        this.index = i;
    }
    getCur(event) {
        this.currency = event.target.value;
    }
    send() {
        this.rf_send_data.emit({ lang: this.language, cur: this.currency });
    }
    render() {
        return (h("div", { key: '28bbf00f0833579d2253ad4c8eb69f645881082f', class: "fixed inset-0 flex justify-center items-center z-50" }, h("div", { key: '57e0eed15c5203593a4f576378fecef9f67321c0', class: "absolute inset-0 bg-gray-800 opacity-75" }), h("div", { key: 'ac9491c5957d51ccdc79c957969558e962e3364c', class: "bg-white z-10 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col gap-8 p-6 rounded-lg" }, h("div", { key: '5bf57423baefb26b325725f78a89032b197671a2', class: "flex flex-row justify-between" }, h("h1", { key: 'cbebb81cc92fc98af6c5d627067e9102876f5123', class: "text-2xl font-semibold" }, "Display Settings"), h("button", { key: 'd83cdce084c63e07c37b622c2f8a19b58c21f09f', class: "rounded-full hover:bg-gray-200 text-gray-500 font-semibold px-2", onClick: this.hide.bind(this) }, "X")), h("div", { key: 'cc1e70a7b807df91db48aa7ef9c25c795e6bb48f', class: "grid grid-cols-4 gap-2" }, this.languages.map((l, i) => {
            return (h("div", { class: {
                    'flex': true,
                    'flex-row': true,
                    'gap-1': true,
                    'hover:cursor-pointer': true,
                    'hover:bg-red-200': true,
                    'rounded-md': true,
                    'p-1': true,
                    'bg-red-200': this.index == i ? true : false,
                }, onClick: this.getLang.bind(this, l.description, i) }, h("div", { class: "rounded-full overflow-hidden w-5 h-5" }, h("img", { src: l.flag, class: "object-cover w-5 h-5" })), h("div", { class: "text-xs" }, l.description)));
        })), h("div", { key: '7f50b38905e610fa471f04685e8a6374529fbf80', class: "relative w-full" }, h("select", { key: '10176d316f1970ccadebc38fac18149f41b23230', class: "border-2 rounded-md bg-white border-gray-400 h-10 w-full outline-none px-3", onChange: this.getCur.bind(this) }, this.currencies.map(c => {
            return h("option", { value: c.symbol, selected: c.symbol === this.currency }, c.symbol);
        })), h("label", { key: 'd4974c72aa1e4991043419e7dc0fca1be0ea7722', class: "absolute top-0 left-4 text-gray-400 -translate-y-3 bg-white px-1" }, "Currency")), h("div", { key: '53c038a38f1b612342c70eb799d4fa2dd67ca530', class: "flex flex-row justify-end gap-4" }, h("button", { key: '78df135b84593d707087364ed8f96783590ca5cf', class: "border-2 border-gray-400 text-gray-400 rounded-full px-2 py-1", onClick: this.hide.bind(this) }, "Cancel"), h("button", { key: '942bee82aa86895c78606de7e527058bb3347409', class: "border-2 border-red-800 text-white bg-red-800 rounded-full px-2 py-1", onClick: () => {
                this.send();
                this.hide();
            } }, "Confirm")))));
    }
    static get is() { return "rf-popup"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "language": {},
            "currency": {},
            "index": {}
        };
    }
    static get events() {
        return [{
                "method": "rf_hide_popup",
                "name": "rf_hide_popup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "rf_send_data",
                "name": "rf_send_data",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ lang: string; cur: string }",
                    "resolved": "{ lang: string; cur: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=popup.js.map
