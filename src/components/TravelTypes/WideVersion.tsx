import { VStack, Img, Heading, Flex} from '@chakra-ui/react';

function WideVersion() {
  return (
    <Flex justifyContent="space-between" align="center">
      <Flex justifyContent="space-around" w={1000} m="0 auto">
        <VStack spacing={6}>
          <Img src="/travelTypes-images/cocktail.png" alt="drink image" h="85" />
          <Heading size="md">vida noturna</Heading>
        </VStack>
        <VStack spacing={6}>
          <Img src="/travelTypes-images/surf.png" alt="beach image" h="85" />
          <Heading size="md">praia</Heading>
        </VStack>
        <VStack spacing={6}>
          <Img src="/travelTypes-images/building.png" alt="building image" h="85" />
          <Heading size="md">moderno</Heading>
        </VStack>
        <VStack spacing={6}>
          <Img src="/travelTypes-images/museum.png" alt="museum image" h="85" />
          <Heading size="md">clássico</Heading>
        </VStack>
        <VStack spacing={6}>
          <Img src="/travelTypes-images/earth.png" alt="earth image" h="85" />
          <Heading size="md">e mais...</Heading>
        </VStack>
      </Flex>
    </Flex>
  )
}

export { WideVersion };