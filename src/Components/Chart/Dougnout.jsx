import React from 'react'
import { Chart, ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)


const Dougnout = ({arr}) => {
  return (
    <Doughnut data={{
        datasets: [{
          label: 'My First Dataset',
          data: arr,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0, 128, 0)'
          ],
          hoverOffset: 3
        }],
      }} />
  )
}

export default Dougnout