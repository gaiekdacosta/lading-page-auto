import { Img } from "@chakra-ui/react";
import { useState } from "react";
import me from "/pc-photo.jpg";

const MyImage = ({ isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Img
      h={isMobile ? "300px" : "400px"}
      w='400px'
      borderRadius='full'
      src={me}
      border='3px solid'
      borderColor='#2FCCDB'
      cursor='pointer'
      alt='my-photo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0px 0px 10px 3px rgba(47, 204, 219, 0.7)"
          : "none",
        transition: "box-shadow 0.3s",
      }}
    />
  );
};

export default MyImage;
