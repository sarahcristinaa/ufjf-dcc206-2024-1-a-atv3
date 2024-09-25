import Carta, { Pokemon } from './carta.ts';
import './style.css'
customElements.define("detalhes-pokemon",Carta);

const END_POINT = "https://pokeapi.co/api/v2/pokemon/54";
const data = await fetch(END_POINT);
const json = await data.json();
const p1:Pokemon = {
    id: json.id,
    nome: json.name,
    tipo: json.types[0].type.name
}

console.log("Cria p1", p1);

const ePok = document.createElement("detalhes-pokemon");
ePok.setAttribute("Tipo", p1.tipo);
ePok.setAttribute("nome", p1.nome);

document.querySelector<HTMLDivElement>('#app')!.append(ePok);

