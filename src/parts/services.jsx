import { Flex, Text } from "@chakra-ui/react";
import Card from "../components/card";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRobot, FaWhatsapp } from "react-icons/fa";

const Services = ({ isMobile, colorDefault }) => {

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      m="3% 0 5% 0"
      p='0 30px 0 30px'
      fontWeight="semibold"
    >
      <Text
        color={colorDefault}
        letterSpacing={3}
        fontWeight="semibold"
        fontSize="15px"
      >
        SERVIÇOS
      </Text>
      <Flex mt="1.5%"  gap="5" flexDirection={isMobile ? "column" : "row"}>
        <Card
          icon={<HiOutlineDocumentReport />}
          content="Criação e envio de relatórios automatizados"
        />
        <Card
          icon={<FaWhatsapp />}
          content="Robô de atendimento e vendas para redes socias e sites"
        />
        <Card
          icon={<FaRobot />}
          content="Automatização de processos manuais em sistemas"
        />
      </Flex>
    </Flex>
  );
};

export default Services;
