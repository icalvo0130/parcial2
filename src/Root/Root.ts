import { store } from '../flux/Store';

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        <style>
        h1 {
            font-family: Inter, sans-serif;
            align-text: center;
            margin: 50px;
        }
        </style>

        <h1>El jardin de los Calvo :)</h1>
        <card-component></card-component>
        
        `;
    }
}

export default Root;