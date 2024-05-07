import { Flex, Text } from "@chakra-ui/react";
import Depoiments from "../components/depoiments";

const StepByStep = ({ isMobile, colorDefault }) => {

  return (
    <Flex alignItems="center" flexDirection="column" m="5% 0 2% 0">
      <Text
        color={colorDefault}
        letterSpacing={3}
        fontWeight="semibold"
        fontSize="15px"
      >
        PASSO A PASSO
      </Text>
      <Text
        m="0.5% 0 1% 0"
        fontWeight="extrabold"
        fontSize="23px"
        whiteSpace={isMobile ? "" : "nowrap"}
        textAlign="center"
      >
        Quais os passos para realizar uma
        <span style={{ marginLeft: "1%", color: colorDefault }}>
          {" "}
          automação?
        </span>
      </Text>
      <Flex
        justifyContent="center"
        gap="5"
        flexDirection={isMobile ? "column" : "row"}
        m="0 5% 0 5%"
      >
        <Depoiments
          position="1. "
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem unde consequuntur consequatur accusamus nostrum vitae."
          isMobile={isMobile}
        />
        <Depoiments
          position="2. "
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem unde consequuntur consequatur accusamus nostrum vitae."
          isMobile={isMobile}
        />
        <Depoiments
          position="3. "
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem unde consequuntur consequatur accusamus nostrum vitae."
          isMobile={isMobile}
        />
      </Flex>
    </Flex>
  );
};

export default StepByStep;
