document.addEventListener('DOMContentLoaded', function() {
    const pokemonList = document.getElementById('pokemon-list');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonTypes = document.getElementById('pokemonTypes');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonSkills = document.getElementById('pokemonSkills');
    const pokemonImage = document.getElementById('pokemonImage');
  
    async function loadPokemonData(id) {
      try {
        const response = await fetch(`/api/pokemon/${id}`);
        const data = await response.json();
        pokemonName.textContent = data.name;
        pokemonTypes.textContent = data.types;
        pokemonHeight.textContent = data.height;
        pokemonWeight.textContent = data.weight;
        pokemonSkills.textContent = data.skills;
        pokemonImage.src = data.image;  
        pokemonImage.alt = `Image of ${data.name}`;
      } catch (error) {
        console.error('Erro ao carregar dados do Pokémon:', error);
      }
    }
  
    pokemonList.addEventListener('click', function(event) {
      const id = event.target.getAttribute('data-id');
      if (id) {
        loadPokemonData(id);
      }
    });
  });
  