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
        return (h("div", { key: 'fb45bedddcaa3dcee166ee9fdafcdfce834fc6b0' }, h("div", { key: '7e935b6292dc821c4d9c3fbf7ac1b46c8935a9ec', class: "text-lg font-semibold mb-4 mt-10" }, "Facilities and services"), h("div", { key: '2cdcaed4b63829997dd544d6009a0146fe5606c5', class: "bg-gray-200 flex flex-col p-6 rounded-xl gap-3" }, h("div", { key: '935a91ed7dbc011439aa5e59d8eefa9dbf87bf28', class: "flex flex-row gap-4" }, h("small", { key: '4717fcffc7a8fd0792d04bf4aeba09bba6ced10f' }, 'check in: from ' + this.data.time_constraints.check_in_from + ' until ' + this.data.time_constraints.check_in_till), h("small", { key: '43356afcd32de6b318526cb090acf1709ec30bb5' }, 'check out: ' + this.data.time_constraints.check_out_till)), h("small", { key: 'e18d90ee48a43830dd96b822ffdda99006481b94' }, 'Public areas: ' + this.data.internet_offering.public_internet_statement), h("small", { key: '488513a4ad2de8ef86a08a9b6ded796273590c83' }, this.data.parking_offering.title + ' At ' + '$' + this.data.parking_offering.pricing), h("small", { key: '988bc8707b5f3667068551b8842c38005c63e3d6' }, this.data.pets_acceptance.title), h("small", { key: '1a229ee037a7f68773009eb3197b02dd82815eb1' }, this.data.baby_cot_offering.title), h("div", { key: 'b1ec818fbebde0f35ed3a30d63150f953c6f7e0c', class: "flex flex-col md:flex-row md:justify-between gap-3" }, h("div", { key: '169eff3105b204d00ca8b979e3ffa38956a1f7a1', class: "flex flex-col gap-1" }, h("small", { key: '5e5ebe5ef9bb3273fc0739af76778ec89b48c5a9', class: "font-bold" }, "Property facilities"), this.properties.map(e => {
            return h("small", null, e.description);
        })), h("div", { key: '22a2729755e95a8784cf0a53d03ebc2cc2e69cd5', class: "flex flex-col gap-1" }, h("small", { key: 'f3439046ccfcaffefb3dba0ec14649494e2e1047', class: "font-bold" }, "Activities"), this.activities.map(e => {
            return h("small", null, e.description);
        })), h("div", { key: '1440882a62384628b8bbca58936c85ff6d75bbfc', class: "flex flex-col gap-1" }, h("small", { key: 'd71a260794f827c8eef29d479070bdb45d0e8763', class: "font-bold" }, "Services"), this.services.map(e => {
            return h("small", null, e.description);
        }))), h("div", { key: '80bdfdc6d8b322ce24bf0748d302507aece9ad20', class: "flex flex-row gap-x-2" }, h("small", { key: '6d8e21d5d55411252849ff22514140e37e878ea6', class: "font-bold" }, "Food and beverage: "), h("small", { key: '702b2608df5ecd17caf734ecef22cbe433badc26' }, this.data.description.food_and_beverage)), h("div", { key: 'f06c601331a65e8d11d90d47578a959ff2ffa0ee', class: "flex flex-row gap-x-2" }, h("small", { key: 'c966f007a5f461b22b3f4edc2804640ae47a582e', class: "font-bold" }, "Accepted credit cards at the property:"), this.data.allowed_cards.map(e => {
            return h("small", null, e.name);
        })), h("small", { key: '7512f9b27ae4b27d749decae18f1f404808c3797' }, this.data.description.important_info))));
    }
    static get is() { return "rf-facilities"; }
    static get encapsulation() { return "shadow"; }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=facilities.js.map
