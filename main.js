/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */

let selectedPokemon = pokemon[10];
displaySelectedPokemon();

/** @TODO - Update the page data using a single pokemon */


    //   1. Update the #poke_name heading with the name and dex number
    //   2. Update the #poke_img with the pokemon's image URL
    //   3. Update the type heading with the pokemon's type(s)
    //   4. Change the width of each stat bar using the 
    //       pokemon's base stats

function displaySelectedPokemon() {
    console.log(pokemon[selectedPokemon])
    let header = document.querySelector("#poke_name");
    header.innerHTML = "#" + selectedPokemon.id + " - " + selectedPokemon.name;

    let image = document.getElementById("poke_img");
    image.src = selectedPokemon.image[0]



    let types = document.getElementById("poke_types");
    if (selectedPokemon.type[1] == "none") {
        types.innerHTML = selectedPokemon.type[0] + " type"
    } else {
        types.innerHTML = selectedPokemon.type[0] + "/" + selectedPokemon.type[1] + " type"
    }

    let stats = ["hp","atk","def","sp_atk","sp_def","spd"]
    for(i = 0; i < stats.length; i++) {
        let statBar = document.getElementById(stats[i]);
        statBar.style.width = selectedPokemon.base[stats[i]] * 4 + "px";
    }
}

let randomButton = document.getElementById("random_btn");
randomButton.onclick = function() {
    selectedPokemon = pokemon[Math.floor(Math.random() * pokemon.length)]
    displaySelectedPokemon();
}

/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */