import styled from "styled-components";

export const ImageContainer = styled.div`
  height: auto;
  max-width: 100%;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
`;

export const PokemonsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
