import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Chart = ({chart}) => {
    const activeCases = chart.activeCases;
    const totalInfected = chart.totalInfected;
    const deceased = chart.deceased;
    const recovered = chart.recovered;
    const states = chart.region;
    const params = ['Active Cases', 'Total Infected', 'Deceased', 'Recovered'];
    const color = [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)'
    ];
    const inputDataForChart = {
        labels: params,
        datasets: [
            {
                label: '# of cases',
                data: [activeCases, totalInfected, deceased, recovered],
                backgroundColor: color,
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 1,
            }
        ]
    };
    console.log(inputDataForChart);
    return (
        <div className="doughnut-chart">
            <h3>{states}</h3>
            <Doughnut data={inputDataForChart} width={300} height={300} options={{ maintainAspectRatio: false}}/>
        </div>
    )
}

export default Chart
