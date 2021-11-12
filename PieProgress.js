export class PieProgress extends HTMLElement {
    constructor() {
        super()

        var style = document.createElement("style")
        document.head.appendChild(style)
        style.sheet.insertRule(`:root {
            --pieprogress-background-color: black;
            --pieprogress-color: gray;
        }`)

        this.attachShadow({ mode: 'open' })

        const template = document.createElement('template')
        template.innerHTML = ` 
            <style>
                #pie {
                    aspect-ratio: 1;
                    height: 100%;
                    border-radius: 50%;
                    background: var(--pieprogress-background-color);
                    background-image: linear-gradient(to right, transparent 50%, var(--pieprogress-color) 0);
                }
                #pie::before {
                    content: '';
                    display: block;
                    margin-left: 50%;
                    height: 100%;
                    border-radius: 0 100% 100% 0 / 50%;
                    background-color: inherit;
                    transform-origin: left;
                    transform: rotate(140deg);
                }
                svg {
                    aspect-ratio: 1;
                    height: 100%;
                    transform: rotate(-90deg);
                    border-radius: 50%;
                    background: var(--pieprogress-background-color);
                }
                circle {
                    fill: var(--pieprogress-background-color);
                    stroke: var(--pieprogress-color);
                    stroke-width: 32;
                    stroke-dasharray: 40 100;
                }
            </style>
            
            <div id=pie></div>
            <svg id=pie2 viewBox="0 0 32 32">
                <circle r="16" cx="16" cy="16"/>
            </svg> 
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('pie-progress', PieProgress)