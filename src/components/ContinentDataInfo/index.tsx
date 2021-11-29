import { Flex, Text, Heading } from '@chakra-ui/react';
import { useContinents } from '../../hooks/useContinents';
import { ContinentInfo } from './ContinentInfo';

interface ContinentDataInfoProps {
  continent: string;
  w: string[] | number[];
  h: string[] | number[];
}

export function ContinentDataInfo({continent, h, w}: ContinentDataInfoProps) {
  const { continents } = useContinents();
  const continentInfo = continents.filter(continentName => continentName.presentation.header === continent);

  return (
    <Flex 
      margin={["0", "0", "0 auto"]}
      alignItems="flex-start" 
      maxW="1160px" 
      w={w} 
    >
      {continentInfo.map(data => {
        return (
          <Flex 
            w={w} 
            align="center" 
            marginLeft="2rem" 
            justify={["center", "center", "space-between"]} 
            marginTop="2rem" 
            marginRight="3rem"
            flexWrap="wrap"
          >
            <Text w={["300px", "400px", "500px"]} fontSize={["20px", "20px", "28px"]} textAlign="justify" marginBottom="2rem">{data.pageDetails.curiosities.info}</Text>
            <ContinentInfo 
              citiesPlus100={data.pageDetails.curiosities.data.plus100Numbers} 
              country={data.pageDetails.curiosities.data.countries} 
              languages={data.pageDetails.curiosities.data.languages}
            />
          </Flex>
        )
      })}
    </Flex>
  );
}