import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
Chart.register(ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)



const RadiusChart = () => {
    return (
        <Line data={{
            labels: [
                'JUNE',
                'JULY',
                'AUGUST',
                'SEPTEMBER',
                'OCTOBER',
                'December'
            ],
            datasets: [{
                label: 'Line',
                data: [120, 200, 100, 200, 100, 200, 100],
                fill: true,
                borderColor: 'rgb(4,122,197)',
                tension: 1
            }]
        }} />
    )
}

export default RadiusChart