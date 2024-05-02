import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Depoiments = ({ content, position }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
    <Flex
        border='2px solid'
        borderColor='#2FCCDB'
        cursor='pointer'
        borderRadius='2xl'
        p='1%'
        w='28%'
        maxW='28%'
        gap='1'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
            boxShadow: isHovered ? '0px 0px 10px 3px rgba(47, 204, 219, 0.7)' : 'none', 
            transition: 'box-shadow 0.3s' 
            }}>
        <Text fontWeight='bold'>{position}</Text>
        <Text>{content}</Text>
    </Flex>
    );
}

export default Depoiments;