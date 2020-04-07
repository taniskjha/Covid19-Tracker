import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import BBitem from './BBitem'

function BB() {
    const [coronas, setCoronas] = useState([])


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://api.covid19api.com/summary');
            setCoronas(res.data.Countries)
        }
        getData();
    }, [])

    return (
        <div >
            <div>
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4" id="table-card">

                        <table className="table table-striped table-bordered table-hover" id="country-detail">
                            <thead className="thead bg-warning">
                                <tr>
                                    <th scope="col">Countries</th>
                                    <th scope="col">Confirmed Cases</th>
                                    <th scope="col">Total Death</th>
                                    <th scope="col">Total Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coronas.map(corona => (
                                    <BBitem key={corona.CountryCode} corona={corona} />

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BB
