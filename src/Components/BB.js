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
            <div>
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4" id="table-card">

                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>



                        <table className="table table-striped table-bordered table-hover" id="country-detail">
                            <thead className="thead bg-warning">
                                <tr>
                                    <th scope="col">Countries</th>
                                    <th scope="col">Confirmed Cases</th>
                                    <th scope="col">Total Death</th>
                                    <th scope="col">Total Recovered</th>
                                </tr>
                            </thead>

                            <tr>

                                <td>
                                    {coronas.map(corona => <p key={corona.CountryCode}>{corona.Country} </p>)}
                                </td>



                                <td> {coronas.map(corona => <p key={corona.CountryCode}>{corona.TotalConfirmed}</p>)}
                                </td>


                                <td> {coronas.map(corona => <p key={corona.CountryCode}>{corona.TotalDeaths}</p>)}
                                </td>

                                <td>   {coronas.map(corona => <p key={corona.CountryCode}>{corona.TotalRecovered}</p>)}
                                </td>


                            </tr>

                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BB
