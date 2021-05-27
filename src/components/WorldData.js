import {React ,useState,useEffect}from 'react'
import active from '../images/active.svg'
import confirmed from '../images/confirmed.svg'
import recovered from '../images/recovered.svg'
import death from '../images/death.svg'
import './CountryData.css';
import Worldcountry from './Worldcountry';
import Worldchart from './Worldchart';
const WorldData = () => {
const url =`https://disease.sh/v3/covid-19/all`;
const[world,setWorld]=useState([]);
const[wtotalch,setTotalwch]=useState([]);
const[wconfirmedch,setConfirmedwch]=useState([]);
const[wrecoveredch,setRecoveredwch]=useState([]);
const[wdeathch,setDeathwch]=useState([]);

const worldData= async()=>{
     const response = await fetch(url);
     const resdata = await response.json();
     setWorld(resdata);
     console.log(resdata);
     setTotalwch(resdata.active);
     setConfirmedwch(resdata.cases); 
     setRecoveredwch(resdata.recovered);
     setDeathwch(resdata.deaths);

}
useEffect(()=>{
       worldData();
},[]);

    return (
        <>
          <section className="container-fluid py-5 bg-light" id="">
        <div className="container ">
          <h2 className=" text-center py-2">Covid-19 Cases In World </h2>
          <div className="row py-4">
             
                    <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={active} alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{world.active}</h4>
                    <p className="text-center">Active Cases</p>
                           </div>
                          </div>
                          <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={confirmed} alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{world.cases}</h4>
                    <p className="text-center">Confirmed Cases</p>
                           </div>
                          </div>
                          <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={recovered} alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{world.recovered}</h4>
                    <p className="text-center"> Recovered Cases</p>
                           </div>
                          </div>
                          <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={death} alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{world.deaths}</h4>
                    <p className="text-center">Deaths Cases</p>
                           </div>
                          </div>
                  

              
                    
                     
                           
            </div>

                   </div>
          
    </section>  
    <Worldcountry/>
    <Worldchart  totaldata={wtotalch} totalconfirmed={wconfirmedch} totarecovered={wrecoveredch} totatdeath={wdeathch}/>
    </>
        
    )
}

export default WorldData
