import React from 'react'
import CountryData from './CountryData';
import StateData from './StateData';
import Header from './Header'
import Symptoms from  './Symptoms';
import Prevention from './Prevention'
import Spread from './Spread';
const Home = () => {
    return (
        <>
            <Header/>
            <CountryData/>
            <StateData/>
            <Symptoms/>
            <Spread/>
            <Prevention/>
        </>
    )
}

export default Home
