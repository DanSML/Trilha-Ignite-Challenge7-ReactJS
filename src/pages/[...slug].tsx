import { Container } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { ContinentData } from "../components/ContinentData";

export default function Continent() {
  const { asPath } = useRouter();
  return (
    <Container maxW={["10000px"]} p="0" m="0" marginBottom="20">
      <ContinentData continent={asPath} w={["100vw"]} h={["100vh"]}/>
    </Container>
  );
}