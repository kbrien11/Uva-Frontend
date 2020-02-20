import React, { useState,useEffect} from 'react';
import City from './Cities';
import Rating from './Rating';



function Example () {
  const[data, setData] = useState([]);
  const[dataTwo,setDataTwo] = useState([]);
  const [inputCity,setInputCity] = useState('');
  const [inputRating,setInputRating] = useState('')
  const[isError,setIsError] = useState(false)

  
  useEffect(() => {fetchData()}, [])


  // const output = dataTwo.map((rating) => {
  //   return <Rating data={rating}/> })

  const fetchData = async () => {
    setIsError(false);
    try{
    const response = await fetch(`http://127.0.0.1:5000/api/city/${inputCity}`);
    const data = await response.json();
    setData(data.restaurants);
  } catch(error) {
    console.log(error)
    setIsError(true)
  }
  };
  
  const results = data.map((place) => {
    return <City data={place}/> 
  })


  // const filterData = async () => {
  //   setIsError(false);
  //   try{
  //   const endpoint = await fetch(`http://localhost:5000/api/rating/${inputCity}/${inputRating}`);
  //   const datas = await endpoint.json()
  //   setDataTwo(datas.restaurants);
  // } catch(error) {
  //   setIsError(true)
  // }
  // };

 
  return (
    <div>
    <h1>Here are our cities</h1>
    
    <input type="text" id = "name" placeholder="City" onChange={e => setInputCity(e.target.value)} />
    <button onClick={e => fetchData()}> Submit </button>
    {results}
    {/* <input type="text" id = "name" placeholder="Rating" onChange={e => setInputRating(e.target.value)} />
    <button onClick={e => filterData()}> Filter </button>
    {output} */}

    {/* <input type="text" id = "name" placeholder="Filter Rating" onChange={e => setInputRating(e.target.value)} />
    <button onClick={e => filterData()}> Submit </button> */}
    
    
  </div>
);
}

export default Example;