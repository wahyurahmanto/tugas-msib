import { useEffect, useState } from "react";
import { Badge,  HStack, Text,  Flex,  Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <Text fontSize={20} fontWeight={400}>
            {pokemon.name}
          </Text>
          <Text fontSize={20} fontWeight={400}>
            hp
          </Text>
          <Text fontSize={20} fontWeight={400}>
            speed
          </Text>
          <Text fontSize={20} fontWeight={400}>
            defense
          </Text>
          <Text fontSize={20} fontWeight={400}>
            {pokemon.height}
          </Text>
          <Text fontSize={20} fontWeight={400}>
            {pokemon.weight}
          </Text>
          <Text fontSize={20} fontWeight={400}>
            {pokemon.types.map((x, i) => (
            <Fragment key={i}>
              <Flex>
                <Badge>{x.type.name}</Badge>
              </Flex>
            </Fragment>
          ))}
        </Text>
        <Text fontSize={20} fontWeight={400}></Text>
          {pokemon.abilities.map((x, i) => (
        <Fragment key={i}>
          <Flex>
            <Badge>{x.ability.name}</Badge>
          </Flex>
        </Fragment>
        ))}
        <HStack>
          <Image src={pokemon.sprites.front_default} />
          <Image src={pokemon.sprites.back_default} />
          <Image src={pokemon.sprites.front_shiny} />
          <Image src={pokemon.sprites.back_shiny} />
        </HStack>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  return(
  <>
  <Detail pokemon={pokemon} />
  <Outlet />
  </>
  );
};

export default Page;
