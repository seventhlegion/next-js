import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { StyledChart } from './Styles/Chart.style';
import {Chart, CategoryScale, LinearScale, BarElement, Legend, Title } from 'chart.js'; 
Chart.register(CategoryScale, LinearScale, BarElement, Legend, Title );


const BarChart = () => {
    const [barData, setBarData] = useState({
        labels: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
        datasets: [
            {
                label: 'Population',
                data: [8622000, 4085000, 2670000, 2378000, 1743000, 1599000, 1579000, 1469000, 1400000, 1036000],
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
                borderWidth: 0
            }
        ]
    });
    
    const [barOptions, setBarOptions] = useState({
        options: {
            animations: {
                tension: {
                    duration: 5000,
                    easing: 'bar',
                    from: 1,
                    to: 0,
                    loop: true
                },
            },
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