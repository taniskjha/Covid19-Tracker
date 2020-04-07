import React, { Fragment } from 'react'


function BBitem({ corona }) {
    return (
        <Fragment>
            <tr>
                <td>
                    <p style={styles.country}>{corona.Country}</p>
                </td>
                <td>
                    <p style={styles.total} >{corona.TotalConfirmed}</p>
                </td>
                <td>
                    <p style={styles.death} >{corona.TotalDeaths}</p>
                </td>
                <td>
                    <p style={styles.recovered} >{corona.TotalRecovered}</p>

                </td>
            </tr>
        </Fragment>
    )
}

const styles = {
    country: { color: 'black' },
    total: { color: 'black' },
    death: { color: 'red' },
    recovered: { color: 'blue' }
}


export default BBitem
