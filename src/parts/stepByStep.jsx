import { Button, Flex, Text } from "@chakra-ui/react";
import Depoiments from "../components/depoiments";

const StepByStep = ({ isMobile, colorDefault }) => {
  const whatsappLink = () => {
    window.open(
      "https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21",
      "_blank"
    );
  };

  return (
    <Flex alignItems="center" flexDirection="column" m="5% 0 2% 0" p='0 2% 0 2%'>
      <Text
        color={colorDefault}
        letterSpacing={3}
        fontWeight="semibold"
        fontSize="15px"
      >
        PASSO A PASSO
      </Text>
      <Text
        m="0.5% 0 1% 0"
        fontWeight="extrabold"
        fontSize="23px"
        whiteSpace={isMobile ? "" : "nowrap"}
        lineHeight={1}
        textAlign="center"
      >
        Quais os passos para realizar uma
        <span style={{ marginLeft: "1%", color: colorDefault }}>
          {" "}
          automação?
        </span>
      </Text>
      <Flex
        justifyContent="center"
        gap="5"
        flexDirection={isMobile ? "column" : "row"}
        m="0 5% 2.5% 5%"
      >
        <Depoiments
          position="1. "
          content="Faço uma análise detalhada do problema do cliente com uma boa reunião de alinhamento e algumas perguntas chave."
          isMobile={isMobile}
        />
        <Depoiments
          position="2. "
          content="Após identificar as tarefas a serem automatizadas, seleciono as ferramentas e tecnologias mais adequadas para automatizá-las."
          isMobile={isMobile}
        />
        <Depoiments
          position="3. "
          content="Após implementar a automação, é crucial monitorar o desempenho dos processos automatizados e fazer ajustes conforme necessário."
          isMobile={isMobile}
        />
      </Flex>
      <Button
        bg={colorDefault}
        color="black"
        onClick={whatsappLink}
        w="90%"
        boxShadow="0px 0px 10px 3px #2FCCDB"
        backgroundColor={colorDefault}
        _hover={{
          bg: colorDefault,
          transition: "transform 0.5s ease",
          transform: "scale(1.05)",
        }}
      >
        Dúvidas? Estou aqui para ajudar!
      </Button>
    </Flex>
  );
};

export default StepByStep;
