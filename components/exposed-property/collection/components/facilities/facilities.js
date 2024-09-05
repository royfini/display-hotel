import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
import { data } from "../../data";
export class Facilities {
    constructor() {
        this.data = data.My_Result;
        this.properties = this.data.amenities.filter(e => {
            return e.amenity_type == 'property';
        });
        this.activities = this.data.amenities.filter(e => {
            return e.amenity_type == 'activity';
        });
        this.services = this.data.amenities.filter(e => {
            return e.amenity_type == 'service';
        });
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
        return (h("div", { key: '1280b8ef4e4383da21464cc8c6858418e1a3cdfc' }, h("div", { key: '05bda62554520b239acddbaafc338bc7f343e6c6', class: "text-lg font-semibold mb-4 mt-10" }, "Facilities and services"), h("div", { key: '4a493a92cf4f1956856417e10ec06853661142bf', class: "bg-gray-200 flex flex-col p-6 rounded-xl gap-3" }, h("div", { key: '35c833bf92ff2cf166b213c231660be4785e96c2', class: "flex flex-row gap-4" }, h("small", { key: 'c7853b15f702717df07bbe052652217c2f411ce7' }, 'check in: from ' + this.data.time_constraints.check_in_from + ' until ' + this.data.time_constraints.check_in_till), h("small", { key: 'a843a16814027b197e90dc3ee945955e5819d34b' }, 'check out: ' + this.data.time_constraints.check_out_till)), h("small", { key: 'ffce83b3331be1f8b7d5bf35d78e2133beab3625' }, 'Public areas: ' + this.data.internet_offering.public_internet_statement), h("small", { key: '70607d37c28c51fc86f17a790b004128be10eaf2' }, this.data.parking_offering.title + ' At ' + '$' + this.data.parking_offering.pricing), h("small", { key: 'd8c5d184545e34ea3ea8ccefcc4d4059dc489b2e' }, this.data.pets_acceptance.title), h("small", { key: 'f1a84fe6e7a889b26aae5c6d2f55e6fc04b423ab' }, this.data.baby_cot_offering.title), h("div", { key: 'd4407570108c2e2a4a456fd0998280b3b9a21127', class: "flex flex-col md:flex-row md:justify-between gap-3" }, h("div", { key: 'd24c26c6991a90b67d344f7db62cc43eb26b6ddf', class: "flex flex-col gap-1" }, h("small", { key: 'c12da0c446fe17b0a862a9161431d0c7148ae02b', class: "font-bold" }, "Property facilities"), this.properties.map(e => {
            return h("small", null, e.description);
        })), h("div", { key: '72baf9f1ba18d7e6b7e987d0f94f95ffc7d4917c', class: "flex flex-col gap-1" }, h("small", { key: '1b8b3da645ca1b99cd4ba4a8fcb5d8b1c8bf40cd', class: "font-bold" }, "Activities"), this.activities.map(e => {
            return h("small", null, e.description);
        })), h("div", { key: '935fd65d1600cd59efe1069bcc81dc1809c7a261', class: "flex flex-col gap-1" }, h("small", { key: 'e1ad2c952e223b6f925666f6d8c5c2e8723e449b', class: "font-bold" }, "Services"), this.services.map(e => {
            return h("small", null, e.description);
        }))), h("div", { key: 'd67281af8bb390b95f3265c6d6d647371f2e254c', class: "flex flex-row gap-x-2" }, h("small", { key: '8144a9057c9ddd69c15c0f7fb2b577a9f40b7889', class: "font-bold" }, "Food and beverage: "), h("small", { key: '115c24663f0aa9156771d34cac2fd6c1bcb05da0' }, this.data.description.food_and_beverage)), h("div", { key: '5a64f98b51e5824e74b0f339bd2bcd547e667ab3', class: "flex flex-row gap-x-2" }, h("small", { key: '11df79b27c019aedfd89f2b6fb951c5437923711', class: "font-bold" }, "Accepted credit cards at the property:"), this.data.allowed_cards.map(e => {
            return h("small", null, e.name);
        })), h("small", { key: '2409443a3f35aebeceadc452fd19df0896977493' }, this.data.description.important_info))));
    }
    static get is() { return "rf-facilities"; }
    static get encapsulation() { return "shadow"; }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=facilities.js.map
