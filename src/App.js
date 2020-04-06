import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import BB from './Components/BB'

function App() {
    const [coronas, setCoronas] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => { setCoronas(res.data.Countries) })
            .catch((err) => { console.log(err) })
    })


    return (
        < div className='container'>
            <Navbar />
            <BB />

        </div >
    );
}

export default App;
