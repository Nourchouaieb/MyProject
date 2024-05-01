 import React, { useState, useEffect } from 'react';
 import PaidInvoicesTable from './PaidInvoicesTable;'
import UnpaidInvoicesTable from './UnpaidInvoicesTable';
import SalesChart from './SalesChart';

const rapport = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
    
        setSalesData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de ventes :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    
      <h1>Tableau de Bord des Ventes</h1>
      <SalesChart salesData={salesData} />
      <div>
        <h2>Factures Encaissées</h2>
        <PaidInvoicesTable salesData={salesData} />
      </div>
      <div>
        <h2>Factures en Attente</h2>
        <UnpaidInvoicesTable salesData={salesData} />
      </div>
    </div>
  );
};

 export default rapport;
