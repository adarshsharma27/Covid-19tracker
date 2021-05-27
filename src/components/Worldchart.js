import React from 'react'
import { Pie } from 'react-chartjs-2';


const Worldchart = (props) => {
  const data = {
    labels: [
      'Active Cases',
      'Confirmed Cases',
      'Recovered Cases',
      'Death Cases'
    ],
    datasets: [{
      data: [props.totaldata,props.totalconfirmed,props.totarecovered,props.totatdeath],
      backgroundColor: [
        '#A5E753',
        '#F2F3F7',
        '#14DE80',
        '#fa3030'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
    return (
        <>
            <div className="container py-2">
            <Pie data={data} width={500} height={500} options={{ maintainAspectRatio: false }} type='pie' />
            </div>
        </>
    )
}

export default Worldchart
