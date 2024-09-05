import { h } from "@stencil/core";
import tailwind from "../../output.css";
export class Read {
    constructor() {
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
    static get is() { return "rf-read"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "guests": {},
            "checkin": {},
            "checkout": {}
        };
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=read.js.map
