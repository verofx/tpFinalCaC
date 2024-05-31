"https://api.jikan.moe/v4/characters/146158"

export const getAllCharacters = async() => { 
    const response = await fetch("https://api.jikan.moe/v4/anime/38000/characters")
	return await response.json();
};