import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: [
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
  ],
  datasets: [
    {
      label: "Average",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "#FFFCF5",
      borderColor: "#F4A261",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 90, 45, 65, 65, 23, 78, 89],
    },
  ],
};


const LineGraph = () => {
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Total hours",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
