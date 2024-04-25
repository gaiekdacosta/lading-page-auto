import { Flex, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Card = ({ icon, content }) => {
    return ( 
        <>
            <Flex
                border='2px'
                borderColor='#2FCCDB'
                p='3% 1% 3% 1%'
                alignItems='center' 
                flexDirection='column'
                borderRadius='md'>
                <Flex 
                    borderRadius='full' 
                    border='3px solid' 
                    borderColor='#2FCCDB'
                    p='3%'>
                    {icon}
                </Flex>
                <Text mt='1%'>{content}</Text>
            </Flex>
        </>
    );
}

export default Card;
