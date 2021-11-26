import { Flex, Heading, Img, useBreakpointValue, Container, VStack, Text } from '@chakra-ui/react';

interface BannerProps {
  w: string[];
  h: string[];
}

function Banner({w, h}: BannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
      <Flex  align="center" justifyContent="space-around" h={h}  w={w} maxW="1920px">
        <VStack zIndex={1} display="flex">
          <Heading color="light.heading">
            5 Continentes,<br/>
            infinitas possibilidades.
          </Heading>
          <Text color="light.info" alignSelf="flex-start">
            Chegou a hora de tirar do papel 
          </Text>
          <Text color="light.info" alignSelf="flex-start">
            a viagem que você sempre sonhou
          </Text>
        </VStack>
        <VStack position="absolute" w={w} h={h}>
          <Img src="/Background.png" w={w} h={h}/>
        </VStack>
        {!!isWideVersion && (
          <VStack zIndex={1} w={417} mt="20">
            <Img src="/Airplane.png" mt="10"/>
          </VStack>
        )}
        </Flex>
    );
  }
  
  export { Banner };