import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, Box, Flex, Heading, Text } from "@chakra-ui/react";
import SwiperCore, { Autoplay, Pagination, Navigation} from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useContinents } from "../../hooks/useContinents";

SwiperCore.use([Autoplay,Pagination,Navigation]);

interface SliderProps {
  w: string[] | number[];
  h: string[] | number[];
}

export function Slider({w, h}: SliderProps) {
  const { continents } = useContinents();
 
  return (
    <Box w={w} h={h} maxW="1400px">
      <Flex justifyContent="center" align="center">
        <Swiper
          spaceBetween={30}
          autoplay={{"delay": 3000, "disableOnInteraction": false, "pauseOnMouseEnter": true}}
          pagination={{"clickable": true }}
          navigation={true}
        >
          {continents.map(continent => {
            return (
              <SwiperSlide>
                <Flex 
                  h={h} 
                  bgImage={continent.presentation.background} 
                  color="light.heading" 
                  alignItems="center"
                  justifyContent="center"
                >
                  <Stack 
                    spacing={4} 
                    textAlign="center"
                  >
                    <Heading>{continent.presentation.header}</Heading>
                    <Text>{continent.presentation.info}</Text>
                  </Stack>
                </Flex>
              </SwiperSlide>
            );
          })} 
        </Swiper>
      </Flex>
    </Box>
  );
}