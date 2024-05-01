import React from 'react';

const UnpaidInvoicesTable = ({ salesData }) => {
  return (
    <div>
      <h2>Factures impayées</h2>
      <table>
        <thead>
          <tr>
            <th>Numéro de facture</th>
            <th>Date de facturation</th>
            <th>Montant dû</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.invoiceDate}</td>
              <td>{invoice.amountDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnpaidInvoicesTable;
