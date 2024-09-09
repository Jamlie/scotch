import { render } from "./utils";

type SignalFn<T> = (value: T) => void;

type SignalElement = HTMLElement | Element | (HTMLElement | Element)[];

export class Signal<T> {
    private val: T;
    private observers: Map<SignalFn<T>, () => void>;
    private boundElements: Set<HTMLElement>;
    private static cleanupFns: Array<() => void> = [];

    constructor(initialValue: T) {
        this.val = initialValue;
        this.observers = new Map();
        this.boundElements = new Set();
    }

    public get value(): T {
        return this.val;
    }

    public set value(value: T) {
        this.val = value;
        this.observers.forEach((_, observer) => observer(value));
        this.boundElements.forEach((el) => render(el, value));
    }

    public subscribe(callback: SignalFn<T>): () => void {
        const stop = () => {
            this.observers.delete(callback);
        };

        this.observers.set(callback, stop);
        Signal.cleanupFns.push(() => this.unsubscribe(stop));

        return stop;
    }

    private unsubscribe(stop: () => void): void {
        stop();
    }

    public bind(element: SignalElement): void {
        if (element instanceof HTMLElement || element instanceof Element) {
            this.boundElements.add(element as HTMLElement);
            render(element, this.value);
            return;
        }

        element.forEach((el) => {
            this.boundElements.add(el as HTMLElement);
            render(el, this.value);
        });
    }

    public static dispose(): void {
        Signal.cleanupFns.forEach((cleanupFn) => cleanupFn());
        Signal.cleanupFns = [];
    }
}
