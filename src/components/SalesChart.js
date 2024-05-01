import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 
import './SalesChart.css';

const SalesChart = ({ salesData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (salesData.length > 0) {
      const labels = salesData.map(sale => sale.date); 
      const data = salesData.map(sale => sale.amount); 

      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ventes',
            data: data,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.2)', 
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Montant de vente'
              }
            }
          }
        }
      });
    }
  }, [salesData]);

  return (
    <div>
      <h2>Graphique des ventes</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SalesChart;
