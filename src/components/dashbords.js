// import React, { useState, useEffect } from 'react';
// import { Chart } from 'chart.js/auto';
// // Assurez-vous d'installer cette bibliothèque via npm/yarn

// function Dashboard() {
//   const [salesData, setSalesData] = useState([]);

//   // Fonction pour récupérer les données de ventes depuis l'API ou la base de données
//   const fetchSalesData = async () => {
//     // Ici, vous effectueriez une requête API ou une requête de base de données pour obtenir les données de ventes
//     // Remplacez ce code par votre logique de récupération des données
//     const response = await fetch('url_de_votre_api/ventes');
//     const data = await response.json();
//     setSalesData(data);
//   };

//   // Utilisation de useEffect pour appeler fetchSalesData une fois que le composant est monté
//   useEffect(() => {
//     fetchSalesData();
//   }, []);

//   // Créer un graphique à l'aide de Chart.js
//   useEffect(() => {
//     const ctx = document.getElementById('salesChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: salesData.map(item => item.month), // Supposons que salesData contienne des objets avec une propriété 'month'
//         datasets: [{
//           label: 'Ventes mensuelles',
//           data: salesData.map(item => item.amount), // Supposons que salesData contienne des objets avec une propriété 'amount'
//           backgroundColor: 'rgba(54, 162, 235, 0.6)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//   }, [salesData]);

//   return (
//     <div>
//       <h1>Tableau de bord de gestion de facturation</h1>
//       <div>
//         <canvas id="salesChart" width="400" height="200"></canvas>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Assurez-vous d'installer cette bibliothèque via npm/yarn

function Dashboard() {
  const [salesData, setSalesData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  // Fonction pour récupérer les données de ventes depuis l'API ou la base de données
  const fetchSalesData = async () => {
    // Ici, vous effectueriez une requête API ou une requête de base de données pour obtenir les données de ventes
    // Remplacez ce code par votre logique de récupération des données
    const response = await fetch('url_de_votre_api/ventes');
    const data = await response.json();
    setSalesData(data);
  };

  // Utilisation de useEffect pour appeler fetchSalesData une fois que le composant est monté
  useEffect(() => {
    fetchSalesData();
  }, []);

  // Créer un graphique à l'aide de Chart.js
  useEffect(() => {
    if (salesData.length === 0) return;

    // Détruire le graphique existant
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = document.getElementById('salesChart').getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: salesData.map(item => item.month),
        datasets: [{
          label: 'Ventes mensuelles',
          data: salesData.map(item => item.amount),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    setChartInstance(newChartInstance);

    return () => {
      newChartInstance.destroy();
    };
  }, [salesData, chartInstance]);

  return (
    <div>
      <h1>Tableau de bord de gestion de facturation</h1>
      <div>
        <canvas id="salesChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
}

export default Dashboard;

