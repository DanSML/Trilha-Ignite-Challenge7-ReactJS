import { Flex } from "@chakra-ui/react";
import { useContinents } from "../../hooks/useContinents";
import { Banner } from "../Banner";
import { Header } from "../Header";
import { Slider } from "../Slider";
import { TravelTypes } from "../TravelTypes";

export function HomePresentation() {
  const { continents } = useContinents();

  console.log(continents);
  return (
    <Flex direction="column" align="center" w="100vw">
      <Header w={["100vw"]} h={["50px", "75px"]} />
      <Banner w={["100vw", "100vw","100vw"]} h={["165px", "365px"]} />
      <TravelTypes />
      <Slider w={["100vw"]} h={["300px", "450px"]}/>
    </Flex>
  );
}
