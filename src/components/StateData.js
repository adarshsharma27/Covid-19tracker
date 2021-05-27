import {React ,useState,useEffect}from 'react'
import './StateData.css';
const StateData = () => {
    const url =`https://api.covid19india.org/data.json`;
    const[country,setCountry]=useState([]);
    const countryData= async()=>{
         const response = await fetch(url);
         const resdata = await response.json();
         setCountry(resdata.statewise);
         console.log(resdata.statewise);
    
    }
    useEffect(()=>{
           countryData();
    },[]);



    return (
        <>
        <div class="container py-4">
        <h2 className=" text-center py-2">Covid-19 Cases In States  </h2>
          <div class="table-responsive ">
              <table class="table align-items-center">
                <thead class="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Active </th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Death</th>
                  </tr>
                </thead>
                <tbody>
                  {
           country.map((elem,index)=>{
               return(
                   <tr>
                <td>{elem.state}</td>
                <td>{elem.active}</td>
                <td>{elem.confirmed}</td>
                <td>{elem.recovered}</td>
                <td>{elem.deaths}</td>
                </tr>

               )
           })

                  }
                  
                    
                </tbody>
              </table>
            </div>  
            </div>
        </>
    )
}

export default StateData
