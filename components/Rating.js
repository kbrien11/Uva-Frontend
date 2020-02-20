import React from 'react';
import {Box,Text,Card,Heading,flexWrap,Flex} from 'rebass';


const Rating = (props) => {
 return (
    <Flex>
   <Box sx ={{justifyContent:'center',
       textAlign:'center'}}> 
   <Card marginLeft={3} width={400} textAlign='Center' backgroundColor='green' p='5' color='white' p={3} marginBottom={3}>
   <Heading> Restaurant: {props.data[1]}</Heading> 
   <Text> Id: {props.data[0]}</Text>
   <Text> City: {props.data[2]}</Text>
   <Text> Type: {props.data[3]}</Text>
   <Text> Ranking: {props.data[4]}</Text>
   <Text> Rating: {props.data[5]}</Text>
   <Text> Price: {props.data[6]}</Text>
   <Text> Total_Reviews: {props.data[7]}</Text>
   <Text> Reviews: {props.data[8]}</Text> 
   </Card>  
   </Box>
   </Flex>
) ;
};

export default Rating;