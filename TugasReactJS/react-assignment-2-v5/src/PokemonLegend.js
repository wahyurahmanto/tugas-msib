import { useParams } from "react-router-dom";
import { Image } from "@chakra-ui/react";
const PokemonLegend = () => {
  const { password } = useParams();
  return (
    <>
      <h1>{password}</h1>
      <Image
        alt="Arceus"
        src="https://archives.bulbagarden.net/media/upload/thumb/f/fc/493Arceus.png/250px-493Arceus.png"
      />
    </>
  );
};

export default PokemonLegend;
