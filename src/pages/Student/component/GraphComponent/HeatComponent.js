import Chart from "react-apexcharts";

import React from 'react'

const HeatComponent = () => {

    const options = {
        series: [
          {
            name: "Series 1",
            data: [{
              x: 'W1',
              y: 22
            }, {
              x: 'W2',
              y: 29
            }, {
              x: 'W3',
              y: 13
            }, {
              x: 'W4',
              y: 32
            }]
          },
          {
            name: "Series 2",
            data: [{
              x: 'W1',
              y: 43
            }, {
              x: 'W2',
              y: 43
            }, {
              x: 'W3',
              y: 43
            }, {
              x: 'W4',
              y: 43
            }]
          }
        ],
        plotOptions: {
            heatmap: {
              colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    color: '#00A100',
                    name: 'low',
                  },
                  {
                    from: 6,
                    to: 20,
                    color: '#128FD9',
                    name: 'medium',
                  },
                  {
                    from: 21,
                    to: 45,
                    color: '#FFB200',
                    name: 'high',
                  }
                ]
              }
            }
          }
        }


    return (
        <div>
            <Chart
              options={options}
              series={this.state.series}
              type="bar"
              width="500"
            />
        </div>
    )
}

export default HeatComponent


 
    
  