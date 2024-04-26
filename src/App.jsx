import { Box, Button, Flex, Img, Input, Text, Textarea } from "@chakra-ui/react";
import codeImage from './assets/background.jpg';
import { FaRobot, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Card from "./components/card";

function App() {
  return (
    <>
      <Flex 
        justifyContent='center' 
        alignItems='center' 
        h='100vh'
        backgroundImage={codeImage}
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
              fontWeight='semibold' 
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
              bg='whitesmoke'
            />
            <Button
              opacity='1'
              w='100%'
              mt='1.5%'
              bg='#2FCCDB'
              color='black'
              _hover={{ 
                bg:'#22def0',
                transition: 'transform 0.3s ease'
              }}>
              Enviar mensagem
            </Button>
        </Flex>
      </Flex>
      <Flex 
        justifyContent='center' 
        m='5% 0 5% 0'  
        gap='3.5'
        fontWeight='semibold'>
        <Card 
          icon={<HiOutlineDocumentReport style={{ fontSize:'25px', color:'#2FCCDB' }} />}
          content={"Criação e envio de relatórios automatizados"} />
        <Card
          icon={<FaWhatsapp style={{ fontSize:'25px', color:'#2FCCDB' }} />} 
          content={"Chatbot de atendimento para o Whastapp"} />
        <Card
          icon={<FaRobot style={{ fontSize:'25px', color:'#2FCCDB' }} />} 
          content={"Especialista em automação de tarefas"} />
      </Flex>
      <Flex 
        justifyContent='space-around'
        mt='5% 0 5% 0'>
        <Img 
          h='300px'
          src={'reportImage'} />
        <Flex 
          flexDirection='column' 
          w='35%' 
          gap='2'>
          <Text
            color='#2FCCDB' 
            letterSpacing={3} 
            fontWeight='semibold'
            fontSize='15px'>
            VANTAGENS
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
            w='50%'
            _hover={{ 
              bg:'#22def0',
              transition: 'transform 0.3s ease'
            }}>
            Entrar em contato agora
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default App;
