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
                svg {
                    aspect-ratio: 1;
                    height: 100%;
                }
                #background {
                    fill: var(--pieprogress-background-color);
                }
                #pi {
                    fill: transparent;
                    stroke: var(--pieprogress-color);
                    stroke-width: 50;
                    stroke-dasharray: calc(45 * 3.14159 *50 / 100) calc(3.14159 *50);
                    transform: rotate(-90deg) translate(-100px)
                }
            </style>
            
            <svg id=pie viewBox="0 0 100 100">
                <circle id="background" r="50" cx="50" cy="50"/>
                <circle id="pi" r="25" cx="50" cy="50"/>
            </svg> 
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('pie-progress', PieProgress)