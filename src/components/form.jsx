import {
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaMessage } from "react-icons/fa6";

const Form = () => {
  return (
    <>
      <Flex
        w='35%'
        p='1%'
        borderRadius='2xl'
        color='white'
        flexDirection='column'
        gap='1'
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          opacity: 0.9,
        }}>
        <Flex gap='1' alignItems='center'>
          <FaMessage
            style={{ fontSize: "22px", marginTop: "5px", color: "white" }}
          />
          <Text color='#2FCCDB' fontWeight='semibold' fontSize='19px'>
            Entrar em contato
          </Text>
        </Flex>
        <FormLabel mb='-1'>Nome</FormLabel>
        <Input type='text' border='none' />
        <FormLabel mb='-1'>Telefone</FormLabel>
        <Input type='number' border='none' />
        <FormLabel mb='-1'>Email</FormLabel>
        <Input type='text' border='none' />
        <FormLabel mb='-1'>Mensagem</FormLabel>
        <Textarea resize='none' border='none' />
        <Button
          opacity='1'
          w='100%'
          mt='1.5%'
          bg='#2FCCDB'
          color='black'
          _hover={{
            bg: "#22def0",
            transition: "transform 0.3s ease",
          }}>
          Enviar mensagem
        </Button>
      </Flex>
    </>
  );
};

export default Form;
