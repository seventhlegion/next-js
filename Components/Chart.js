import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { StyledChart } from './Styles/Chart.style';
import {Chart, CategoryScale, LinearScale, BarElement} from 'chart.js'; 
Chart.register(CategoryScale, LinearScale, BarElement);

/*const data = {
    data: {
        labels: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
        datasets: [{
            label: 'Population',
            data: [8622000, 4085000, 2670000, 2378000, 1743000, 1599000, 157900, 1469000, 1400000, 1036000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderWidth: 3,
        }],
    },
}*/


const BarChart = () => {
    const [barData, setBarData] = useState({
        labels: ['label 1', 'label 2', 'label 3', 'label 4'],
        datasets: [
            {
                label: 'test label',
                data: [
                    48,
                    35,
                    73,
                    82
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    });
    
    const [barOptions, setBarOptions] = useState({
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            title: {
                display: true,
                text: 'Data Orgranized In Bars',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    });
    return (
        <StyledChart>
            <Bar className='bar' data={barData} options={barOptions} />
        </StyledChart>
    )
}

export default BarChart;