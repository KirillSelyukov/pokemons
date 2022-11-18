import {
  PokemonsContainer,
  PokemonContainer,
  ImageContainer
} from "./Pokemons.styled";

export const Pokemons = ({ pokemons }) => {
  return (
    <PokemonsContainer>
      <PokemonList pokemons={pokemons} />
    </PokemonsContainer>
  );
};

const PokemonList = ({ pokemons }) => {
  if (!pokemons.length) return <div>Loading....</div>;
  return pokemons.map((pokemon) => {
    return <Pokemon pokemon={pokemon} key={pokemon.id} />;
  });
};

const Pokemon = ({ pokemon }) => {
  return (
    <PokemonContainer>
      {pokemon.name}
      <ImageContainer>
        <img src={pokemon.image} alt={pokemon.name} />
      </ImageContainer>
    </PokemonContainer>
  );
};
