import { Button, Flex, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import MyImage from "../components/myImage";

const AboutMe = ({ isMobile, colorDefault }) => {
  const whatsappLink = () => {
    window.open(
      "https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21",
      "_blank"
    );
  };

  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      m="5%"
      p='2%'
      flexDirection={isMobile ? "column" : ""}
    >
      <MyImage isMobile={isMobile} />
      <Flex flexDirection="column" w={isMobile ? "" : "35%"} gap="2">
        <Text
          color={colorDefault}
          letterSpacing={3}
          fontWeight="semibold"
          fontSize="15px"
        >
          SOBRE MIM
        </Text>
        <Text fontSize="22px" lineHeight={1.1} fontWeight="semibold">
          Evite erros, execute atividades rotineiras de forma eficiente
        </Text>
        <Text>
          Olá! Sou Gaiek da costa, um freelancer apaixonado por simplificar
          processos e otimizar as coisas. Com mais de 3 anos de
          experiência em desenvolvimento de scripts. 
          <br />
          <br />
          Meu objetivo é oferecer soluções personalizadas de automação que permitam
          a você trabalhar da melhor forma. 
          <br />
          <br />
          Desde a criação de fluxos de trabalho eficientes até o desenvolvimento de
          scripts e integrações personalizadas, estou aqui para simplificar sua vida.
        </Text>
        <Button
          bg={colorDefault}
          color="black"
          onClick={whatsappLink}
          _hover={{
            bg: colorDefault,
            transition: "transform 0.5s ease",
            transform: "scale(1.05)",
          }}
        >
          <FaWhatsapp style={{ fontSize: "18px", marginBottom: "3px" }} />
          Enviar mensagem agora
        </Button>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
