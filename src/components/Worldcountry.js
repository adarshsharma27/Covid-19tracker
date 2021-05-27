import {React ,useState,useEffect}from 'react'
import './StateData.css';
const Worldcountry= () => {
    const url =`https://disease.sh/v3/covid-19/countries`;
    const[country,setCountry]=useState([]);
    const countryData= async()=>{
         const response = await fetch(url);
         const resdata = await response.json();
         setCountry(resdata);
         console.log(resdata);
    
    }
    useEffect(()=>{
           countryData();
    },[]);



    return (
        <>
        <div class="container py-4">
        <h2 className=" text-center py-2">Covid-19 Cases In Countries  </h2>
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
                <td>{elem.country}</td>
                <td>{elem.active}</td>
                <td>{elem.cases}</td>
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

export default Worldcountry
