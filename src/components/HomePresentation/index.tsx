import { Flex } from "@chakra-ui/react";
import { Banner } from "../Banner";
import { Slider } from "../Slider";
import { TravelTypes } from "../TravelTypes";

export function HomePresentation() {
  return (
    <Flex direction="column" align="center" w="100vw">
      <Banner w={["100vw", "100vw","100vw"]} h={["165px", "365px"]} />
      <TravelTypes />
      <Slider w={["100vw"]} h={["300px", "450px"]}/>
    </Flex>
  );
}
