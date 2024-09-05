import { p as proxyCustomElement, H } from './p-b4114b3c.js';
import { h } from './p-8011f781.js';

const Property = /*@__PURE__*/ proxyCustomElement(class Property extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjYwNTgwNzcsIkNMQUlNLTAxIjoicktLMi9DY1dQQnM9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThBcklIUzg2aEpCQSIsIkNMQUlNLTA2IjoiQUVxVnRCMm1kWTg9In0.o-Yoq1n4n8W8qQT1I6XitpDuV65AWHiYJiXjrxoD3B0';
    }
    async sendData() {
        const url = `https://gateway.igloorooms.com/IR/Get_Exposed_Property?Ticket=${this.token}`; // Replace with your API endpoint
        const data = {
            id: '42',
            language: 'EN',
            currency: 'USD',
            aname: '',
            include_sales_rate_plans: true,
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            }
            else {
                console.log('error');
            }
        }
        catch (error) {
            console.log('error');
        }
    }
    componentWillLoad() {
        this.sendData();
    }
    render() {
        return h("div", { key: 'b73fd3cf3d62c88a32de8ba93aa2413fa37c2fb0' }, "hello");
    }
}, [1, "rf-property"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["rf-property"];
    components.forEach(tagName => { switch (tagName) {
        case "rf-property":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Property);
            }
            break;
    } });
}
defineCustomElement$1();

const RfProperty = Property;
const defineCustomElement = defineCustomElement$1;

export { RfProperty, defineCustomElement };

//# sourceMappingURL=rf-property.js.map