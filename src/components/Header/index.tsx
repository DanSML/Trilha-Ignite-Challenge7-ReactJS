import { Flex, Image, Button, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { MdArrowBackIos } from 'react-icons/md';
import { useState } from 'react';
import { useContinents } from '../../hooks/useContinents';

interface HeaderProps {
  w: string[];
  h: string[];
}

export function Header({w, h}: HeaderProps) {
  const { handleButtonState, button } = useContinents();
  return (
    <Flex align="center" justify="center" w={w} h={h}>
      {!!button && (
        <Link href="/">
          <Button 
            position="absolute" 
            left={["2rem", "2rem", "2rem", "2rem", "2rem", "25rem"]} 
            onClick={handleButtonState}
          > 
            <Icon transition="all .2s" as={MdArrowBackIos} _hover={{opacity:"0.3", transition:"all .2s"}}/>
          </Button>
        </Link>
      )}
      <Image src="/Logo.png" w={[100, 150]} alt="Logo image"/>
    </Flex>
  );
}