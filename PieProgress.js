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
                    transform: rotate(35deg);
                }
            </style>
            
            <div id=pie></div>
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('pie-progress', PieProgress)