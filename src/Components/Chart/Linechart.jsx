import React from 'react'
import { Chart, ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Linechart = ({arr, w, h}) => {
    return (
        <Line data={
            {
                labels: [
                    'NOV 15',
                    'NOV 16',
                    'NOV 17',
                    'NOV 18',
                    'NOV 19',
                    'NOV 20',
                ],
                datasets: [{
                    label: 'Line',
                    data: arr,
                    fill: true,
                    borderColor: 'rgb(0,151,232)',
                    tension: 0.1
                }]
            }
        } width={'857.222px'} height={'240px'} />
    )
}

export default Linechart