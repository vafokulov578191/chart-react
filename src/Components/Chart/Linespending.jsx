import React from 'react'
import { Chart, ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Linespending = ({arr}) => {
    return (
        <Line data={{
            labels: [
                '2',
                '4',
                '6',
                '8',
                '10',
                '12',
                '14',
                '16'
            ],
            datasets: [{
                label: 'Spending',
                data: arr,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }} />
    )
}

export default Linespending