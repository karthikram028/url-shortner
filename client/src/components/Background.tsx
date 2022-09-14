
import { Image } from "@chakra-ui/react";
import image from "./Images/image.jpg"


function Background() {


  return (
    <Image position="fixed" top="0" left="0" bottom="0" right="0" zIndex="1" src={image} alt="bg"/>);
}

export default Background;