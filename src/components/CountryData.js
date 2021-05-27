import {React ,useState,useEffect}from 'react'
import active from '../images/active.svg'
import confirmed from '../images/confirmed.svg'
import recovered from '../images/recovered.svg'
import death from '../images/death.svg'
import './CountryData.css';
import  Chart  from  './Chart';
const CountryData = () => {
const url =`https://api.covid19india.org/data.json`;
const[country,setCountry]=useState([]);
const[totalch,setTotalch]=useState([]);
const[confirmedch,setConfirmedch]=useState([]);
const[recoveredch,setRecoveredch]=useState([]);
const[deathch,setDeathch]=useState([]);
const countryData= async()=>{
     const response = await fetch(url);
     const resdata = await response.json();
     setCountry(resdata.statewise[0]);
     setTotalch(resdata.statewise[0].active);
     setConfirmedch(resdata.statewise[0].confirmed);
     setRecoveredch(resdata.statewise[0].recovered);
     setDeathch(resdata.statewise[0].deaths);
     console.log(resdata.statewise);

}
useEffect(()=>{
       countryData();
},[]);

    return (
        <>
          <section className="container-fluid py-5 bg-light" id="">
        <div className="container ">
          <h2 className=" text-center py-2">Covid-19 Cases In India </h2>
          <div className="row py-4">
             
                    <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={active} alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{country.active}</h4>
                    <p className="text-center">Active Cases</p>
                           </div>
                          </div>
                          <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={confirmed}  alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{country.confirmed}</h4>
                    <p className="text-center">Confirmed Cases</p>
                           </div>
                          </div>
                          <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={recovered}  alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{country.recovered}</h4>
                    <p className="text-center"> Recovered  Cases</p>
                           </div>
                          </div>
                          <div className="col-lg-3 col-md-9 col-sm-12 ">
                      <div className="card">
                      <figure >
                        <img src={death}  alt="covid-19"/>
                      </figure>
                    <h4 style={{fontSize:'3rem',textAlign: 'center'}} className="counter">{country.deaths}</h4>
                    <p className="text-center">Deaths Cases</p>
                           </div>
                          </div>
                  

              
                    
                     
                           
            </div>

                   </div>
          
    </section>  
    <Chart  totaldata={totalch} totalconfirmed={confirmedch} totarecovered={recoveredch} totatdeath={deathch}/>
        </>
    )
}

export default CountryData
