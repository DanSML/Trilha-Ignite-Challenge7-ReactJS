import { Swiper, SwiperSlide } from "swiper/react";
import { Link as ChakraLink, Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Link from 'next/link';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useContinents } from "../../hooks/useContinents";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface SliderProps {
  w: string[] | number[];
  h: string[] | number[];
}

export function Slider({ w, h }: SliderProps) {
  const { continents, handleButtonState } = useContinents();
  return (
    <Box w={w} h={h} maxW="1400px">
      <Flex justifyContent="center" align="center" maxW={w}>
        <Swiper
          autoplay={{ "delay": 3000, "disableOnInteraction": false, "pauseOnMouseEnter": true }}
          pagination={{ "clickable": true }}
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
                    <Link href={continent.presentation.href}>
                      <ChakraLink _hover={{ textDecoration: "none", opacity: 0.6, transition: ".2s"}} onClick={handleButtonState}>
                        <Heading >{continent.presentation.header}</Heading>
                        <Text>{continent.presentation.info}</Text>
                      </ChakraLink>
                    </Link>
                  </Stack>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </Box >
  );
}