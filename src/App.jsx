import { Button, Flex, Img, Input, Text, Textarea } from "@chakra-ui/react";
import { FaRobot, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import background from '/bg.jpg';
import graphic from '/my-photo.jpg'
import Card from "./components/card";
import Depoiments from "./components/depoiments";
import Header from "./components/header";

function App() {

  const whatsappLink = () => {
    window.open('https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21', '_blank');
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
        backgroundRepeat='no-repeat'>
        <Flex flexDirection='column' w='55%' >
          <Text
            color='#2FCCDB'
            letterSpacing={3}
            fontWeight='semibold'
            fontSize='15px'>
            BEM-VINDO
          </Text>
          <Text
            w='70%'
            fontWeight='extrabold'
            fontSize='40px'
            flexDirection='column'
            lineHeight={1}>
            Aumente a produtividade das suas tarefas com a
            <Text color='#2FCCDB'>automatizações de atividades repetitivas</Text>
          </Text>
          <Text fontSize='18px'>
            Esqueça atividades repetitivas e
            relatórios que tiram <br /> o foco do seu negócio
          </Text>
        </Flex>
        <Flex
          w='30%'
          p='1%'
          borderRadius='2xl'
          bg='#050409'
          color='black'
          flexDirection='column'
          gap='1'>
          <Input
            type='text'
            bg='whitesmoke'
            color='black'
            placeholder="Nome" />
          <Input
            type='number'
            bg='whitesmoke'
            placeholder="Telefone" />
          <Input
            type='text'
            bg='whitesmoke'
            placeholder="Email" />
          <Textarea
            placeholder="Mensagem"
            resize='none'
            bg='whitesmoke'
          />
          <Button
            opacity='1'
            w='100%'
            mt='1.5%'
            bg='#2FCCDB'
            color='black'
            _hover={{
              bg: '#22def0',
              transition: 'transform 0.3s ease'
            }}>
            Enviar mensagem
          </Button>
        </Flex>
      </Flex>
      <Flex
        alignItems='center'
        flexDirection='column'
        m='3% 0 5% 0'
        fontWeight='semibold'>
        <Text
          color='#2FCCDB'
          letterSpacing={3}
          fontWeight='semibold'
          fontSize='15px'>
          SERVIÇOS
        </Text>
        <Flex mt='1.5%' gap='5'>
          <Card
            icon={<HiOutlineDocumentReport style={{ fontSize: '25px', color: '#2FCCDB' }} />}
            content={"Criação e envio de relatórios automatizados"} />
          <Card
            icon={<FaWhatsapp style={{ fontSize: '25px', color: '#2FCCDB' }} />}
            content={"Chatbot de atendimento e vendas para o Whastapp"} />
          <Card
            icon={<FaRobot style={{ fontSize: '25px', color: '#2FCCDB' }} />}
            content={"Automatização de processos manuais em sistemas"} />
        </Flex>
      </Flex>
      <Flex
        justifyContent='space-around'
        alignItems='center'
        m='5%'>
        <Img
          h='350px'
          borderRadius='full'
          src={graphic}
          cursor='pointer'
          alt="my-photo"
          _hover={{
            border: '2px solid',
            color: '#2FCCDB',
            transition: 'transform 0.5s ease',
            transform: 'scale(1.05)',
            transition: 'border 0.5s ease, transform 0.5s ease'
          }}
        />
        <Flex
          flexDirection='column'
          w='35%'
          gap='2'>
          <Text
            color='#2FCCDB'
            letterSpacing={3}
            fontWeight='semibold'
            fontSize='15px'>
            SOBRE MIM
          </Text>
          <Text
            fontSize='22px'
            lineHeight={1.1}
            fontWeight='semibold'>
            Evite erros e execute atividades rotineiras
            eficientemente com facilidade, sem interrupções.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quae dolorem.
            Illo reiciendis minus sit ratione ducimus sunt cum ut consequatur maxime.
            Aperiam, consectetur laboriosam tenetur praesentium quae nostrum iusto.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
            facilis cupiditate odio totam vitae autem voluptates sed animi quia.
          </Text>
          <Button
            bg='#2FCCDB'
            color='black'
            onClick={whatsappLink}
            _hover={{
              bg: '#22def0',
              transition: 'transform 0.5s ease'
            }}>
            <FaWhatsapp style={{ fontSize: '18px', marginBottom: '3px' }} />
            Entrar em contato agora
          </Button>
        </Flex>
      </Flex>
      <Flex
        alignItems='center'
        flexDirection='column'
        m='5% 0 5% 0'>
        <Text
          color='#2FCCDB'
          letterSpacing={3}
          fontWeight='semibold'
          fontSize='15px'>
          PASSO A PASSO
        </Text>
        <Text
          m='0.5% 0 1% 0'
          fontWeight='extrabold'
          fontSize='23px'
          whiteSpace='nowrap'>
          Quais os passos para fazer uma
          <Text ml='1%' color='#2FCCDB' as='span'>automação</Text>?
        </Text>
        <Flex>
          <Depoiments />
        </Flex>
      </Flex>
    </>
  )
}

export default App;
