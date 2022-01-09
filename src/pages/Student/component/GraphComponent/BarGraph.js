import React from 'react';
import { Bar } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Correct', 'Incorrect', 'Unattempted'];



export function BarGraph({correct, incorrect, left}) {
    const data = {
        labels,
        datasets: [
          {
            label: 'Question report',
            data: [correct, incorrect, left],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          // {
          //   label: 'Dataset 2',
          //   data: [3,4,5,6,7,8, 9],
          //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
          // },
        ],
      };
  return <Bar options={options} data={data} />;
}
