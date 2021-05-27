import {React,useState} from 'react'
import './Cards.css';
import handshake from '../images/handshake.svg'
import covernm from '../images/covernm.svg'
import throat from '../images/throat.svg'
const Spread = () => {
const[spread, setSpread]= useState([
    {    id:0,
        image:handshake,
        heading:"Person-to-person spread",
        description:"The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another."
    },
    {    id:1,
        image:covernm,
        heading:"Person coughs or sneezes",
        description:"The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another."
    },
    {    id:2,
        image:throat,
        heading:"Sore Throat",
        description:"A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing."
    }

]);


    return (
        <>
            <div className="container-fluid " id="spread">

<section className="container py-4">

        <h2 className=" text-center py-2">Spread</h2>
  <div className="row">
   
   {spread.map((element)=>{
     return (
         <div className="col-lg-4 col-md-6 col-sm-12">
     <div className="card-service">
     <img src= {element.image} alt="covid-19" className="img-border"/>
      <main>
      <h2>{element.heading}</h2>
      <p>{element.description}</p>
   
      </main>
  
  </div>
    </div>
     )})}
     </div>
     </section>
     </div>
        </>
    )
}

export default Spread
