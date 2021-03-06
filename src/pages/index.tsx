import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { ContinentData } from "../components/ContinentData";
import { HomePresentation } from "../components/HomePresentation";

export default function Home() {
  return (
    <Container maxW={["10000px"]} p="0" m="0" marginBottom="20">
      <HomePresentation/>
    </Container>
  );
}
