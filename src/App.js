import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";

import { Input } from "@mui/material";
import { getAll, search } from "./pokemonsAPI";

import { AppContainer } from "./App.styled";
import { Pokemons } from "./Pokemons";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const debouncedSearch = useRef(
    debounce(async (query) => {
      setPokemons(await search(query));
    }, 300)
  ).current;

  const handleSearch = (query) => {
    debouncedSearch(query);
  };

  useEffect(() => {
    getAll().then((data) => setPokemons(data));
  }, []);

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <AppContainer>
      <Input
        onChange={(e) => handleSearch(e.currentTarget.value)}
        placeholder="enter pokemon name"
      />
      <Pokemons pokemons={pokemons} />
    </AppContainer>
  );
}
