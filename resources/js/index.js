
import generate_card from "./generateCard.js";
import { getAllCharacters } from "./service.js";

const allCharacters = await getAllCharacters();
const listCharacters = allCharacters.data;


const basicInfoCharacters = [];

for (const character of listCharacters) {
    const mal_id = character.character.mal_id;
    const image = character.character.images.jpg.image_url;

    const basicInfoCharacter = {
        id: mal_id,
        name: character.character.name, 
        image
    };

    basicInfoCharacters.push(basicInfoCharacter)
}

const shortBasicInfoCharacters = basicInfoCharacters.slice(0, 12);

const sectionCard = document.getElementById("section-cards");

for (const character of shortBasicInfoCharacters) {
    const id = character.id;
    const name = character.name;
    const image = character.image;

    const newCard = generate_card(id, name, image);

    sectionCard.innerHTML += newCard;
   
}

