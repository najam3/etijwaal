import { Box, Flex, Stack, Image, Heading } from "@chakra-ui/react";
import BarChart from "../charts/BarChart";
import DonutChart from "../charts/DonutChart";




export default function Dashboard() {


    return (
      <Box w={'100%'} px={8} as="section">
         <Flex flexWrap='wrap' direction="row" gap={{base:5, sm: 5, lg: 10}}>
           <BarChart />
          <Box maxW={'100%'} borderRadius={10}  p={4} flex="1" my={{ base: 4, sm: 4, lg:10 }} shadow="xl">
          <Box pb={4}  mb={12} borderBottom='1px solid lightgray'>
          <Heading fontSize='22px'>Trafic sources</Heading>
           </Box> 
           <DonutChart />
          </Box>
         </Flex>
      </Box>
    )
}