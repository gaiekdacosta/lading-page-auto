import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const navigateSection = (title) => {
    console.log("title", title);
    const elements = document.querySelectorAll("p");
    elements.forEach((element) => {
      if (element.textContent === title) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        h='55px'
        bg='#2FCCDB'
        position='fixed'
        p='0 1% 0 1%'
        top='0'
        left='0'
        width='100%'
        zIndex='2'
        color='black'>
        <Flex ml='1%' alignItems='center' gap='1'>
          <FaCode style={{ fontSize: "20px" }} />
          <Text fontWeight='semibold'>Gaiek Solutions</Text>
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<RxHamburgerMenu style={{ fontSize: "25px" }} />}
            variant='unstyled'
          />
          <MenuList mt='1.5%' bg='black' color='white' borderColor='#2FCCDB'>
            <MenuItem bg='black' onClick={scrollToTop}>
              Inicio
            </MenuItem>
            <MenuItem bg='black' onClick={() => navigateSection("Enviar mensagem")}>
              Serviços
            </MenuItem>
            <MenuItem bg='black' onClick={() => navigateSection("Automatização de processos manuais em sistemas")}>
              Sobre mim
            </MenuItem>
            <MenuItem
              bg='black'
              onClick={() => navigateSection("PASSO A PASSO")}>
              Passo a passo
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default Header;
