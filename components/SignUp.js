import React,{useState} from 'react';
import {Box,Text,Card,Heading,Button} from 'rebass';


const Signup = () =>{

const[inputEmail,setInputEmail] = useState('')
const[inputPassword,setInputPassword] = useState('')
const[inputFirst_name,setFirstName] = useState('')
const[inputLast_name,setLastName] = useState('')


const sendData = async() =>{
    const endpoint = "http://localhost:5000/create";
    const data = {
      Email:inputEmail,
      Password:inputPassword,
      First_name:inputFirst_name,
      Last_name:inputLast_name
    };
    const configs = {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, configs);
    const res = await response.json();
    console.log(res)
  }


return (
 <Box>
    <Card p ={3} marginTop = {3} marginLeft = {8} backgroundColor = "darkblue" width = {600}>
      <Heading color = "gold"> Sign up Here</Heading>
        <input backgroundColor = "lightgreen" color = "gold" justifyContent="center" width={1/2} marginLeft={6} marginTop={3} type="text" placeholder="Email" onChange={e => setInputEmail(e.target.value)} /><br/>
        <input backgroundColor = "lightgreen" color = "gold" width={1/2} marginLeft={6} type="text" placeholder="Password" onChange={e => setInputPassword(e.target.value)} /><br/>
        <input backgroundColor = "lightgreen" color = "gold" width={1/2} marginLeft={6} type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} /><br/>
        <input backgroundColor = "lightgreen" color = "gold" width={1/2} marginLeft={6} type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} /><br/>
        <Button marginBottom={2} backgroundColor="black" color="gold" onClick = {e=>sendData()}> Sign Up</Button>
    </Card>
 </Box>
)
}
export default Signup