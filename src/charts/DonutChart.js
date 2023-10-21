import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DonutChart = () => {
  const ac = [20, 30, 100, 300]
  const data = {
    labels: ['dadsa', 'adsas', 'asdsa', 'sadads'],
    datasets: [
      {
        label: 'Resources',
        data: ac,
        backgroundColor: ['#ED8936', 'pink', 'blue', 'darkblue'],
        borderColor: 'transparent',
        borderWidth: 1
      },
    ]
  }

  return (
    <Doughnut
      options={{
        plugins: {
          legend: {
            display: false
          }
        },
        radius: '100%',
        cutout: 95,
        spacing:3,  
        responsive: true,
        aspectRatio: 1.3 // This line makes the chart responsive
      }}
      data = {data}
    />
  )
}

export default DonutChart
