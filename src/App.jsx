import { Button, Flex, Text } from "@chakra-ui/react";
import codeImage from './assets/7ffe3f1a-464e-43d8-9f9c-e34c6508b7f0.jpg'
import { FaRobot, FaWhatsapp } from "react-icons/fa";
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
          flexDirection='column'>
            <video 
              src=""
              controls
            />
            <Button
              opacity='1'
              w='100%'
              mt='3%'
              bg='#2FCCDB'
              _hover={{ 
                transform:'scale(1.1)',
                transition: 'transform 0.3s ease'
              }}>
              <FaWhatsapp style={{ fontSize:'22px' }} /> 
              Enviar mensagem
            </Button>
        </Flex>
      </Flex>
      <Flex 
        justifyContent='center' 
        m='2% 0 5% 0'  
        gap='3.5'
        fontWeight='semibold'>
        <Card 
          icon={<FaRobot style={{ fontSize:'25px', color:'#2FCCDB' }} />}
          content={"Especialista em automação de tarefas"} />
        <Card
          icon={<FaRobot style={{ fontSize:'25px', color:'#2FCCDB' }} />} 
          content={"Especialista em automação de tarefas"} />
        <Card
          icon={<FaRobot style={{ fontSize:'25px', color:'#2FCCDB' }} />} 
          content={"Especialista em automação de tarefas"} />
      </Flex>
    </>
  )
}

export default App;
