import { Container } from "@chakra-ui/react";
import { HomePresentation } from "../components/HomePresentation";

export default function Home() {
  return (
    <Container maxW="1920px" p="0" m="0" marginBottom="20">
      <HomePresentation/>
    </Container>
  );
}
