import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
Chart.register(ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)



const AllChart = ({arr, border}) => {
    return (
        <Line data={{
            labels: [
                'NOV 15',
                'Dec 16',
                'Jan 17',
                'Feb 18',
                'Jun 19',
                'July 20',
            ],
            datasets: [{
                label: 'Line',
                data: arr,
                fill: false,
                borderColor: border,
                tension: 0
            }]
        }} />
    )
}

export default AllChart