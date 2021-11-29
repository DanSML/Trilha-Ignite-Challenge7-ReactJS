import { Flex, Box, Heading, Img } from '@chakra-ui/react';

interface ContinentBannerProps {
  title: string;
  bgImg: string;
  w: string[] | number[];
  h: string[] | number[];
}

export function ContinentBanner({title, bgImg, w, h}: ContinentBannerProps) {
  return (
    <Flex
      bgImage={bgImg}
      bgRepeat="no-repeat" 
      bgSize="cover"
      w={w}
      h={h}
      margin="0 auto"
    > 
      <Flex
        w={w}
        h={h}     
        maxW="1160px" 
        margin="0 auto" 
        justifyContent={["center", "center", "flex-start"]}
        alignItems={["center", "center", "flex-end"]}
      >
        <Heading  color="light.heading" marginBottom={["0rem", "2rem"]} marginLeft={["0rem", "1rem"]}>
          {title}
        </Heading>
      </Flex>
    </Flex>
  ); 
}

