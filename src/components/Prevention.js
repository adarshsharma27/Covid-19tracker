import {React,useState} from 'react'
import handwash from '../images/handwash.svg'
import stayhome from '../images/stayhome.svg'
import touch from '../images/touch.svg'
import covermn from '../images/covermn.svg'
const Prevention = () => {
    const[prevention, setPrevention]= useState([
        {    id:0,
            image:handwash,
            heading:"Wash your hands",
            description:"Handwashing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy."
        },
        {    id:1,
            image:stayhome,
            heading:"Stay home",
            description:"Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care."
        },
        {    id:2,
            image:touch,
            heading:"Avoid touching your face.",
            description:"To help prevent infections, keep your hands away from your eyes, nose, and mouth. Why? Touching the mucous membranes on your face."
        },
        {    id:3,
            image:covermn,
            heading:"Cover your face",
            description:"Cover your mouth and nose with a tissue when you cough or sneeze. Put your used tissue in a waste basket. If you don't have a tissue, cough or sneeze into your."
        }
    
    ]);
    
    return (
        <>
               <div className="container-fluid  px-4" id="service">

<section className=" py-4" >

        <h2 className=" text-center py-2">Prevention</h2>
  <div className="row">
   
   {prevention.map((element)=>{
     return (
         <div className="col-lg-3 col-md-6 col-sm-12">
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

export default Prevention
