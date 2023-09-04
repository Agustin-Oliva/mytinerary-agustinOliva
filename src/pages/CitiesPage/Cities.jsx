import { useState, useEffect } from "react"
import CardComponent from "../../components/cardComponent/cardComponent"
import { getAllCities } from "../../services/eventsServices"
import Form from 'react-bootstrap/Form';
import './Cities.css'


function Cities(){

    let [data, setData] = useState([])
    let [filtred, setFiltred] = useState('')


    useEffect(()=>{
       getAllCities()
       .then(setData)
       .catch(err=>console.log(err))
    },[])

   const handleInput = (e)=>{
    setFiltred(e.target.value)
    console.log(e.target.value)
   }
   
   let results = []
   if(!filtred){
    results = data;
   }else{
    results = data.filter(citie => 
    citie.name.toLowerCase().startsWith(filtred.toLowerCase()))
   }
      
    return (
        <>
        <div>
        <h2 className="city-tittle">Cities</h2>
        <div className="container">
        <Form.Control value={filtred} onInput={handleInput}  className='text-center' type="text" placeholder="Find Your Next Destination" />
        </div>
       
        <div className="cont-cities">
         {results.map(e=> <CardComponent name={e.name} currency={e.currency} image={e.image} Country={e.Country} population={e.population} key={e.name}/>)} 
        </div>
       
        </div>
        
        
         
        </>
    )
}
export default Cities