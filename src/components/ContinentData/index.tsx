import { Flex } from '@chakra-ui/react';
import { useContinents } from '../../hooks/useContinents';
import { CardsDisplay } from '../ContinentCard';
import { ContinentDataInfo } from '../ContinentDataInfo';
import { ContinentBanner } from './ContinentBanner';

interface ContinentDataProps {
  continent: string;
  w: string[] | number[];
  h: string[] | number[];
}

export function ContinentData({w, h, continent}: ContinentDataProps) {
  const { continents } = useContinents();
  const continentInfo = continents.filter(continentName => continentName.presentation.href === continent);

  return (
    <Flex direction="column">
      {continentInfo.map(data => {
        return (
          <>
            <ContinentBanner w={w} h={["200px", "300px", "500px"]} title={data.pageDetails.banner.header} bgImg={data.pageDetails.banner.background}/>
            <ContinentDataInfo continent={data.presentation.header} w={w} h={h}/>
            <CardsDisplay w={w} h={h} continent={data.presentation.header}/>
          </>
        );
      })}
    </Flex>
  );
}