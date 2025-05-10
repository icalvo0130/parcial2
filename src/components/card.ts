class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        //Storege.suscribe()
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `

        <style>

        h3 {
        font-family: Inter, sans-serif;
        align-text: center;
        }

        p {
        font-family: Inter, sans-serif;
        }

        div {
         background-color: orange;
         margin: 50px;
         pading: 50px;
         weight: 70px;

        }

        img {
            position: relative;
            weight: 70px;
            height: 70px;
            margin:20px;
        }

        </style>
        

        <div class="container">
            <img src="https://mamabruja.com/wp-content/uploads/2021/10/ivan-jevtic-p7mo8-CG5Gs-unsplash-2-1200x800.jpg">
            <H3>Rosa</H3>
            <p>Type: Arbusto</p>
        </div>
        
        
        `;
    }
}

export default Card;