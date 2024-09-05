import type { Components, JSX } from "../types/components";

interface RfRead extends Components.RfRead, HTMLElement {}
export const RfRead: {
    prototype: RfRead;
    new (): RfRead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
