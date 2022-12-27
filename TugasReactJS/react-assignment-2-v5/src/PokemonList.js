import { Fragment, useEffect, useState } from "react";
import {
  Card,
  HStack,
  CardHeader,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchparamsset, setSearchParams] = useSearchParams();
  const [disabledset, setDisabled] = useState(false);

  const moveTo = (directionview) => {
    if (directionview === "prev") {
      setSearchParams({ page: parseInt(searchparamsset.get("page")) - 1 });
    } else {
      setSearchParams({ page: parseInt(searchparamsset.get("page")) + 1 });
    }
  };
  useEffect(() => {
    setDisabled(false);
    if (searchparamsset.get("page") <= 1) {
      setDisabled(true);
      searchparamsset.set("page", 1);
    }},
    [disabledset, searchparamsset, setSearchParams]);

  return (
    <HStack>
      <Button disabled={disabledset} onClick={() => moveTo("prev")}>
        {"< prev"}
      </Button>
      <Button onClick={() => moveTo("next")}>{"next >"}</Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Box role="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card>
              <CardHeader>
                <Heading as="h3" size="md">
                  {pokemon.name}
                </Heading>
              </CardHeader>
              <Image alt="Front Default" src={loadImg(pokemon.id)} />
              <Image alt="Front Shiny" src={loadImg(pokemon.id)} />
              <Image alt="Back Default" src={loadImg(pokemon.id)} />
              <Image alt="Back Shiny" src={loadImg(pokemon.id)} />
            </Card>
          </Link>
        ))}
      </Box>
    )
  );
};
const Home = () => {
  const [page, setPage] = useState(1);
  const fetchPokemons = async (page) => {
    //get pokemon list with image
    const displayperpage = 20;
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${displayperpage}&offset=${offset}`;

    const response = await fetch(url);
    const data = await response.json();
    const pokemonList = data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    });

    //set pokemonList to state
    setPokemons(await Promise.all(pokemonList));
  };

  const [pokemons, setPokemons] = useState([]);
  const [searchparamsset] = useSearchParams();

  useEffect(() => {
    fetchPokemons(searchparamsset.get("page") || 1);
  }, [searchparamsset]);

  return (
    <Fragment>
      <Heading as="h2" size="lg">
        Pokemon List
      </Heading>
      <Pagination page={page} setPage={setPage} />
      <PokemonList pokemons={pokemons} />
    </Fragment>
  );
};

export default Home;
