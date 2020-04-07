import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Navbar from './Components/Navbar';
import BB from './Components/BB'

function App() {

    const [coronas, setCoronas] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://api.covid19api.com/summary');
            setCoronas(res.data.Countries)
        }
        getData();
    }, [])

    return (
        < div className='container'>
            <Navbar />
            <BB coronas={coronas} />

        </div >
    );
}

export default App;
