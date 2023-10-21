import React from 'react'
import { Line } from 'react-chartjs-2'


const AreaChart = () => {
    
     const data = {
        labels: ["year1", "year2", "year3"],
        data: [
            {
                label: 'Acquisition by year',
                data: [1000, 2000, 3000],
                backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)"],
                 borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }
        ]
     }


  return (
      <Line 
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020"
          },
          legend: {
            display: false
          }
        }
      }}
      />
  )
}

export default AreaChart