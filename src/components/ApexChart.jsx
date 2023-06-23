import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../App.css'

export const ApexChart = () => {
    const [series, setSeries] = useState([
        {
            name: 'Temperature',
            data: [42, 38, 34, 32, 31, 35, 40, 43],
        },
    ]);

    const options = {
        chart: {
            type: 'area',
            height: 100,
            zoom: {
                enabled: false,
            },
            toolbar:{
                show:false
            }
        },
        dataLabels: {
            enabled: true,
            position:'top',
        },
        stroke: {
            curve: 'smooth',
        },
        labels: ['7 pm','10 pm','1 am','4 am','7 am','10 am','1 am','1 am'],
        xaxis: {
            type: 'time',
            labels: {
                show: true,
                style: {
                    colors: '#999ca2' // Set the desired label color here
                }
            },
            axisBorder:{
                show:false
            },
            axisTicks:{
                show:false
            }
        },
        yaxis: {
            show: false,
            opposite: false,
            labels: {
                show: false,
            },
            axisBorder:{
                show:false
            },
        },
        legend: {
            position:'top',
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: true,
                color: '#d8bb45',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
};
