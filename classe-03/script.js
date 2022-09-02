const selectedPokemon = document.querySelector('#pokemon');
const pokemonDiv = document.querySelector('.chosenPokemon');
const pokemonName = document.querySelector('.chosenPokemon h2');
const pokemonImage = document.querySelector('.chosenPokemon img');
const pokemonSkills = document.querySelectorAll('.chosenPokemon li');

selectedPokemon.addEventListener('change', function () {
    const pokemon = selectedPokemon.value;

    if (!pokemon) {
        pokemonDiv.classList.add('none');
        return;
    }

    const promiseAnswer = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    promiseAnswer.then(answer => {
        const promiseBody = answer.json();

        promiseBody.then(body => {
            pokemonName.textContent = body.name;
            pokemonImage.src = body.sprites.front_default;
            pokemonImage.alt = body.name;

            for (let i = 0; i < pokemonSkills.length; i++) {
                pokemonSkills[i].textContent = body.abilities[i].ability.name;
            }

            pokemonDiv.classList.remove('none');
        })
    })
});