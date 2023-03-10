import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { Box, Text, Button, Image, Heading } from "@chakra-ui/react";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detaildataset, setDetailData] = useState([]);
  const [loadingset, setLoading] = useState(false);
  const [mountedset, setMount] = useState(false);

  const fetchCardById = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
      );
      const datares = await res.json();
      const data = await datares.data;
      setDetailData(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  useEffect(() => {
    setMount(true);
    fetchCardById(id);
    setMount(false);
  }, [id, mountedset]);

  if (mountedset) return null;
  return (
    <Fragment>
      {loadingset && <h1>Loading...</h1>}
      <Box>
        <Button onClick={() => navigate(-1)}>Back</Button>
        {detaildataset.map((card, index) => (
          <Fragment key={index}>
            <Heading className="test-text">{card.name}</Heading>
            <Image src={card.card_images.map((y) => y.image_url)} />
            <Text className="test-text">
              ATK/{card.atk} DEF/{card.def}
            </Text>
            <Text className="test-text">Level: {card.level}</Text>
            <Text className="test-text">{card.attribute}</Text>
            <Text className="test-text">
              [ {card.type} / {card.race} ]
            </Text>
            <Text className="test-text">{card.description}</Text>
          </Fragment>
        ))}
        {detaildataset.map((card) =>
          card.card_sets.map((set, index) => (
            <Box key={index}>
              <Text>Name: {set.set_name}</Text>
              <Text>Code: {set.set_code}</Text>
              <Text>Rarity: {set.set_rarity}</Text>
              <Text>Price: {set.set_price}</Text>
            </Box>
          ))
        )}
      </Box>
    </Fragment>
  );
}


export default Detail;
