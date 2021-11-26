import { useBreakpointValue, Heading, Divider, Stack} from '@chakra-ui/react';
import { NoWideVersion } from './NoWideVersion';
import { WideVersion } from './WideVersion';

function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <>
      {isWideVersion ? (
        <Stack align="center" spacing={20} my={20}>
          <WideVersion/>
          <Divider bgColor="dark.black" maxWidth="200px" h={.5} borderRadius="full" />
          <Heading textAlign="center">
            Vamos nessa?<br />Então escolha seu continente
          </Heading>
        </Stack>
      ) : (
        <Stack align="center" spacing={10} my={10}>
          <NoWideVersion/>
          <Divider bgColor="dark.black" maxWidth="200px" h={.5} borderRadius="full" />
          <Heading textAlign="center">
            Vamos nessa?<br />Então escolha seu continente
          </Heading>
        </Stack>
      )}
    </>
  )
}

export { TravelTypes };
