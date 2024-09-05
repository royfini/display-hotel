import { r as registerInstance, c as createEvent, h, g as getElement } from './index-516e205b.js';

const outputCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type='button']),input:where([type='reset']),input:where([type='submit']){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.bottom-0{bottom:0px}.left-0{left:0px}.left-1{left:0.25rem}.left-4{left:1rem}.right-1{right:0.25rem}.top-0{top:0px}.top-1\\/2{top:50%}.z-10{z-index:10}.z-30{z-index:30}.z-50{z-index:50}.m-auto{margin:auto}.mx-0{margin-left:0px;margin-right:0px}.my-4{margin-top:1rem;margin-bottom:1rem}.mb-10{margin-bottom:2.5rem}.mb-4{margin-bottom:1rem}.mt-10{margin-top:2.5rem}.mt-20{margin-top:5rem}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-3\\/4{height:75%}.h-5{height:1.25rem}.h-72{height:18rem}.h-full{height:100%}.w-1\\/2{width:50%}.w-3\\/4{width:75%}.w-5{width:1.25rem}.w-full{width:100%}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-3{--tw-translate-y:-0.75rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:0.25rem}.gap-10{gap:2.5rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-5{gap:1.25rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-1{row-gap:0.25rem}.gap-y-2{row-gap:0.5rem}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-md{border-radius:0.375rem}.rounded-xl{border-radius:0.75rem}.border-2{border-width:2px}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))}.border-red-800{--tw-border-opacity:1;border-color:rgb(153 27 27 / var(--tw-border-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.bg-red-200{--tw-bg-opacity:1;background-color:rgb(254 202 202 / var(--tw-bg-opacity))}.bg-red-800{--tw-bg-opacity:1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-opacity-70{--tw-bg-opacity:0.7}.object-cover{-o-object-fit:cover;object-fit:cover}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-1{padding-left:0.25rem;padding-right:0.25rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.opacity-50{opacity:0.5}.opacity-75{opacity:0.75}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:rounded-full:hover{border-radius:9999px}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.hover\\:bg-gray-300:hover{--tw-bg-opacity:1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.hover\\:bg-red-200:hover{--tw-bg-opacity:1;background-color:rgb(254 202 202 / var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:h-3\\/4{height:75%}.md\\:h-48{height:12rem}.md\\:w-1\\/2{width:50%}.md\\:w-1\\/4{width:25%}.md\\:w-3\\/4{width:75%}.md\\:flex-row{flex-direction:row}.md\\:justify-between{justify-content:space-between}.md\\:gap-10{gap:2.5rem}}@media (min-width: 1024px){.lg\\:mx-20{margin-left:5rem;margin-right:5rem}.lg\\:w-1\\/2{width:50%}.lg\\:w-3\\/4{width:75%}.lg\\:px-20{padding-left:5rem;padding-right:5rem}}@media (min-width: 1280px){.xl\\:mx-60{margin-left:15rem;margin-right:15rem}.xl\\:w-1\\/2{width:50%}.xl\\:w-1\\/3{width:33.333333%}.xl\\:px-60{padding-left:15rem;padding-right:15rem}}";
const tailwind = outputCss;

const Carousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rf_show = createEvent(this, "rf_show", 7);
        this.goToPrevious = () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        };
        this.goToNext = () => {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            }
        };
        this.images = [];
        this.currentIndex = 0;
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
    show() {
        this.rf_show.emit(this.roomId);
    }
    render() {
        return (h("div", { key: 'c10e75abcd43cf72b1119bcdf83333dc68ce27a7', class: "relative w-full h-full" }, h("button", { key: '9b0f21f7efe7859e10683b60fc409cf899015884', onClick: this.goToPrevious.bind(this), disabled: this.currentIndex === 0, class: {
                'absolute z-30 left-1 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-1 rounded-full focus:outline-none': true,
                'opacity-50 cursor-not-allowed': this.currentIndex === 0,
            } }, "\u276E"), h("img", { key: 'db1254dfd5410e64f5c59a6f903054d236962537', src: this.images[this.currentIndex], class: "w-full h-full block object-cover", onClick: this.show.bind(this) }), h("button", { key: '84ed2475bcda1dc065f92f35b9e6bc6cc28f1fe4', onClick: this.goToNext.bind(this), disabled: this.currentIndex === this.images.length - 1, class: {
                'absolute z-30 right-1 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-1 rounded-full focus:outline-none': true,
                'opacity-50 cursor-not-allowed': this.currentIndex === this.images.length - 1,
            } }, "\u276F")));
    }
    get element() { return getElement(this); }
};

const DisplayHotel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.modal = false;
        this.myId = undefined;
        this.popup = false;
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
    showPopup(event) {
        this.popup = event.detail;
    }
    hidePopup(event) {
        this.popup = event.detail;
    }
    render() {
        return (h("div", { key: 'a8d2fb931dee930043c1d9c1ab632c6919a8226b', class: 'flex flex-col mx-0 lg:mx-20 xl:mx-60' }, h("rf-navbar", { key: 'aef4dcc66bdaf2a68f214cf98b8eb757eac30133' }), h("rf-photo", { key: '5061fe0d5ff58f7fa18972a36b5de356dd6e2e1e' }), h("rf-read", { key: 'e3b49aff3ac1ab05b0baeff7fbe0488a69ffab93' }), h("rf-rooms", { key: 'a49407260b046939ff3dbf1a8ed27c5fa2714054' }), this.modal ? h("rf-modal", { roomId: this.myId }) : null, this.popup ? h("rf-popup", null) : null, h("rf-facilities", { key: '8a3e9522fe046b02a4d632da49c4892b22b1ec6c' })));
    }
    get element() { return getElement(this); }
};

const data = {
    "ExceptionCode": null,
    "ExceptionMsg": "",
    "My_Params_Get_Exposed_Property": {
        "aname": "",
        "currency": "USD",
        "id": 42,
        "include_sales_rate_plans": true,
        "is_backend": false,
        "language": "EN",
        "perma_link": null
    },
    "My_Result": {
        "address": "Ice Venue 11",
        "adult_child_constraints": {
            "adult_max_nbr": 20,
            "child_max_age": 3,
            "child_max_nbr": 20
        },
        "affiliates": [],
        "agents": [
            {
                "code": "",
                "id": 2,
                "name": "Alitalia Cabin Crew",
                "verification_mode": "question"
            },
            {
                "code": "HUTCH",
                "id": 1,
                "name": "Demo Agency",
                "verification_mode": "code"
            }
        ],
        "allowed_booking_sources": [
            {
                "code": "003",
                "description": "Phone/Email",
                "id": "de6ac4bb-1980-48fe-9ea5-fe4591426154",
                "tag": "",
                "type": "SETUP"
            },
            {
                "code": "002",
                "description": "Walk-in",
                "id": "606cef96-5c32-4f69-92b6-c82a99258f96",
                "tag": "",
                "type": "SETUP"
            },
            {
                "code": "005",
                "description": "Social media",
                "id": "12b02511-f229-4df2-a543-92e4584bd623",
                "tag": "",
                "type": "SETUP"
            },
            {
                "code": "000",
                "description": "-- Agents/Corpo --",
                "id": "d116fbe0-c8d3-42b9-a8f4-bbd5008ba5e8",
                "tag": "",
                "type": "LABEL"
            },
            {
                "code": "001",
                "description": "Alitalia Cabin Crew",
                "id": "4908b2a4-6a6b-40c7-a224-c1bf4a4ca685",
                "tag": "2",
                "type": "TRAVEL_AGENCY"
            },
            {
                "code": "001",
                "description": "Demo Agency",
                "id": "c083b7be-b34a-47e1-bf8a-fa4c1d63b181",
                "tag": "1",
                "type": "TRAVEL_AGENCY"
            }
        ],
        "allowed_cards": [
            {
                "id": 14,
                "name": "Visa"
            },
            {
                "id": 1,
                "name": "Euro/Mastercard"
            }
        ],
        "allowed_payment_methods": [
            {
                "code": "000",
                "data": null,
                "description": "No payment required",
                "display_order": null,
                "id": null,
                "is_active": false,
                "is_payment_gateway": false,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "005",
                "data": null,
                "description": "Bank or Money Transfer",
                "display_order": null,
                "id": null,
                "is_active": true,
                "is_payment_gateway": false,
                "localizables": [
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "Your booking will be held for 3 days until the transfer is made to the following&nbsp;bank account.<br />\n<strong>PARADISE BANK</strong><br />\n<b>Accoun name</b>: Blue Hotel<br />\n<b>Account number</b>: 108608010001<br />\n<strong>IBAN</strong>: XX92 8000 0108 6080 1000 0002",
                        "id": 1,
                        "language": {
                            "code": "EN",
                            "culture": null,
                            "description": "English",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 2
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 2,
                        "language": {
                            "code": "AR",
                            "culture": null,
                            "description": "العربية",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 4
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 3,
                        "language": {
                            "code": "FR",
                            "culture": null,
                            "description": "Français",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 3
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 4,
                        "language": {
                            "code": "EL",
                            "culture": null,
                            "description": "Ελληνικά",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 8
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 5,
                        "language": {
                            "code": "HE",
                            "culture": null,
                            "description": "עברית",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 9
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 6,
                        "language": {
                            "code": "PL",
                            "culture": null,
                            "description": "Polski",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 10
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 7,
                        "language": {
                            "code": "PR",
                            "culture": null,
                            "description": "Português",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 1
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 8,
                        "language": {
                            "code": "RO",
                            "culture": null,
                            "description": "Română",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 6
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 9,
                        "language": {
                            "code": "RU",
                            "culture": null,
                            "description": "Русский",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 7
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 1006,
                        "language": {
                            "code": "DE",
                            "culture": null,
                            "description": "Deutsch",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 11
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 1007,
                        "language": {
                            "code": "UA",
                            "culture": null,
                            "description": "Українська",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 12
                        }
                    }
                ],
                "property_id": 42
            },
            {
                "code": "004",
                "data": null,
                "description": "Manual card processing (without CVC)",
                "display_order": null,
                "id": null,
                "is_active": false,
                "is_payment_gateway": false,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "001",
                "data": null,
                "description": "Manual card processing",
                "display_order": null,
                "id": null,
                "is_active": false,
                "is_payment_gateway": false,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "JCC",
                "data": null,
                "description": "JCC",
                "display_order": null,
                "id": 16,
                "is_active": false,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "NetCommerce",
                "data": null,
                "description": "NetCommerce",
                "display_order": null,
                "id": 12,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "PayPal",
                "data": null,
                "description": "PayPal",
                "display_order": null,
                "id": 1,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "Stripe",
                "data": null,
                "description": "Stripe",
                "display_order": null,
                "id": 11,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "MPGS",
                "data": null,
                "description": "MPGS",
                "display_order": null,
                "id": 8,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            }
        ],
        "amenities": [
            {
                "amenity_type": "property",
                "code": "24hourdesk",
                "description": "24-hour front desk"
            },
            {
                "amenity_type": "property",
                "code": "coffeeshop",
                "description": "Coffee shop"
            },
            {
                "amenity_type": "room",
                "code": "climatecontrol",
                "description": "A/C"
            },
            {
                "amenity_type": "service",
                "code": "concierge",
                "description": "Concierge services"
            },
            {
                "amenity_type": "property",
                "code": "multilingualstaff",
                "description": "Multilingual staff"
            },
            {
                "amenity_type": "service",
                "code": "laundry",
                "description": "Laundry, ironing, dry cleaning at extra cost"
            },
            {
                "amenity_type": "property",
                "code": "nonsmoking",
                "description": "Non-smoking rooms / floors"
            },
            {
                "amenity_type": "property",
                "code": "elevator",
                "description": "Elevator / Lift"
            },
            {
                "amenity_type": "property",
                "code": "safereception",
                "description": "Safe at reception"
            },
            {
                "amenity_type": "property",
                "code": "restaurant",
                "description": "Restaurant / Bar"
            },
            {
                "amenity_type": "property",
                "code": "wheelchair",
                "description": "Wheelchair access"
            },
            {
                "amenity_type": "property",
                "code": "creditcard",
                "description": "Credit cards accepted"
            },
            {
                "amenity_type": "room",
                "code": "housekeeping",
                "description": "Daily housekeeping"
            },
            {
                "amenity_type": "room",
                "code": "toiletries",
                "description": "Complimentary toiletries"
            },
            {
                "amenity_type": "room",
                "code": "balcony",
                "description": "Balcony"
            },
            {
                "amenity_type": "service",
                "code": "airporttransfer",
                "description": "Airport transfer"
            },
            {
                "amenity_type": "property",
                "code": "busparking",
                "description": "Bus parking"
            },
            {
                "amenity_type": "room",
                "code": "complimentarywater",
                "description": "Complimentary water in room"
            },
            {
                "amenity_type": "service",
                "code": "valetparking",
                "description": "Valet parking"
            },
            {
                "amenity_type": "property",
                "code": "luggagestorage",
                "description": "Luggage storage"
            },
            {
                "amenity_type": "service",
                "code": "carhire",
                "description": "Car hire"
            },
            {
                "amenity_type": "room",
                "code": "sittingarea",
                "description": "Seating area"
            },
            {
                "amenity_type": "room",
                "code": "bathroom",
                "description": "Bathroom"
            },
            {
                "amenity_type": "room",
                "code": "bathrobes ",
                "description": "Bathrobes"
            },
            {
                "amenity_type": "room",
                "code": "breakfastinroompaid",
                "description": "Breakfast in room (charged extra)"
            },
            {
                "amenity_type": "room",
                "code": "freewifi",
                "description": "Free WiFi"
            },
            {
                "amenity_type": "room",
                "code": "shower",
                "description": "Shower"
            },
            {
                "amenity_type": "room",
                "code": "slippers",
                "description": "Slippers"
            },
            {
                "amenity_type": "room",
                "code": "amenities",
                "description": "Welcome amenities"
            },
            {
                "amenity_type": "activity",
                "code": "bicyclerental",
                "description": "Bicycle rental"
            },
            {
                "amenity_type": "service",
                "code": "faxservices",
                "description": "Fax services"
            }
        ],
        "aname": "A35",
        "area": "Adma",
        "baby_cot_offering": {
            "rate_per_night": 30.000,
            "title": "Baby cots are available upon request"
        },
        "be_listing_mode": "list",
        "calendar_legends": [
            {
                "color": "#31bef1",
                "design": "skew",
                "id": "1",
                "name": "In-house"
            },
            {
                "color": "#45b16d",
                "design": "skew",
                "id": "2",
                "name": "Confirmed"
            },
            {
                "color": "#f4d552",
                "design": "skew",
                "id": "3",
                "name": "Pending confirmation"
            },
            {
                "color": "#ffffff",
                "design": "skew-bordered",
                "id": "4",
                "name": "OTA booking"
            },
            {
                "color": "#a0a0a0",
                "design": "skew",
                "id": "5",
                "name": "Checked out"
            },
            {
                "color": "#f34752",
                "design": "skew",
                "id": "6",
                "name": "Blocked dates"
            },
            {
                "color": "#f88c91",
                "design": "skew",
                "id": "7",
                "name": "Blocked with release"
            },
            {
                "color": "#f4d552",
                "design": "circle",
                "id": "8",
                "name": "Notes"
            },
            {
                "color": "#f34752",
                "design": "circle",
                "id": "9",
                "name": "Outstanding balance"
            }
        ],
        "city": {
            "id": 8,
            "name": "Jounieh"
        },
        "contacts": [
            {
                "email": "sales+demo@igloorooms.com",
                "mobile": null,
                "name": "John",
                "phone": "",
                "type": "booking"
            },
            {
                "email": "rony@igloorooms.com",
                "mobile": null,
                "name": "QA",
                "phone": "",
                "type": "manager"
            },
            {
                "email": "sales@igloorooms.com",
                "mobile": null,
                "name": "Gary Winter",
                "phone": "",
                "type": "finance"
            }
        ],
        "country": {
            "cities": null,
            "code": null,
            "currency": null,
            "flag": null,
            "id": 2,
            "name": "Lebanon",
            "phone_prefix": "+961"
        },
        "currency": {
            "code": "USD",
            "id": 4,
            "symbol": "US$"
        },
        "description": {
            "food_and_beverage": "The hotel provides a delicious breakfast and an assortment of coffee, tea and various drinks.",
            "important_info": "During peak season we sometimes require a 2-nights minimum stay.",
            "location_and_intro": "From stunning hills of Harissa to the scenic Jounieh Bay, this seaside hotel is close to various attractive sites. High Season Hotel is a smart accommodation choice and it sets high standard on the quality to price ratio.<br />\n<br />\nIf you prefer to pamper yourself, book a Premium Suites located on the 3rd floor to bath in a Jacuzzi while enjoying the sunset.<br />\n<br />\nHigh Season Hotel has everything guests want for a romantic getaway or fun family vacation. The hotel gets very busy during the summer so it&#39;s always recommended to secure your stay earlky enough.",
            "non_standard_conditions": "Here it is",
            "rooming": "All rooms have a stunning sea view and balcony. They are offered as single, double, premium suite with Jacuzzi and family connected rooms. Sizes range between 25 and 50sqm. Interior is elegant and trendy."
        },
        "id": 42,
        "images": [
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_238.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_240.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_248.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_249.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_252.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_256.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_242.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_272.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_270.jpg"
            }
        ],
        "internet_offering": {
            "is_public_internet_free": false,
            "is_room_internet_free": false,
            "public_internet_statement": "FREE Internet",
            "room_internet_statement": "FREE Internet",
            "room_rate_per_24_hour": 0.000,
            "room_rate_per_hour": 0.000
        },
        "is_be_enabled": true,
        "is_frontdesk_enabled": true,
        "is_pms_enabled": true,
        "is_vacation_rental": false,
        "location": {
            "latitude": 34.022000,
            "longitude": 35.628000
        },
        "max_nights": 90,
        "name": "igloorooms Demo Hotel",
        "parking_offering": {
            "pricing": 5.000,
            "schedule": "day",
            "title": "Paid parking available"
        },
        "payment_methods": null,
        "perma_link": "iglooroomsdemohotel",
        "pets_acceptance": {
            "title": "Pets are not allowed"
        },
        "phone": "9968454545",
        "pickup_service": {
            "allowed_locations": [
                {
                    "description": "Beirut International Airport",
                    "id": 1
                }
            ],
            "allowed_options": [
                {
                    "amount": 50.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 19,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 4,
                        "code": "002",
                        "description": "Sedan car (2 large & 3 small suitcases)"
                    }
                },
                {
                    "amount": 90.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 20,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 6,
                        "code": "005",
                        "description": "6-seater car (6 suitcases)"
                    }
                },
                {
                    "amount": 0.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 65,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 3,
                        "code": "008",
                        "description": "Sedan car (night service)"
                    }
                },
                {
                    "amount": 100.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 103,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 5,
                        "code": "004",
                        "description": "7-seater"
                    }
                }
            ],
            "allowed_pricing_models": [
                {
                    "code": "001",
                    "description": "Vehicle"
                },
                {
                    "code": "002",
                    "description": "Person"
                }
            ],
            "allowed_vehicle_types": [
                {
                    "capacity": 1,
                    "code": "001",
                    "description": "Airport shuttle"
                },
                {
                    "capacity": 4,
                    "code": "002",
                    "description": "Sedan car (2 large & 3 small suitcases)"
                },
                {
                    "capacity": 4,
                    "code": "003",
                    "description": "Limousine"
                },
                {
                    "capacity": 5,
                    "code": "004",
                    "description": "7-seater"
                },
                {
                    "capacity": 6,
                    "code": "005",
                    "description": "6-seater car (6 suitcases)"
                },
                {
                    "capacity": 7,
                    "code": "006",
                    "description": "Minivan for 11"
                },
                {
                    "capacity": 11,
                    "code": "007",
                    "description": "Minivan for 14"
                },
                {
                    "capacity": 3,
                    "code": "008",
                    "description": "Sedan car (night service)"
                },
                {
                    "capacity": 4,
                    "code": "009",
                    "description": "Station wagon (3 large & 4 small suitcases)"
                },
                {
                    "capacity": 2,
                    "code": "010",
                    "description": "Sedan car (2 suitcases)"
                }
            ],
            "is_enabled": true,
            "is_not_allowed_on_same_day": false,
            "pickup_cancelation_prepayment": {
                "code": "001",
                "description": "The hotel reserves the right to charge your card on the same day of pickup or in case of no-show."
            },
            "pickup_instruction": {
                "code": "001",
                "description": "Driver will be holding your name at the arrivals exit."
            }
        },
        "postal": null,
        "privacy_policy": "<h2><strong>Information and Consent</strong></h2><p>This&nbsp;Privacy Policy&nbsp;describes how we collect, use, process, and disclose your information, including personal information about you (hereinafter, the \"User\"), in conjunction with your access to and use of our booking system.</p><p>By reading this Privacy Policy, the user is hereby informed on how we collect, process and protect personal data furnished through the booking engine.</p><p>The User must carefully read this Privacy Policy to determine whether they wish to provide their personal data, or those of third parties, to <b>[AC_NAME]</b>.</p><p>When this policy mentions \"booking system\", \"booking engine\", \"system\", \"website\", \"platform\", \"app\", \"webapp\", \"services\" or \"online services\" it refers to all pages and functions under <b>[URL]</b> unless specified otherwise.</p><p>By accessing the platform or providing information, you agree to our privacy practices as set out in this privacy statement. We may change this policy from time to time. You should check this policy to ensure you are aware of the most recent version.</p><h2><strong>Identity</strong></h2><p>When this policy mentions \"we\", \"us\", \"our\", \"data controller\" or \"controller\" it refers to the&nbsp;<b>[AC_NAME]</b>.</p><h3><strong>Data Controller</strong></h3><p><b>[AC_NAME]</b> operates this booking system through a data processor, as explained below. For the purposes of the General Data Protection Regulation (\"GDPR\")&nbsp;<a href=\"https://ec.europa.eu/info/files/regulation-eu-2016-679-protection-natural-persons-regard-processing-personal-data-and-free-movement-such-data_en\" target=\"_new\">(EU) 2016/679</a>, we are the Data Controller. There is a strict contractual framework between the data controller and the data processor for the protection of your personal information. We are:</p><p></p><div><b>[AC_NAME]</b></div><div><b>[ADDRESS]</b></div><div><b>[AREA]</b></div><div><b>[LEVEL2]</b></div><div><b>[COUNTRY]</b></div><p></p><h3><strong>Data Processor</strong></h3><p>A third-party Data Processor operates this booking system on behalf of&nbsp;<b>[AC_NAME]</b> and is committed to protecting the privacy of the users of this system.</p><p>For the purposes of the GDPR, this third-party is the Data Processor.</p><h2><strong>Obligatory nature of providing the data</strong></h2><p>The data requested in the forms accessible from the booking engine are, in general, mandatory (unless specified otherwise in the required field) to meet the stated purposes. Accordingly, if they are not provided or are not provided correctly, we will be unable to process the request.</p><h2><strong>Personal data we collect and process</strong></h2><p><strong>This will include:</strong></p><ul><li>personal information about you which we ask you for (e.g. your name, address, and email address) when you make a booking from our booking engine;</li><li>financial details in order to process your booking when we require pre-payment;</li><li>details of transactions you carry out through our booking engine and details of the fulfilment of your orders.</li><li>our data processor may only collect and process personal data collected and/or processed on behalf of us in accordance with our instructions.</li></ul><p><strong>We grant permission to our data processor:</strong></p><ul><li>to use your personal information for reserving rooms and/or other services for you at&nbsp;<b>[AC_NAME]</b></li><li>to pass on your financial details to <b>[AC_NAME]</b> and/or appropriate third party (for example, credit card company) for the purpose of confirming or paying for a booking;</li><li>to use your information for marketing purposes (where you explicitly agree to this); and</li><li>to pre-complete forms and other details on our website to make your next visit to our booking engine easier (e.g. when amending or cancelling a booking).</li></ul><p><strong>Social Login:</strong></p><p>In the event of registration and/or access through a third-party account, we may collect and access certain information of the User’s profile from the corresponding social network, solely for internal administrative purposes and/or for the purposes indicated above.</p><p><strong>Third-party data (e.g. book for a friend)</strong></p><p>In the event that the User provides third-party data, they declare that they have the third party’s consent and undertake to provide the interested party -the data holder- with the information contained in this Privacy Policy, duly exonerating us and our data processor from any liability in this regard. However, we may carry out the necessary verifications to verify this fact, adopting the corresponding due diligence measures, in accordance with the data protection regulations.</p><p><strong>Sensitive Data</strong></p><p>Unless specifically requested, we ask that you not send us, and you not disclose, on or through the Services or otherwise to us, any Sensitive Personal Data (e.g., social security numbers, national identification number, data related to racial or ethnic origin, political opinions, religion, ideological or other beliefs, health, biometrics or genetic characteristics, criminal background, trade union membership, or administrative or criminal proceedings and sanctions).</p><p><strong>Use of Services by Minors</strong></p><p>The Services are not directed to individuals under the age of sixteen (16), and we request that they not provide Personal Data through the Services.</p><h2><strong>Purpose of processing personal data</strong></h2><p>Depending on the User’s requests, the personal data collected will be processed in accordance with the following purposes:</p><ul><li>To manage the bookings made, including payment management (where applicable) and the management of the user’s requests and preferences.</li><li>To manage registration in loyalty or membership programs, as well as obtaining and redeeming points.</li><li>To manage the User’s contact requests with us through the channels provided to this end.</li><li>To manage the sending of personalised commercial communications from us, by electronic and/or conventional means, in cases in which the User expressly consents.</li><li>To manage the provision of the contracted accommodation service, as well as additional services.</li><li>To manage surveys and/or evaluations regarding the quality of the services provided by us and/or the perception of its image as a company.</li></ul><h2><strong>Data Retention</strong></h2><p>We will retain your Personal Data for the period necessary to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law or if the User requests their withdrawal from us, opposes or revokes their consent.</p><p>The criteria used to determine our retention periods include:</p><ul><li>The length of time we have an ongoing relationship with you and provide the Services to you (for example, for as long as you have an account with us or keep using the Services or if you have a booking that has not yet been fulfilled)</li><li>Whether there is a legal obligation to which we are subject (for example, certain laws require us to keep records of your transactions for a certain period of time before we can delete them)</li><li>Whether retention is advisable considering our legal position (such as, for statutes of limitations, litigation or regulatory investigations)</li></ul><h2><strong>Legitimate interest for processing your data</strong></h2><p>The data processing required in fulfilment of the aforementioned purposes that require the User’s consent cannot be undertaken without said consent.</p><p>Likewise, in the event that the User withdraws their consent to any of the processing, this will not affect the legality of the processing carried out previously.</p><p>To revoke such consent, the User may contact us through the appropriate channels.</p><p>By the same token, in those cases in which it is necessary to process the User’s data for the fulfilment of a legal obligation or for the execution of the existing contractual relationship between us and the User, the processing would be legitimized as it is necessary for compliance with said purposes.</p><h2><strong>Data Disclosure</strong></h2><p>We will use and disclose Personal Data as we believe to be necessary or appropriate:</p><ul><li>to comply with applicable law, including laws outside your country of residence;</li><li>to comply with legal process;</li><li>to respond to requests from public and government authorities, including authorities outside your country of residence and to meet national security or law enforcement requirements;</li><li>to enforce our terms and conditions;</li><li>to protect our operations;</li><li>to protect the rights, privacy, safety or property of our own, you or others; and</li><li>to allow us to pursue available remedies or limit the damages that we may sustain.</li></ul><p>We may use and disclose Other Data for any purpose, except where we are not allowed to under applicable law. In some instances, we may combine Other Data with Personal Data (such as combining your name with your location). If we do, we will treat the combined data as Personal Data as long as it is combined.</p><h2><strong>International transfers of personal data</strong></h2><p>We may transfer your personal information to our data processor(s) or/and sub-processor(s) based outside of the EEA for the purposes described in this policy. If we do this, your personal information will continue to be subject to one or more appropriate safeguards set out in the law. These might be the use of model contracts in a form approved by regulators, or having our suppliers sign up to an independent privacy scheme approved by regulators (like the US <a href=\"https://www.privacyshield.gov/\">Privacy Shield</a> scheme).</p><h2><strong>User's Responsibility</strong></h2><p>The User:</p><p>Guarantees that they are of legal age or legally emancipated, where applicable, fully capable, and that the information furnished to us is true, accurate, complete and up-to-date. For these purposes, the User is responsible for the truthfulness of all the data communicated and will keep the information updated, so that said data reflects their actual situation.</p><p>Guarantees that he/she has informed third parties on whose behalf he/she has provided data, where applicable, of the aspects contained in this document. Also guarantees that he/she has obtained the third party’s authorisation to provide their data to us for the purposes indicated.</p><p>Will be responsible for false or inaccurate information provided through the Website and for damages, whether direct or indirect, that this may cause to us or third parties.</p><h2><strong>Exercise of Rights and Data Deletion</strong></h2><p>The User may contact us at any time free of charge by emailing support@igloorooms.com and providing his unique account email, to:</p><ul><li>To obtain confirmation about whether or not personal data concerning the User are being processed by us.</li><li>To access their personal details.</li><li>To rectify any inaccurate or incomplete data.</li><li>To request the deletion of their personal data when, among other reasons, the data are no longer necessary for the purposes for which they were collected.</li><li>To confirm revocation of consent.</li><li>To obtain from us the limitation of data processing when any of the conditions provided in the data protection regulations are met.</li><li>To request the portability of your data.</li></ul><p>Likewise, the user is informed that at any time he/she may file a complaint regarding the protection of their personal data before the competent Data Protection Authority.</p><h2><strong>Security Measures</strong></h2><p>We will process the User’s data at all times in an absolute confidential way and maintaining the mandatory duty to secrecy with regard to said data, in accordance with the provisions set out in applicable regulations, and to this end adopting the measures of a technical and organisational nature required to guarantee the security of their data and prevent them from being altered, lost, processed or accessed illegally, depending on the state of the technology, the nature of the stored data and the risks to which they are exposed.</p>",
        "promotions": [
            {
                "from": "2024-02-14",
                "id": 19385,
                "is_loyalty": false,
                "key": "",
                "to": "2024-10-05"
            },
            {
                "from": "2024-04-08",
                "id": 19503,
                "is_loyalty": true,
                "key": "ZOUZOU",
                "to": "2024-11-02"
            },
            {
                "from": "2024-04-08",
                "id": 20652,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            },
            {
                "from": "2024-02-14",
                "id": 19386,
                "is_loyalty": false,
                "key": "",
                "to": "2024-10-05"
            },
            {
                "from": "2024-04-08",
                "id": 19504,
                "is_loyalty": true,
                "key": "ZOUZOU",
                "to": "2024-11-02"
            },
            {
                "from": "2024-04-08",
                "id": 20653,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            },
            {
                "from": "2024-02-14",
                "id": 19387,
                "is_loyalty": false,
                "key": "",
                "to": "2024-10-05"
            },
            {
                "from": "2024-04-08",
                "id": 20654,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            },
            {
                "from": "2024-04-08",
                "id": 20655,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            }
        ],
        "roomtypes": [
            {
                "amenities": [
                    {
                        "amenity_type": "room",
                        "code": "amenities",
                        "description": "Welcome amenities"
                    },
                    {
                        "amenity_type": "room",
                        "code": "viewslopes",
                        "description": "Slopes view"
                    },
                    {
                        "amenity_type": "room",
                        "code": "soundproof",
                        "description": "Soundproof"
                    }
                ],
                "availabilities": null,
                "bedding_setup": [
                    {
                        "code": "kingsizebed",
                        "count": 1,
                        "name": "King size bed"
                    },
                    {
                        "code": "singlebed",
                        "count": 1,
                        "name": "Single bed"
                    }
                ],
                "description": "Our Modern and Classic Rooms averages 322 square feet with custom furnishings,every room in Hotel High Season includes the finest attention to detail, from the triple-sheeted 300 thread count sheets to the one-touch “Goodnight” button.Each room will be everything you are looking for in a Lebanon hotel, and drastically more than you thought possible and our custom beds by will make you want to snooze through your morning plans.When you enter our Modern and Classic Room, you’ll only have one thought: this is what all hotels at Lebanon should be like. ",
                "exposed_inventory": null,
                "id": 110,
                "images": [
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_235.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_271.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_224.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_251.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_225.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_236.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_241.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_234.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_223.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_231.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_226.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_229.jpg"
                    }
                ],
                "inventory": null,
                "is_active": true,
                "is_bed_configuration_enabled": false,
                "main_image": {
                    "tooltip": "Standard Rooms",
                    "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_235.jpg"
                },
                "name": "Standard Rooms",
                "occupancy_default": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": null
                },
                "occupancy_max": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": 0
                },
                "physicalrooms": [
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 16,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Naji Tanjara",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 24,
                        "name": "01"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 25,
                        "name": "02"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 14,
                        "name": "03"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 15,
                        "name": "04"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 16,
                        "name": "05"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 17,
                        "name": "06"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 26,
                        "name": "07"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 28,
                        "name": "08"
                    }
                ],
                "rate": null,
                "rateplans": [
                    {
                        "agents": [
                            {
                                "code": "HUTCH",
                                "id": 1,
                                "name": "Demo Agency",
                                "verification_mode": null
                            },
                            {
                                "code": "",
                                "id": 2,
                                "name": "Alitalia Cabin Crew",
                                "verification_mode": null
                            }
                        ],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 123,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": true,
                        "name": "Standard Rooms/Bed-&-breakfast/Dem/Ali",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 2001,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": true,
                        "is_targeting_travel_agency": false,
                        "name": "Standard Rooms/Bed-&-breakfast/Non-ref./Dem",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "WS",
                        "guarantee": null,
                        "id": 3156,
                        "is_active": true,
                        "is_booking_engine_enabled": false,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Standard Rooms/WS/Bed-only",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed only",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "Breakfast at $7/person",
                        "guarantee": null,
                        "id": 3882,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Standard Rooms/Breakfast at $7/person/Bed-only",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed only",
                        "variations": null
                    }
                ],
                "size": 25.000,
                "smoking_option": {
                    "allowed_smoking_options": [
                        {
                            "code": "002",
                            "description": "Non-smoking"
                        }
                    ],
                    "code": "003",
                    "description": "Non smoking"
                }
            },
            {
                "amenities": [
                    {
                        "amenity_type": "room",
                        "code": "jacuzzi",
                        "description": "Jacuzzi"
                    },
                    {
                        "amenity_type": "room",
                        "code": "view",
                        "description": "Scenic view"
                    },
                    {
                        "amenity_type": "room",
                        "code": "terracegrass",
                        "description": "Terrace with grass"
                    },
                    {
                        "amenity_type": "room",
                        "code": "bathroomshared",
                        "description": "Shared bathroom"
                    }
                ],
                "availabilities": null,
                "bedding_setup": [
                    {
                        "code": "kingsizebed",
                        "count": 1,
                        "name": "King size bed"
                    }
                ],
                "description": "Large room with sitting area and Jacuzzi",
                "exposed_inventory": null,
                "id": 111,
                "images": [
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_221.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_224.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_251.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_225.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_222.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_234.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_223.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_231.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_226.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_229.jpg"
                    }
                ],
                "inventory": null,
                "is_active": true,
                "is_bed_configuration_enabled": false,
                "main_image": {
                    "tooltip": "Premium Suites",
                    "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_221.jpg"
                },
                "name": "Premium Suites",
                "occupancy_default": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": null
                },
                "occupancy_max": {
                    "adult_nbr": 5,
                    "children_nbr": 0,
                    "infant_nbr": 0
                },
                "physicalrooms": [
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 10,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Bassam",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 2,
                        "name": "101"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 3,
                        "name": "102"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 4,
                        "name": "103"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 5,
                        "name": "104"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 6,
                        "name": "105"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 1,
                        "name": "106"
                    }
                ],
                "rate": null,
                "rateplans": [
                    {
                        "agents": [
                            {
                                "code": "HUTCH",
                                "id": 1,
                                "name": "Demo Agency",
                                "verification_mode": null
                            }
                        ],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 124,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": true,
                        "name": "Premium Suites/Bed-&-breakfast/Dem",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [
                            {
                                "code": "HUTCH",
                                "id": 1,
                                "name": "Demo Agency",
                                "verification_mode": null
                            },
                            {
                                "code": "",
                                "id": 2,
                                "name": "Alitalia Cabin Crew",
                                "verification_mode": null
                            }
                        ],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 1946,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": true,
                        "name": "Premium Suites/Bed-&-breakfast/Dem/Ali",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "Breakfast & dinner",
                        "guarantee": null,
                        "id": 3755,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Premium Suites/Breakfast & dinner/Half-board",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Half board",
                        "variations": null
                    }
                ],
                "size": 50.000,
                "smoking_option": {
                    "allowed_smoking_options": [
                        {
                            "code": "",
                            "description": "No preferences"
                        },
                        {
                            "code": "001",
                            "description": "Smoking"
                        },
                        {
                            "code": "002",
                            "description": "Non-smoking"
                        }
                    ],
                    "code": "001",
                    "description": "Ask"
                }
            },
            {
                "amenities": [
                    {
                        "amenity_type": "room",
                        "code": "cablesatellitetv",
                        "description": "Cable / Satellite TV"
                    },
                    {
                        "amenity_type": "room",
                        "code": "cdplayer",
                        "description": "CD player"
                    },
                    {
                        "amenity_type": "room",
                        "code": "newspaperfree",
                        "description": "Complimentary newspaper"
                    },
                    {
                        "amenity_type": "room",
                        "code": "faxmachine",
                        "description": "Fax machine"
                    },
                    {
                        "amenity_type": "room",
                        "code": "directphone",
                        "description": "Direct-dial phone"
                    },
                    {
                        "amenity_type": "room",
                        "code": "bathtub",
                        "description": "Bathtub"
                    },
                    {
                        "amenity_type": "room",
                        "code": "hairdryeronrequest",
                        "description": "Hair dryer on request"
                    },
                    {
                        "amenity_type": "room",
                        "code": "espressomachine",
                        "description": "Espresso machine"
                    }
                ],
                "availabilities": null,
                "bedding_setup": [
                    {
                        "code": "twinqueenbeds",
                        "count": 4,
                        "name": "Twin queen beds"
                    },
                    {
                        "code": "bunkbeds",
                        "count": 1,
                        "name": "Bunk beds"
                    },
                    {
                        "code": "twindoublechangeable",
                        "count": 1,
                        "name": "Twin/Double changeable beds"
                    },
                    {
                        "code": "sofabed",
                        "count": 6,
                        "name": "Sofa bed"
                    }
                ],
                "description": "",
                "exposed_inventory": null,
                "id": 2352,
                "images": [],
                "inventory": null,
                "is_active": true,
                "is_bed_configuration_enabled": true,
                "main_image": null,
                "name": "Penthouse",
                "occupancy_default": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": null
                },
                "occupancy_max": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": 0
                },
                "physicalrooms": [
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 317,
                        "name": "P1"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 318,
                        "name": "P2"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 319,
                        "name": "P3"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 320,
                        "name": "P4"
                    }
                ],
                "rate": null,
                "rateplans": [
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "",
                        "guarantee": null,
                        "id": 3766,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Penthouse/Bed-&-breakfast",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "Bone fire express and 30 minutes massage or yoga",
                        "guarantee": null,
                        "id": 3929,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Penthouse/Bone fire express and 30 minutes massage or yoga/All-inclusive",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "All-inclusive",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "WS",
                        "guarantee": null,
                        "id": 3942,
                        "is_active": true,
                        "is_booking_engine_enabled": false,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Penthouse/WS/Bed-&-breakfast",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    }
                ],
                "size": 100.000,
                "smoking_option": {
                    "allowed_smoking_options": [
                        {
                            "code": "002",
                            "description": "Non-smoking"
                        }
                    ],
                    "code": "003",
                    "description": "Non smoking"
                }
            }
        ],
        "social_media": [
            {
                "code": "001",
                "link": "https://www.facebook.com/DemoHotel",
                "name": "Facebook"
            },
            {
                "code": "002",
                "link": "https://www.instagram.com/DemoHotel",
                "name": "Instragram"
            },
            {
                "code": "003",
                "link": "",
                "name": "Twitter"
            },
            {
                "code": "004",
                "link": "https://www.youtube.com",
                "name": "YouTube"
            },
            {
                "code": "005",
                "link": "",
                "name": "Skype"
            },
            {
                "code": "006",
                "link": "96170103222",
                "name": "WhatsApp"
            },
            {
                "code": "007",
                "link": "https://www.tripadvisor.com",
                "name": "Trip Advisor"
            }
        ],
        "space_theme": {
            "background_image": "https://x.igloorooms.com/irimages/acbg/AcBg_42.jpg?t=1595742815420",
            "button_bg_color": "af1f2f",
            "button_border_radius": "28",
            "favicon": "https://x.igloorooms.com/irimages/acfavicon/AcFavicon_42.png",
            "heading_bar_color": "949494",
            "heading_font_color": "FFFFFF",
            "logo": "https://x.igloorooms.com/irimages/aclogo/AcLogo_42.png",
            "website": "www.demo.igloospace.com"
        },
        "tags": [
            {
                "key": "conversion",
                "value": ""
            },
            {
                "key": "header",
                "value": ""
            },
            {
                "key": "body",
                "value": ""
            },
            {
                "key": "footer",
                "value": ""
            },
            {
                "key": "css",
                "value": ""
            }
        ],
        "tax_nbr": "DEMO8998",
        "tax_statement": "Excluding 11.00% V.A.T - Including 5.00% City tax",
        "taxes": [
            {
                "is_exlusive": true,
                "name": "V.A.T",
                "pct": 11.000
            },
            {
                "is_exlusive": false,
                "name": "City tax",
                "pct": 5.000
            }
        ],
        "time_constraints": {
            "booking_cutoff": "22:00",
            "check_in_from": "14:00",
            "check_in_till": "24:00",
            "check_out_till": "12:00"
        }
    }
};

const Facilities = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get element() { return getElement(this); }
};

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rf_hide = createEvent(this, "rf_hide", 7);
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
    get element() { return getElement(this); }
};

const Navbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rf_show_popup = createEvent(this, "rf_show_popup", 7);
        this.hotel = data.My_Result;
        this.language = 'English';
        this.currency = 'US$';
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    show() {
        console.log('hello');
        this.rf_show_popup.emit(true);
    }
    getData(event) {
        this.language = event.detail.lang;
        this.currency = event.detail.cur;
    }
    render() {
        return (h("nav", { key: 'dd1d3fef618f83f5d44d3b562716c0baaffb1bca', class: "flex flex-row justify-between px-4 lg:px-20 xl:px-60 py-3 fixed top-0 left-0 w-full bg-white z-10" }, h("div", { key: 'e4a38991fb244f1d75115a48f7fa28091181d18e', class: 'flex flex-col' }, h("div", { key: '0b47edfbafae07e7c5e4153dffc7bcdce2fd4487', class: 'font-bold text-xl' }, this.hotel.name), h("small", { key: 'f1f3f2aa5e3132a58048ba8a38fd1fd09086b46f', class: 'text-gray-600 text-base' }, this.hotel.area + ', ' + this.hotel.city.name + ', ' + this.hotel.country.name)), h("div", { key: 'a30ec11217bbefddd73e182edfb4308bd297ca90', class: "flex flex-row gap-2 md:gap-10 items-center text-gray-600 font-semibold" }, h("button", { key: '2ba9615b5a1e30b1e2b54aa0433b8626273bab90', class: 'hidden md:block hover:bg-gray-300 p-2 hover:rounded-full' }, "Booking code"), h("button", { key: '4fc3e08a502d5000d41c88276a32ba578589e230', class: 'hover:bg-gray-300 p-2 hover:rounded-full', onClick: this.show.bind(this) }, this.currency), h("button", { key: '411eb15e26d6b919b5da481db50b4430b76db36c', class: 'hover:bg-gray-300 p-2 hover:rounded-full', onClick: this.show.bind(this) }, this.language), h("button", { key: '96f72afc0d7ecfafd3138df2a6eb0aff243aa62f', class: 'hidden md:block hover:bg-gray-300 p-2 hover:rounded-full' }, "Sign in"))));
    }
    get element() { return getElement(this); }
};

const Photo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get element() { return getElement(this); }
};

const languages = [
    {
        "code": "EN",
        "culture": "en-GB",
        "description": "English",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/unitedstates1960.png",
        "id": 2
    },
    {
        "code": "FR",
        "culture": "fr-FR",
        "description": "Français",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/france1794.png",
        "id": 3
    },
    {
        "code": "AR",
        "culture": "ar-SA",
        "description": "العربية",
        "direction": "RTL",
        "entries": null,
        "flag": "https://flaglog.com/img/saudiarabia1984.png",
        "id": 4
    },
    {
        "code": "RU",
        "culture": "ru-RU",
        "description": "Русский",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/russia1705.png",
        "id": 7
    },
    {
        "code": "EL",
        "culture": "el-GR",
        "description": "Ελληνικά",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/greece1822.png",
        "id": 8
    },
    {
        "code": "PL",
        "culture": "pl-PL",
        "description": "Polski",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/poland1916.png",
        "id": 10
    },
    {
        "code": "DE",
        "culture": "de-DE",
        "description": "Deutsch",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/germany1949.png",
        "id": 11
    },
    {
        "code": "UA",
        "culture": "ua-UA",
        "description": "Українська",
        "direction": "LTR",
        "entries": null,
        "flag": "https://flaglog.com/img/ukraine1918.png",
        "id": 12
    }
];

const currencies = [
    {
        "code": "AED",
        "id": 1,
        "symbol": "AED"
    },
    {
        "code": "LBP",
        "id": 2,
        "symbol": "LBP"
    },
    {
        "code": "EUR",
        "id": 3,
        "symbol": "€"
    },
    {
        "code": "USD",
        "id": 4,
        "symbol": "US$"
    },
    {
        "code": "SAR",
        "id": 5,
        "symbol": "SAR"
    },
    {
        "code": "GBP",
        "id": 9,
        "symbol": "GBP"
    },
    {
        "code": "EGP",
        "id": 11,
        "symbol": "EGP"
    },
    {
        "code": "RUB",
        "id": 12,
        "symbol": "RUB"
    },
    {
        "code": "JOD",
        "id": 14,
        "symbol": "JOD"
    },
    {
        "code": "RON",
        "id": 15,
        "symbol": "RON"
    },
    {
        "code": "QAR",
        "id": 16,
        "symbol": "QAR"
    },
    {
        "code": "KWD",
        "id": 17,
        "symbol": "KWD"
    },
    {
        "code": "BHD",
        "id": 18,
        "symbol": "BHD"
    },
    {
        "code": "OMR",
        "id": 19,
        "symbol": "OMR"
    },
    {
        "code": "SYP",
        "id": 20,
        "symbol": "SYP"
    },
    {
        "code": "IQD",
        "id": 21,
        "symbol": "IQD"
    },
    {
        "code": "VND",
        "id": 22,
        "symbol": "VND"
    },
    {
        "code": "CAD",
        "id": 23,
        "symbol": "CAD"
    },
    {
        "code": "AUD",
        "id": 24,
        "symbol": "AUD"
    },
    {
        "code": "GEL",
        "id": 25,
        "symbol": "GEL"
    },
    {
        "code": "GNF",
        "id": 26,
        "symbol": "GNF"
    },
    {
        "code": "ALL",
        "id": 30,
        "symbol": "ALL"
    },
    {
        "code": "AMD",
        "id": 31,
        "symbol": "AMD"
    },
    {
        "code": "ARS",
        "id": 32,
        "symbol": "ARS"
    },
    {
        "code": "BGN",
        "id": 34,
        "symbol": "BGN"
    },
    {
        "code": "BRL",
        "id": 37,
        "symbol": "BRL"
    },
    {
        "code": "BYN",
        "id": 38,
        "symbol": "BYN"
    },
    {
        "code": "CNY",
        "id": 40,
        "symbol": "CNY"
    },
    {
        "code": "CHF",
        "id": 41,
        "symbol": "CHF"
    },
    {
        "code": "CZK",
        "id": 43,
        "symbol": "CZK"
    },
    {
        "code": "DKK",
        "id": 44,
        "symbol": "DKK"
    },
    {
        "code": "GHS",
        "id": 46,
        "symbol": "GHS"
    },
    {
        "code": "HRK",
        "id": 47,
        "symbol": "HRK"
    },
    {
        "code": "HUF",
        "id": 48,
        "symbol": "HUF"
    },
    {
        "code": "IDR",
        "id": 49,
        "symbol": "IDR"
    },
    {
        "code": "ILS",
        "id": 50,
        "symbol": "ILS"
    },
    {
        "code": "INR",
        "id": 51,
        "symbol": "INR"
    },
    {
        "code": "JPY",
        "id": 53,
        "symbol": "JPY"
    },
    {
        "code": "KRW",
        "id": 55,
        "symbol": "KRW"
    },
    {
        "code": "MAD",
        "id": 57,
        "symbol": "MAD"
    },
    {
        "code": "MDL",
        "id": 58,
        "symbol": "MDL"
    },
    {
        "code": "MKD",
        "id": 59,
        "symbol": "MKD"
    },
    {
        "code": "MVR",
        "id": 60,
        "symbol": "MVR"
    },
    {
        "code": "MXN",
        "id": 61,
        "symbol": "MXN"
    },
    {
        "code": "MYR",
        "id": 62,
        "symbol": "MYR"
    },
    {
        "code": "NGN",
        "id": 63,
        "symbol": "NGN"
    },
    {
        "code": "NOK",
        "id": 64,
        "symbol": "NOK"
    },
    {
        "code": "PHP",
        "id": 67,
        "symbol": "PHP"
    },
    {
        "code": "PLN",
        "id": 68,
        "symbol": "PLN"
    },
    {
        "code": "RSD",
        "id": 71,
        "symbol": "RSD"
    },
    {
        "code": "SEK",
        "id": 74,
        "symbol": "SEK"
    },
    {
        "code": "SGD",
        "id": 76,
        "symbol": "SGD"
    },
    {
        "code": "THB",
        "id": 77,
        "symbol": "THB"
    },
    {
        "code": "TRY",
        "id": 78,
        "symbol": "TRY"
    },
    {
        "code": "UAH",
        "id": 79,
        "symbol": "UAH"
    },
    {
        "code": "ZAR",
        "id": 82,
        "symbol": "ZAR"
    }
];

const Popup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rf_hide_popup = createEvent(this, "rf_hide_popup", 7);
        this.rf_send_data = createEvent(this, "rf_send_data", 7);
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
    get element() { return getElement(this); }
};

const Read = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get element() { return getElement(this); }
};

const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };

const withNativeBlob$1 = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView$1 = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob$1 && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer$2 &&
        (data instanceof ArrayBuffer || isView$1(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    }
    else if (withNativeArrayBuffer$2 &&
        (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}

// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup$1[chars.charCodeAt(i)] = i;
}
const decode$1 = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i)];
        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};

const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType),
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
        };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1),
        }
        : {
            type: PACKET_TYPES_REVERSE[type],
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer$1) {
        const decoded = decode$1(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            }
            else {
                // from HTTP long-polling or WebTransport
                return new Blob([data]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        encodePacket(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform(packet, controller) {
            encodePacketToBinary(packet, (encodedPacket) => {
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                }
                else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                }
                else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        },
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */;
                    }
                    else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                    }
                    else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                    }
                }
                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(ERROR_PACKET);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(ERROR_PACKET);
                    break;
                }
            }
        },
    });
}
const protocol$1 = 4;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

const globalThisShim = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    }
    else {
        obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
        obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode$1(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
    createUri(schema, query = {}) {
        return (schema +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(query));
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port &&
            ((this.opts.secure && Number(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))) {
            return ":" + this.opts.port;
        }
        else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = encode$1(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

// imported from https://github.com/unshiftio/yeast
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for (; i < length; i++)
    map[alphabet[i]] = i;

// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
const hasCORS = value;

// browser shim for xmlhttprequest module
function XHR(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}
function createCookieJar() { }

function empty() { }
const hasXHR2 = (function () {
    const xhr = new XHR({
        xdomain: false,
    });
    return null != xhr.responseType;
})();
class Polling extends Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
        if (this.opts.withCredentials) {
            this.cookieJar = createCookieJar();
        }
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    poll() {
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        encodePayload(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, cookieJar: this.cookieJar }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data,
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(uri, opts) {
        super();
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    create() {
        var _a;
        const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        const xhr = (this.xhr = new XHR(opts));
        try {
            xhr.open(this.method, this.uri, true);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(xhr);
                }
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}

const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
const defaultBinaryType = "arraybuffer";

// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                !isReactNative
                    ? protocols
                        ? new WebSocket(uri, protocols)
                        : new WebSocket(uri)
                    : new WebSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent,
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            encodePacket(packet, this.supportsBinary, (data) => {
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                }
                catch (e) {
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */
    check() {
        return !!WebSocket;
    }
}

class WT extends Transport {
    get name() {
        return "webtransport";
    }
    doOpen() {
        // @ts-ignore
        if (typeof WebTransport !== "function") {
            return;
        }
        // @ts-ignore
        this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        this.transport.closed
            .then(() => {
            this.onClose();
        })
            .catch((err) => {
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this.transport.ready.then(() => {
            this.transport.createBidirectionalStream().then((stream) => {
                const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = createPacketEncoderStream();
                encoderStream.readable.pipeTo(stream.writable);
                this.writer = encoderStream.writable.getWriter();
                const read = () => {
                    reader
                        .read()
                        .then(({ done, value }) => {
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    })
                        .catch((err) => {
                    });
                };
                read();
                const packet = { type: "open" };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this.writer.write(packet).then(() => this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this.writer.write(packet).then(() => {
                if (lastPacket) {
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}

const transports = {
    websocket: WS,
    webtransport: WT,
    polling: Polling,
};

// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    if (str.length > 2000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}

class Socket$1 extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts = {}) {
        super();
        this.binaryType = defaultBinaryType;
        this.writeBuffer = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = parse(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = parse(opts.host).host;
        }
        installTimerFunctions(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || [
            "polling",
            "websocket",
            "webtransport",
        ];
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: false,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = decode(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this.beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this.beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = protocol$1;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        }, this.opts.transportOptions[name]);
        return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket$1.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", (reason) => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        Socket$1.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket$1.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this.upgrades.indexOf("webtransport") !== -1 &&
            name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(() => {
                if (!failed) {
                    transport.open();
                }
            }, 200);
        }
        else {
            transport.open();
        }
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open";
        Socket$1.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade) {
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            this.resetPingTimeout();
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += byteLength(data);
            }
            if (i > 0 && payloadSize > this.maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    onError(err) {
        Socket$1.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
Socket$1.protocol = protocol$1;

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}

/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS$1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS$1.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

const parser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  protocol: protocol,
  get PacketType () { return PacketType; },
  Encoder: Encoder,
  Decoder: Decoder
});

function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on(io, "open", this.onopen.bind(this)),
            on(io, "packet", this.onpacket.bind(this)),
            on(io, "error", this.onerror.bind(this)),
            on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) ;
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};

class Manager extends Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new Socket$1(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        const onError = (err) => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = on(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        nextTick(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager,
    Socket,
    io: lookup,
    connect: lookup,
});

const Rooms = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rf_sendId = createEvent(this, "rf_sendId", 7);
        this.amenities = data.My_Result.amenities;
        this.roy = true;
        this.rooms = [...data.My_Result.roomtypes];
    }
    componentWillLoad() {
        this.socket = lookup('http://localhost:3000');
        this.socket.on('connection', () => {
            console.log('Connected to server');
        });
        this.socket.on('disable_room_type', room_id => {
            this.handleDisableRoomType(room_id);
        });
        this.socket.on('activate_room_type', room_id => {
            this.handleActivateRoomType(room_id);
        });
    }
    handleDisableRoomType(room_id) {
        let updatedRooms = this.rooms.map(item => {
            if (item.id === room_id) {
                return Object.assign(Object.assign({}, item), { is_active: false });
            }
            return item;
        });
        this.rooms = [...updatedRooms];
    }
    handleActivateRoomType(room_id) {
        let updatedRooms = this.rooms.map(item => {
            if (item.id === room_id) {
                return Object.assign(Object.assign({}, item), { is_active: true });
            }
            return item;
        });
        this.rooms = [...updatedRooms];
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = tailwind;
            shadowRoot.appendChild(style);
        }
    }
    sendId(id) {
        console.log(id);
        this.rf_sendId.emit(id);
    }
    render() {
        return (h("div", { key: 'c4282ba19bef7743b317d263a0578ac90e12a716' }, this.rooms.map((e, i) => {
            if (e.is_active) {
                return (h("div", { class: "flex flex-col md:flex-row bg-gray-200 rounded-lg my-4 p-4 gap-4" }, h("div", { class: "rounded-lg overflow-hidden w-full md:w-1/4 h-72 md:h-48 relative hover:cursor-pointer" }, h("rf-carousel", { images: e.images.map(i => {
                        return i.url;
                    }), roomId: i }), h("div", { class: "absolute bottom-0 flex flex-row w-full justify-between px-4 bg-gray-400 bg-opacity-70", onClick: this.sendId.bind(this, i) }, h("div", null, "Max ", e.occupancy_max.adult_nbr), h("div", null, e.size, "m", h("sup", null, "2")), h("div", null, "...more"))), h("div", { class: "w-full md:w-3/4 flex flex-col gap-y-2" }, h("h3", { class: "text-2xl font-semibold" }, e.name), h("div", { class: "flex flex-row gap-x-4" }, e.bedding_setup.map(b => {
                    return h("div", { class: "text-sm" }, b.name);
                })), h("div", { class: "flex flex-row gap-x-4 text-sm" }, h("div", null, this.amenities[2].description), h("div", null, this.amenities[14].description), h("div", null, this.amenities[25].description)), h("div", { class: "text-sm" }, e.description))));
            }
        })));
    }
    get element() { return getElement(this); }
};

export { Carousel as rf_carousel, DisplayHotel as rf_display_hotel, Facilities as rf_facilities, Modal as rf_modal, Navbar as rf_navbar, Photo as rf_photo, Popup as rf_popup, Read as rf_read, Rooms as rf_rooms };

//# sourceMappingURL=rf-carousel_9.entry.js.map