import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ icon, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      border='2px'
      borderColor='#2FCCDB'
      p='3%'
      w='350px'
      maxW='350px'
      alignItems='center'
      flexDirection='column'
      borderRadius='md'
      lineHeight={1}
      cursor='pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0px 0px 10px 3px rgba(47, 204, 219, 0.7)"
          : "none",
        transition: "box-shadow 0.3s",
      }}>
      <Flex
        borderRadius='full'
        border='3px solid'
        borderColor='#2FCCDB'
        color='#2FCCDB'
        fontSize='25px'
        p='3%'>
        {icon}
      </Flex>
      <Text textAlign='center' fontSize='15px' mt='1%'>
        {content}
      </Text>
    </Flex>
  );
};

export default Card;
