import { Signal } from "./signals";

export function render<T>(el: Element | HTMLElement | string | null, val: T) {
    if (typeof el === "string") {
        const selector = document.querySelector(el);
        if (selector !== null && selector.innerHTML !== null) {
            if (val instanceof Node) {
                selector.appendChild(val);
            } else {
                selector.innerHTML = String(val);
            }
        }
    } else if (el !== null && el.textContent !== null) {
        if (val instanceof Node) {
            el.appendChild(val);
        } else {
            el.textContent = String(val);
        }
    }
}

export function toHTMLInput(target: EventTarget | null): HTMLInputElement {
    return target as HTMLInputElement;
}

type Component = () => void;

export function component(componentFunction: Component) {
    return () => {
        Signal.dispose();

        return componentFunction();
    };
}
