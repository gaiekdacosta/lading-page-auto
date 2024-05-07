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
          Evite erros e execute atividades rotineiras eficientemente com
          facilidade, sem interrupções.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quae
          dolorem. Illo reiciendis minus sit ratione ducimus sunt cum ut
          consequatur maxime. Aperiam, consectetur laboriosam tenetur
          praesentium quae nostrum iusto.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          facilis cupiditate odio totam vitae autem voluptates sed animi quia.
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
