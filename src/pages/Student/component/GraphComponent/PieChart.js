import React from 'react';
import {Doughnut} from 'react-chartjs-2';



const PieChart = ({correct, incorrect, left}) => {
  const state = {
    labels: ["Incorrect", "Correct", "Not Done"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#FF0000", "#008000", "#2FDE00"],
        hoverBackgroundColor: ["#8B0000", "#006400", "#175000"],
        data: [incorrect, correct, left],
      },
    ],
    options: {
      legend: {
        labels: {
          fontSize: 20,
        },
      },
    },
  };
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Question solved every month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right',
              fontSize: 10
            }
          }}
        />
      </div>
    );
  
}

export default PieChart
