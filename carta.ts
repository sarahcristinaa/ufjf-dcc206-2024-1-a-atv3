export type Pokemon = {
    id: number;
    nome: string;
    tipo: string;
};
export default class Carta extends HTMLElement{

    constructor(){

        super();
        console.log("Criando card pokemon");
    }
    connectedCallback (){
        this.innerHTML = `
<div>ID</div>        
<div>${this.getAttribute("nome")}</div>        
<div>Tipo</div>        
        `;

    }

    

}

