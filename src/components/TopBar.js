import React from 'react';
import './Style.css'; 

const Style = () => {
  return (
    <>
    

      <div className="header-top">
        <div className="container">
          <p><a href="/ajoutDocument">Ajouter vos coordonnées</a> </p>
        </div>
      </div>
      <div className="gray-background"></div>
      <div className="accueil-page">
      <div className="left-sidebar">
        <h2>Factures ouvertes</h2>
        <h2><a href="/creeFacture" >+ Créez votre première facture</a></h2>
        <h3><li>Non échues </li></h3>
        <h3><li>En retard (- de 30 jours)</li></h3>
        <h3><li>En retard (+ de 30 jours)</li></h3>
      
      </div>
      <div className="right-side">
        
        <h1>Diagramme circulaires</h1>
        <div className="pie-chart">
          <p>0,00 DT facture</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Style;
