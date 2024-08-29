import { h } from "@stencil/core/internal";
import tailwind from "../../output.css";
export class DisplayHotel {
    constructor() {
        this.modal = false;
        this.myId = undefined;
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    hide(event) {
        this.modal = event.detail;
    }
    show(event) {
        this.modal = true;
        this.myId = event.detail;
    }
    getId(event) {
        this.myId = event.detail;
        this.modal = true;
    }
    render() {
        return (h("div", { key: '57d9d9632958d9bfc5cd1b65474aefaaa6cb889f', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: '939a55959fa0f2177a34faa73e49557150ae5456' }), h("rf-photo", { key: 'f46d24cb19a08397680a1a51d70f1b59b105e8cb' }), h("rf-rooms", { key: '4c1e2dc4af91e04feefb6ccb7641f0398bb27f2f' }), this.modal ? h("rf-modal", { roomId: this.myId }) : null, h("rf-facilities", { key: 'e4fb714d7fa4c782b9397bc83b2f5f0dd2b21885' })));
    }
    static get is() { return "rf-display-hotel"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "modal": {},
            "myId": {}
        };
    }
    static get elementRef() { return "element"; }
    static get listeners() {
        return [{
                "name": "rf_hide",
                "method": "hide",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "rf_show",
                "method": "show",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "rf_sendId",
                "method": "getId",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=display-hotel.js.map
