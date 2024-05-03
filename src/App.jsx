import { Button, Flex, Text } from "@chakra-ui/react";
import { FaGithub, FaRobot, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import background from "/bg.jpg";
import Card from "./components/card";
import Depoiments from "./components/depoiments";
import Header from "./components/header";
import Form from "./components/form";
import MyImage from "./components/myImage";

function App() {
  const colorDefault = "#2FCCDB";

  const whatsappLink = () => {
    window.open(
      "https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21",
      "_blank"
    );
  };

  const githubLink = () => {
    window.open("https://github.com/gaiekdacosta", "_blank");
  };

  const isMobile = () => {
    const minWidthForMobile = 768;

    return window.innerWidth < minWidthForMobile;
  };

  return (
    <>
      <Header />
      <Flex
        justifyContent='center'
        alignItems='center'
        h='100vh'
        backgroundImage={background}
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        flexDirection={isMobile() && "column"}>
        <Flex
          flexDirection='column'
          w={!isMobile() && "55%"}
          ml={isMobile() && "5%"}>
          <Text
            color={colorDefault}
            letterSpacing={3}
            fontWeight='semibold'
            fontSize='19px'>
            BEM-VINDO
          </Text>
          <Text
            w={isMobile() ? "90%" : "70%"}
            fontWeight='extrabold'
            fontSize={isMobile() ? "25px" : "40px"}
            flexDirection='column'
            lineHeight={1}>
            Aumente a produtividade das suas tarefas com as
            <span style={{ color: "colorDefault", marginLeft: "10px" }}>
              automatizações de atividades repetitivas
            </span>
          </Text>
          <Text fontSize={isMobile() ? "12.5px" : "18px"} lineHeight={1}>
            Esqueça atividades repetitivas e relatórios que tiram <br /> o foco
            do seu negócio
          </Text>
        </Flex>
        <Form isMobile={isMobile} />
      </Flex>
      <Flex
        alignItems='center'
        flexDirection='column'
        m='3% 0 5% 0'
        fontWeight='semibold'>
        <Text
          color={colorDefault}
          letterSpacing={3}
          fontWeight='semibold'
          fontSize='15px'>
          SERVIÇOS
        </Text>
        <Flex mt='1.5%' gap='5' flexDirection={isMobile() ? "column" : "row"}>
          <Card
            icon={<HiOutlineDocumentReport />}
            content={"Criação e envio de relatórios automatizados"}
          />
          <Card
            icon={<FaWhatsapp />}
            content={"Robô de atendimento e vendas para redes socias e sites"}
          />
          <Card
            icon={<FaRobot />}
            content={"Automatização de processos manuais em sistemas"}
          />
        </Flex>
      </Flex>
      <Flex
        justifyContent='space-around'
        alignItems='center'
        m='5%'
        flexDirection={isMobile() ? "column" : ""}>
        <MyImage isMobile={isMobile} />
        <Flex flexDirection='column' w={isMobile() ? "" : "35%"} gap='2'>
          <Text
            color={colorDefault}
            letterSpacing={3}
            fontWeight='semibold'
            fontSize='15px'>
            SOBRE MIM
          </Text>
          <Text fontSize='22px' lineHeight={1.1} fontWeight='semibold'>
            Evite erros e execute atividades rotineiras eficientemente com
            facilidade, sem interrupções.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            quae dolorem. Illo reiciendis minus sit ratione ducimus sunt cum ut
            consequatur maxime. Aperiam, consectetur laboriosam tenetur
            praesentium quae nostrum iusto.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            facilis cupiditate odio totam vitae autem voluptates sed animi quia.
          </Text>
          <Button
            bg={colorDefault}
            color='black'
            onClick={whatsappLink}
            _hover={{
              bg: `${colorDefault}`,
              transition: "transform 0.5s ease",
              transform: "scale(1.05)",
            }}>
            <FaWhatsapp style={{ fontSize: "18px", marginBottom: "3px" }} />
            Enviar mensagem agora
          </Button>
        </Flex>
      </Flex>
      <Flex alignItems='center' flexDirection='column' m='5% 0 2% 0'>
        <Text
          color={colorDefault}
          letterSpacing={3}
          fontWeight='semibold'
          fontSize='15px'>
          PASSO A PASSO
        </Text>
        <Text
          m='0.5% 0 1% 0'
          fontWeight='extrabold'
          fontSize='23px'
          whiteSpace={isMobile() ? "" : "nowrap"}
          textAlign='center'>
          Quais os passos para realizar uma
          <span style={{ marginLeft: "1%", color: `${colorDefault}` }}>
            automação?
          </span>
        </Text>
        <Flex
          justifyContent='center'
          gap='5'
          flexDirection={isMobile() ? "column" : "row"}
          m='0 5% 0 5%'>
          <Depoiments
            position={"1. "}
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorem unde consequuntur consequatur accusamus nostrum vitae.'
            isMobile={isMobile}
          />
          <Depoiments
            position={"2. "}
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorem unde consequuntur consequatur accusamus nostrum vitae.'
            isMobile={isMobile}
          />
          <Depoiments
            position={"3. "}
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dolorem unde consequuntur consequatur accusamus nostrum vitae.'
            isMobile={isMobile}
          />
        </Flex>
      </Flex>
      <Flex flexDirection='column' mb='1.5%' alignItems='center'>
        <Text fontWeight='light' fontSize='13px'>
          Developed by Gaiek da Costa
        </Text>
        <Button onClick={githubLink} variant='link'>
          <FaGithub style={{ fontSize: "23px", cursor: "pointer" }} />
        </Button>
      </Flex>
    </>
  );
}

export default App;
