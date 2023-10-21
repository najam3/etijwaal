import { Box, Text, useMediaQuery } from "@chakra-ui/react";

const Footer = () => {
  const media = useMediaQuery("(min-width: 768px) and (max-width: 1024px)"
  ) 
  
    return(
       <Box width={'100%'} position={{ base: '', sm: '', md: '', lg:'' }} shadow='md' bottom={0} bg={'#fff'} py={6}>
        <Text color="gray" textAlign="center">&copy; ETijwaal copyrights reserved</Text>
       </Box>
    )
}

export default Footer;