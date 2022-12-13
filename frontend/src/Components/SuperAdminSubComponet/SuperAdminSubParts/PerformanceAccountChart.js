import React from 'react'
import Styles from '../../../Assets/Styles/GlobalStyle'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  RadialLinearScale,
  ArcElement,
  BarElement
} from 'chart.js';
import { faker } from '@faker-js/faker'
import { Line,Radar,Doughnut,Bar,PolarArea } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  RadialLinearScale, ArcElement,
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Cash Flow',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [10,15,20,10,25,10,27],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      fill: true,
      label: 'Dataset 2',
      data: [15,10,25,10,20,15,24],
      borderColor:'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const redarData = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: '# of Votes',
      data: [3, 2, 5, 3, 9, 2],
      backgroundColor: 'rgba(53, 162, 235,.5)',
      borderColor: 'rgba(53, 162, 235, 0.2)',
      borderWidth: 1,
    },
  ],
};
// Vertical bar chart data
export const barChartOptions = {
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
const barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const barChartData = {
  labels:barChartLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const PerformanceAccountChart=()=> {
  return (
    <>
    {/* <div className='container-fluid m-0 mb-3 p-0' style={{color:Styles.themeLightColor}}>
       <Line options={options} data={data} />  
    </div> */}
    <div className='container-fluid m-0 mb-3 p-2' style={{color:Styles.themeLightColor }}>
    <div className="row g-3">
    <div className='col-12'>
     <Line options={options} data={data} />  
    </div>
    <div class="col-6">
         <div class="p-3 bg-dark shadow" style={{borderRadius:Styles.generalBorderSimpleRadius}}>
         <Doughnut  
           width={300}
           height={400}
           options={{ maintainAspectRatio: false }} data={doughnutData} />                
         </div>
     </div>
     <div class="col-6">
         <div class="p-3 bg-dark shadow" style={{borderRadius:Styles.generalBorderSimpleRadius}}>
         <PolarArea  
           width={300}
           height={400}
           options={{ maintainAspectRatio: false }} data={redarData} />                
         </div>
     </div>
     <div className='col-12'>
     <Bar options={barChartOptions} data={barChartData} />  
    </div>
    </div>
    </div>
    </>
  )
}

export default PerformanceAccountChart