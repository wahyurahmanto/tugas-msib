import { Suspense, useEffect, useState } from "react";
import { Select, Flex } from "@chakra-ui/react";
import Card from "./Cards";

function Home() {
  const [dataset, setData] = useState([]);
  const [loadingset, setLoading] = useState(false);
  const url =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4";

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const resdata = await res.json();
      setData(await resdata.data);
    } catch (e) {
      throw e;
    }
    setLoading(false);
  };

  function sortData(type) {
    if (type === "name") {
      setData(
        [...dataset].sort((a, b) =>
          a.name > b.name ? 1 : a.name === b.name ? 1 : -1
        )
      );
    }

    if (type === "attack") {
      setData([...dataset].sort((a, b) => parseInt(a.atk) - parseInt(b.atk)));
    }

    if (type === "defence") {
      setData([...dataset].sort((a, b) => parseInt(a.def) - parseInt(b.def)));
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Suspense fallback={"Loading..."}>
      {loadingset && <h1>Loading...</h1>}
      <Flex direction={"column"} padding={6}>
        <Select
          onChange={(e) => sortData(e.target.value)}
          name="sort"
          placeholder="Filter Card"
        >
          <option value="name">Name</option>
          <option value="attack">Attack</option>
          <option value="defence">Defence</option>
        </Select>
      </Flex>
      <Card card={dataset} />
    </Suspense>
  );
}

export default Home;
