export type RAttributes = Map<string, string | null>;

export abstract class ShadowDOM extends HTMLElement {
    static attributesList: string[];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    setContent(html: string) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = html;
        }
    }

    setStyle(styles: string) {
        const style = document.createElement("style");
        style.textContent = styles;
        if (this.shadowRoot) {
            this.shadowRoot.appendChild(style);
        }
    }

    element(html: HTMLElement) {
        if (this.shadowRoot) {
            this.shadowRoot.append(html);
        }
    }

    static get observedAttributes() {
        return this.attributesList || [];
    }

    attributeChangedCallback(
        _name: string,
        _oldValue: string | null,
        _newValue: string | null,
    ) {
        if (typeof this.render === "function") {
            const attributes = this.getAttributes();
            this.render(attributes);
        }
    }

    getAttributes(): RAttributes {
        const attributes: RAttributes = new Map<string, string | null>();
        (this.constructor as typeof ShadowDOM).attributesList.forEach((attr) => {
            attributes.set(attr, this.getAttribute(attr));
        });
        return attributes;
    }

    abstract render(attributes?: RAttributes): HTMLElement;
}
