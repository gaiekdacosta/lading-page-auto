import { Flex, Text } from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";

const Depoiments = () => {
    return ( 
        <Flex 
            border='2px solid'
            borderColor='#2FCCDB'
            borderRadius='2xl'
            p='1%'
            flexDirection='column'
            fontSize='12px'
            w='35%'>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolorem unde consequuntur consequatur accusamus nostrum vitae.
            </Text>
            <Flex alignItems='center'>
                <FaCircleUser style={{ fontSize:'30px' }} />
                <Flex ml='3%' flexDirection='column'>
                    <Text 
                        whiteSpace='nowrap'
                        fontWeight='semibold'
                        color='#2FCCDB' >
                        Fulano de tal
                    </Text>
                    <Text>
                        CEO
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Depoiments;