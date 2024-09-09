export function Component(tagName: string) {
    return function(constructor: Function) {
        customElements.define(
            tagName,
            constructor as unknown as CustomElementConstructor,
        );
    };
}
