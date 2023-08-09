import "./Carousel.css"
import React from "react"
import BtnResponsive from "../BtnCarouselResponsive/BtnCarouselResponsive"
import { useState } from "react"

function Carousel(){
    const destinations = [ [
        {   img:'../../../public/carousel-img/alemania.jpg',
            country:"Germany"
        },
        {   img:'../../../public/carousel-img/Beijing.jpg',
            country:"China"
        },
        {   img:'../../../public/carousel-img/Brazil.jpg',
            country:"Brazil"
        },
        {   img:'../../../public/carousel-img/buenosAires.jpeg',
            country:"Argentina"
        }
    ], 
      [
        {   img:'../../../public/carousel-img/egipto.jpg',
            country:"Egipto"
        },
        {   img:'../../../public/carousel-img/england.jpg',
            country:"England"
        },
        {   img:'../../../public/carousel-img/mexico.jpg',
            country:"Mexico"
        },
        {   img:'../../../public/carousel-img/newyork.jpg',
            country:"USA"
        }
    ],
      [
        {   img:'../../../public/carousel-img/paris.jpg',
            country:"France"
        },
        {   img:'../../../public/carousel-img/rusia.jpg',
            country:"Rusia"
        },
        {   img:'../../../public/carousel-img/tokyo.jpg',
            country:"Japon"
        },
        {   img:'../../../public/carousel-img/uruguay.jpg',
            country:"Uruguay"
        }
       ] 
        
    ]
    let [position, setPosition] = useState(0)

    const handleClickBack = ()=> {
        if(position == 0){
            setPosition(position = 2)
        } else{
            setPosition(position - 1)
        }
       
    } 
    const handleClickNext = ()=>{
        if(position == 2){
            setPosition(position = 0)
        } else{
            setPosition(position + 1)
        }
    }
    return(
        <>
        {<section className='carousel-container'>
            <BtnResponsive func = {handleClickBack} funcDos = {handleClickNext}/>
         <button className="carousel-btn btn-left" onClick={handleClickBack}>{'<'}</button>
         
            <div className="img-cont">
             <div className="carousel-img cont-bottom">
             {destinations[position].map(pos =><img className="country-carousel" src={pos.img} alt="country" key={pos.country}/>    
            )}
             </div>
            </div>
         <button className="carousel-btn btn-right" onClick={handleClickNext}>{'>'}</button>
         <BtnResponsive func = {handleClickBack} funcDos = {handleClickNext}/>
        </section> }
        
        </>
    )
}
export default Carousel


{/*  <div className="carousel-img cont-top">
     {<img src={destinations[position][0].img} alt="country" />}
     {<img src={destinations[position][1].img} alt="country" />}
 </div>

 <div className="carousel-img cont-bottom">
     {<img src={destinations[position][2].img} alt="country" />}
     {<img src={destinations[position][3].img} alt="country" />}
 </div> */}