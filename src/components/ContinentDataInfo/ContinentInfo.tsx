import { Flex, Stack, Text, Heading } from '@chakra-ui/react';

interface ContinentDataInfo {
  country: number;
  languages: number;
  citiesPlus100: number;
}

export function ContinentInfo({ country, languages, citiesPlus100 }: ContinentDataInfo) {
  return (
    <Flex>
      <Stack spacing={10} direction="row">
        <Stack spacing={2} align="center">
          <Heading size="2xl" color="highlight.base">{country}</Heading>
          <Heading fontSize={["16px", "20px"]}>países</Heading>
        </Stack>
        <Stack spacing={2} align="center">
          <Heading size="2xl" color="highlight.base">{languages}</Heading>
          <Heading fontSize={["16px", "20px"]}>línguas</Heading>
        </Stack>
        <Stack spacing={2} align="center">
          <Heading size="2xl" color="highlight.base">{citiesPlus100}</Heading>
          <Heading fontSize={["16px", "20px"]}>cidades +100</Heading>
        </Stack>
      </Stack>
    </Flex>
  );
}