import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
import { data } from "../../data";
export class Photo {
    constructor() {
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
        return (h("div", { key: '81ee4f76ff39ea460063988a4f7d163598a43587', class: "flex flex-row gap-2 mt-20 mb-10" }, h("div", { key: 'ea1fd8561003e4d6ca8212aa894f5853f1a270fe', class: "w-full md:w-1/2 h-full" }, h("img", { key: '09fc951b77d864549dedc9401491a98bd93e3956', src: this.images[0].url, class: "rounded-2xl object-cover w-full h-full" })), h("div", { key: 'bdc0f0245093d70fe9db16af280f1426e9040fb1', class: "w-1/2 hidden md:grid grid-cols-2 gap-2 h-full" }, h("img", { key: '492c7bba21dd06de34900f241d32e05565e11c00', src: this.images[1].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: 'b729ea2c9d851c1a332c77458c821a5608151ad6', src: this.images[2].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: 'bd1479f38fa4bb3c3456a0b4bc32e3d2bf9ba801', src: this.images[3].url, class: "rounded-2xl object-cover w-full h-26" }), h("img", { key: 'cab799d2aa01fad0ece9525c8ed48cbdb08909cf', src: this.images[4].url, class: "rounded-2xl object-cover w-full h-26" }))));
    }
    static get is() { return "rf-photo"; }
    static get encapsulation() { return "shadow"; }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=photo.js.map
