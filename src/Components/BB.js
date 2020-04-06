import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import App from '../App'
import PropTypes from 'prop-types'

function BB() {
    const [coronas, setCoronas] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
            .then(res => { setCoronas(res.data.Countries) })
            .catch((err) => { console.log(err) })
    })
    return (
        <div >
            <table class="table table-striped table-bordered table-hover" id="country-detail">
                <thead class="thead bg-warning">
                    <tr>

                        <th scope="col">Countries</th>
                        <th scope="col">Confirmed Cases</th>
                        <th scope="col">Total Death</th>
                        <th scope="col">Total Recovered</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    <tr >

                        <td>
                            {coronas.map(corona => <strong> <p key={corona.CountryCode}>{corona.Country} </p> </strong>)}
                        </td>

                        <td> {coronas.map(corona => <p key={corona.CountryCode}>{corona.TotalConfirmed}</p>)}
                        </td>

                        <td> {coronas.map(corona => <p key={corona.CountryCode}>{corona.TotalDeaths}</p>)}
                        </td>

                        <td>   {coronas.map(corona => <p key={corona.CountryCode}>{corona.TotalRecovered}</p>)}
                        </td>
                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default BB
