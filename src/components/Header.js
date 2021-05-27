import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import header from '../images/emo.svg'

const Header = () => {
    return (
        <div>
            <section id="topheader">
    <div className="container h-100 w-100  mx-auto overflow-hidden" >
       
        <div className="row h-100 m-0 p-0 my-2 w-100  align-items-center">
        <div className="col-md-6 order-md-2  text-sm-center p-0" data-aos="fade-left" data-aos-delay="20"  data-aos-duration="1250">
            
            <img src={header} className="img-fluid" alt="header-img"/>
          </div>
          <div className="col-md-6 order-md-1 text-md-left  py-4 " data-aos="fade-right" data-aos-delay="20"  data-aos-duration="1250">
            <h4  className="font-weight-light">COVID-19 Live Tracker</h4>
            <div className="description py-3">
        <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>
             </div>
         <NavLink  to="/worldinfo"><button class=" btn btn-custom inverted" style={{backgroundColor:'#EB0065',textDecoration:'none',margin:'0'}}>Read More</button></NavLink>
          </div>
          
        </div>
      </div>



</section>

        </div>
    )
}

export default Header
