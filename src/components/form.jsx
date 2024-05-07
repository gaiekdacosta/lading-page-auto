import {
  Button,
  Flex,
  FormLabel,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoMdCheckmarkCircle, IoMdSend } from "react-icons/io";

const Form = ({ isMobile }) => {
  const [send, setSend] = useState(false);

  const sendForm = () => {
    setSend(!send);
  };

  return (
    <>
      <Flex
        w={isMobile ? "90%" : "35%"}
        mt={isMobile && "5%"}
        h="400px"
        maxH="400px"
        p={isMobile ? "2%" : "0.8%"}
        borderRadius="md"
        color="white"
        flexDirection="column"
        gap="1"
        boxShadow="2xl"
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          opacity: 0.9,
        }}
      >
        {!send ? (
          <>
            <Flex gap="1" alignItems="center">
              <FaMessage
                style={{ fontSize: "22px", marginTop: "5px", color: "white" }}
              />
              <Text color="#2FCCDB" fontWeight="semibold" fontSize="19px">
                Entrar em contato
              </Text>
            </Flex>
            <FormLabel mb="-1">Nome</FormLabel>
            <Input type="text" border="none" />
            <FormLabel mb="-1">Telefone</FormLabel>
            <Input type="number" border="none" />
            <FormLabel mb="-1">Email</FormLabel>
            <Input type="text" border="none" />
            <FormLabel mb="-1">Mensagem</FormLabel>
            <Textarea resize="none" border="none" />
            <Button
              opacity="1"
              w="100%"
              mt="1.5%"
              h="50px"
              bg="#2FCCDB"
              color="black"
              _hover={{
                bg: "#22def0",
                transition: "transform 0.5s ease",
              }}
              onClick={sendForm}
            >
              <IoMdSend style={{ fontSize: "18px", marginBottom: "3px" }} />
              <p>Enviar mensagem</p>
            </Button>
          </>
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mt="25%"
          >
            <IoMdCheckmarkCircle
              style={{
                color: "#48BB78",
                fontSize: "50px",
              }}
            />
            <Text fontWeight="semibold" fontSize="20.5px" textAlign="center">
              Mensagem enviada!
            </Text>
            <Text fontSize="12.5px">
              Obrigado! Entraremos em contato em breve.
            </Text>
            <Link
              color="blue.400"
              fontSize="14px"
              onClick={() => setSend(!send)}
            >
              enviar outra mensagem
            </Link>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Form;
