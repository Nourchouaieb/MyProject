import React from 'react'; 
import './PaidInvoicesTable.css';


const PaidInvoicesTable = ({ salesData }) => {
  return (
    <div>
      <h2>Factures payées</h2>
      <table>
        <thead>
          <tr>
            <th>Numéro de facture</th>
            <th>Date de paiement</th>
            <th>Montant payé</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.paymentDate}</td>
              <td>{invoice.amountPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaidInvoicesTable;
