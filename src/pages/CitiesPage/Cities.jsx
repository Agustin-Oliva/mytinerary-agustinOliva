import { useState, useEffect } from "react"
import CardComponent from "../../components/cardComponent/cardComponent"
import './Cities.css'


function Cities(){

    let [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/api/cities')
        .then(res =>res.json())
        .then(data => setData(data.res))
        .catch(err => console.log(err))
    },[])

    console.log(data)

    return (
        <>
        <div>
        <h2 className="city-tittle">Cities</h2>
        <div className="cont-cities">
        {data.map(e=> <CardComponent name={e.name} currency={e.currency} image={e.image} Country={e.Country} population={e.population}/>)}
        </div>
       
        </div>
        
        
         
        </>
    )
}
export default Cities