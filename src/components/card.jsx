import { Flex, Text } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Card = ({ icon, content }) => {
    return (
        <>
            <Flex
                border='2px'
                borderColor='#2FCCDB'
                p='3% 1% 3% 1%'
                w='350px'
                maxW='350px'
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
                <Text
                    textAlign='center'
                    fontSize='15px'
                    mt='1%'>
                    {content}
                </Text>
            </Flex>
        </>
    );
}

export default Card;
