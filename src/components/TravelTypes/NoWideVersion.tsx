import { HStack, Box, Heading, Flex } from '@chakra-ui/react';

function NoWideVersion() {
  return (
    <Flex w={275} h={120} flexWrap="wrap" justifyContent="space-around" align="center">
      <HStack>
        <Box borderRadius="full" w={2} h={2} bgColor="highlight.base" />
        <Heading size="md">vida noturna</Heading>
      </HStack>
      <HStack>
        <Box borderRadius="full" w={2} h={2} bgColor="highlight.base" />
        <Heading size="md">praia</Heading>
      </HStack>
      <HStack>
        <Box borderRadius="full" w={2} h={2} bgColor="highlight.base" />
        <Heading size="md">moderno</Heading>
      </HStack>
      <HStack>
        <Box borderRadius="full" w={2} h={2} bgColor="highlight.base" />
        <Heading size="md">clássico</Heading>
      </HStack>
      <HStack>
        <Box borderRadius="full" w={2} h={2} bgColor="highlight.base" />
        <Heading size="md">e mais...</Heading>
      </HStack>
    </Flex>
  );
}

export { NoWideVersion };