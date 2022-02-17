import React from "react";
import { Line } from "react-chartjs-2";




const LineGraph = ({title, data}) => {
  const ans = data && data.length > 0 ? data :  [10,22,34,46,57,68,79,86,90,92,95,98]
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
        data: ans,
      },
    ],
  };
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: title,
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
