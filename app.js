//https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png

const BaseURL =
  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/"; //URL from which pokemon imgs come from.
//-----
const root = document.querySelector("#root");

//----
for (let i = 1; i <= 299; i++) {
  //Loop through and create new elements for pokemon
  const pokemon = document.createElement("div"); //create a new div
  pokemon.classList.add("Pokemon");
  //---styles:
  pokemon.style.display = "inline-block";
  pokemon.style.textAlign = "center";

  const label = document.createElement("span"); //create a new number holder
  label.innerText = `#${i}`; //display the pokemon number

  const newImg = document.createElement("img"); //create a new img
  newImg.src = `${BaseURL}${i}.png`; //display corresponding pokemon img based on loop number.
  //---styles:
  newImg.style.display = "block";

  //-Give all imgs to main container (pokemon)
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);

  //-Give final display to the root:
  root.appendChild(pokemon);
}

// :)
