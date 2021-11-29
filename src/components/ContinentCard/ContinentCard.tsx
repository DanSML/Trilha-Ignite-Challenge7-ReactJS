import { Box, Flex, Img, Heading, Text, Stack } from '@chakra-ui/react';

interface ContinentCardProps {
  cardDetails: {
    banner: string;
    citie: string;
    country: string;
    flag: string;
  }
}

export function ContinentCard({ cardDetails }: ContinentCardProps) {
  return (
    <Flex w={256} h={279} borderRadius="5px 5px 3px 3px" border="1px solid" borderColor="highlight.base">
      <Flex direction="column">
        <Stack spacing={5}>
          <Img src={cardDetails.banner} w={256} h={173} />
          <Flex align="center" justify="space-around">
            <Stack spacing={2}>
              <Heading fontSize="18px">{cardDetails.citie}</Heading>
              <Text>{cardDetails.country}</Text>
            </Stack>
            <Stack>
              <Img src={cardDetails.flag} />
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}