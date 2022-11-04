import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
    CChart,
    CChartBar,
    CChartDoughnut,
    CChartLine,
    CChartPie,
    CChartPolarArea,
    CChartRadar,
} from '@coreui/react-chartjs'

const AdminChart = () => {
    const random = () => Math.round(Math.random() * 100)

    return (

        <div>
            <CChart
                type="bar"
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'GitHub Commits',
                            backgroundColor: '#f87979',
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                    ],
                }}
                labels="months"
            /></div>
    )
}

export default AdminChart
