import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
export class DisplayHotel {
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    render() {
        return (h("div", { key: '52a35f8ddb7a124732be3ba93addea7c8b89fb7e', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: 'd846b0fb9c001f75835c34b3c6610444cea73618' }), h("rf-photo", { key: '37f7f50cb10b22fd99ab8373fdb23086d661de51' }), h("rf-rooms", { key: '5bb3d012f877014730cfcffe3815cae67772cc4f' }), h("rf-facilities", { key: 'de68001a5f18b2994d49f7a288f159cd13ba910a' })));
    }
    static get is() { return "rf-display-hotel"; }
    static get encapsulation() { return "shadow"; }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=display-hotel.js.map
