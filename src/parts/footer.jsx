import { Button, Flex, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const githubLink = () => {
    window.open("https://github.com/gaiekdacosta", "_blank");
  };

  return (
    <Flex flexDirection="column" mb="1.5%" alignItems="center">
      <Text fontWeight="light" fontSize="13px">
        Developed by Gaiek da Costa
      </Text>
      <Button onClick={githubLink} variant="link">
        <FaGithub style={{ fontSize: "23px", cursor: "pointer" }} />
      </Button>
    </Flex>
  );
};

export default Footer;
