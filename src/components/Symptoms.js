import {React,useState} from 'react'
import fever from '../images/fever.svg'
import cough from '../images/cough.svg'
import throat from '../images/throat.svg'
import './Cards.css';
const Symptoms = () => {
const[symptoms, setSymptoms]= useState([
    {    id:0,
        image: fever,
        heading:"Fever",
        description:"High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected."
    },
    {    id:1,
        image: cough,
        heading:"Dry cough",
        description:"Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)."
    },
    {    id:2,
        image:throat,
        heading:"Sore Throat",
        description:"A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing."
    }

]);


    return (
        <>
            <div className="container-fluid " id="service">

<section className="container py-4" >

        <h2 className=" text-center py-2">Symptoms</h2>
  <div className="row">
   
   {symptoms.map((element)=>{
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

export default Symptoms
