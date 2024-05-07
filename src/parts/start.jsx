import { Flex, Text } from "@chakra-ui/react";
import Form from "../components/form";
import background from "/bg.jpg";

const Start = ({ isMobile, colorDefault }) => {

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            h="100vh"
            backgroundImage={background}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            flexDirection={isMobile && "column"}
        >
            <Flex
                flexDirection="column"
                w={!isMobile && "55%"}
                ml={isMobile && "5%"}
            >
                <Text
                    color={colorDefault}
                    letterSpacing={3}
                    fontWeight="semibold"
                    fontSize="19px"
                >
                BEM-VINDO
                </Text>
                <Text
                    w={isMobile ? "90%" : "70%"}
                    fontWeight="extrabold"
                    fontSize={isMobile ? "25px" : "40px"}
                    flexDirection="column"
                    lineHeight={1}
                >
                Aumente a produtividade das suas tarefas com as{" "}
                <span style={{ color: colorDefault }}>
                    automatizações de atividades repetitivas
                </span>
                </Text>
                <Text fontSize={isMobile ? "12.5px" : "18px"} lineHeight={1}>
                Esqueça atividades repetitivas e relatórios que tiram <br /> o foco
                do seu negócio
                </Text>
            </Flex>
            <Form isMobile={isMobile} />
        </Flex>
    );
};

export default Start;
