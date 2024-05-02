import { Img } from "@chakra-ui/react";
import { useState } from "react";
import me from "/my-photo.jpg";

const MyImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Img
      h='350px'
      borderRadius='full'
      src={isHovered ? me : me}
      border='3px solid'
      borderColor='#2FCCDB'
      cursor='pointer'
      alt='my-photo'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "transform 0.5s ease",
        transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    />
  );
};

export default MyImage;
