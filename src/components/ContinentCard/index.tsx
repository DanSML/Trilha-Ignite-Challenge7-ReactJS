import { Flex, Heading, Stack } from "@chakra-ui/react";
import { ContinentCard } from "../../components/ContinentCard/ContinentCard";
import { useContinents } from "../../hooks/useContinents";

interface CardsDisplayProps {
  continent: string;
  w: string[] | number[];
  h: string[] | number[];
}

export function CardsDisplay({ w, h, continent }: CardsDisplayProps) {
  const { continents } = useContinents();
  const continentInfo = continents.filter(continentName => continentName.presentation.header === continent);

  return (
    <Flex maxW="1160px" margin="0 auto" w={w} h={h} direction="column" >
      <Heading marginLeft={["4rem", "4rem", "2rem"]} marginTop="2rem">Cidades +100</Heading>
      <Flex flexWrap="wrap" marginLeft={["0", "0", "2rem"]} justifyContent={["center", "center", "flex-start"]}>
        {continentInfo.map(cards => {
          return cards.pageDetails.plus100Cards.map(displayCards => {
            return (
              <Stack marginRight={["0", "0", "1rem"]} marginTop="1rem" w="256px" h="280px">
                <ContinentCard cardDetails={displayCards}/>
              </Stack>
            );
          });
        })}
      </Flex>
    </Flex>
  );
}