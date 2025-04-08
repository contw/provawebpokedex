const express = require('express');
const axios = require('axios');
const path = require('path'); 

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client'))); 

app.get('/api/pokemon/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;
    res.json({
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map(type => type.type.name).join(', '),
      height: pokemon.height / 10,
      weight: pokemon.weight / 10,
      skills: pokemon.abilities.map(ability => ability.ability.name).join(', ')
    });
  } catch (error) {
    res.status(500).send('Erro ao buscar dados do Pokémon.');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
