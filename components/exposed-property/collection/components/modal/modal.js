import { h } from "@stencil/core";
import tailwind from "../../output.css";
import { data } from "../../data";
export class Modal {
    constructor() {
        this.rooms = data.My_Result.roomtypes;
        this.amenities = data.My_Result.amenities;
        this.roomAmenities = this.amenities.filter(r => {
            return r.amenity_type == 'room';
        });
        this.roomId = undefined;
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
        this.rf_hide.emit(false);
    }
    render() {
        return (h("div", { key: '6ba55d592341c2daf0338c6b16dfc43ddeeb92b0', class: "fixed inset-0 flex justify-center items-center z-50" }, h("div", { key: 'f501cfa4f3c94dc78041313b5f3afaa18fd5c6b4', class: "absolute inset-0 bg-gray-800 opacity-75", onClick: this.hide.bind(this) }), h("div", { key: '9ef0d7045acf05894b483bf4dc392ecc76cbd5ea', class: "relative bg-white w-full lg:w-3/4 xl:w-1/2 p-6 rounded-lg md:h-3/4 overflow-y-scroll shadow-lg z-10 flex flex-col gap-2" }, h("div", { key: 'd3cd1b7f1aea7bac2e1086e265a50fb54a191550', class: 'flex flex-row justify-between' }, h("h1", { key: 'd4f29c20c04093e5638ded7626058dc7f9520c67', class: "text-2xl font-semibold" }, this.rooms[this.roomId].name), h("button", { key: '31cfd97c0f5a158f3e4684c39478dc18812a867a', class: 'rounded-full hover:bg-gray-200 text-gray-500 font-semibold px-2', onClick: this.hide.bind(this) }, "X")), h("div", { key: 'a4d2a30d060828676e54c58a2474327218801fb7', class: "hidden md:block w-3/4 h-3/4 m-auto" }, h("rf-carousel", { key: '514a6f79936390b9fae68a4bfd0cfd1c31044164', images: this.rooms[this.roomId].images.map(i => {
                return i.url;
            }) })), h("div", { key: 'af5f9eaf8e80b59c7aa9fafba33246b8a87e169c', class: "flex flex-row gap-4 text-sm justify-start font-semibold" }, h("div", { key: 'cbabe1dbcd24d078802de470c7947810d04a2ee0' }, this.rooms[this.roomId].size, "m", h("sup", { key: '8cd188ba69b8a6d15f99a56f17a2a3efa55c208d' }, "2")), h("div", { key: '3544629c27092244463149758b40472f6ac47e83' }, this.amenities[25].description), h("div", { key: '516275180ebb545224a59e6ae387ea3512112361', class: "flex flex-row gap-x-2" }, this.rooms[this.roomId].bedding_setup.map(b => {
            return h("div", null, b.name);
        }))), h("div", { key: '58e639cdcfeaa284fc1d4f26804e8c981e1868be', class: "text-sm" }, this.rooms[this.roomId].description), h("h3", { key: '7deac154df64301a8b0dd02d5ad39ef6009083fc', class: "text-lg font-semibold" }, "Amenities"), h("div", { key: '61aa56dbc347102d013a4f4706c2d49cb5528871', class: "grid grid-cols-3 gap-y-1" }, this.roomAmenities.map(e => {
            return h("div", { class: "text-sm" }, e.description);
        })))));
    }
    static get is() { return "rf-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "roomId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "room-id",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "rf_hide",
                "name": "rf_hide",
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
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=modal.js.map
