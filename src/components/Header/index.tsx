import { Flex, Image } from '@chakra-ui/react';

interface HeaderProps {
  w: string[];
  h: string[];
}

export function Header({w, h}: HeaderProps) {
  return (
    <Flex align="center" justify="center" w={w} h={h}>
      <Image src="/Logo.png" w={[100, 150]} alt="Logo image"/>
    </Flex>
  );
}