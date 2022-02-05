export declare class PieProgress extends HTMLElement {
    private progressCircle;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(attributeName: string, oldValue: number, newValue: number): void;
    setProgress(progress: number): void;
}
