import React, { useState } from 'react';

const ajoutDocument = () => {
  const [donneesFacture, setDonneesFacture] = useState({
    nomEntreprise: '',
    numeroFacture: '',
    dateEcheance: '',
    items: [{ description: '', quantité: 0, prix: 0 }],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDonneesFacture((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const itemsMisAJour = donneesFacture.items.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setDonneesFacture((prevState) => ({
      ...prevState,
      items: itemsMisAJour,
    }));
  };

  const addItem = () => {
    setDonneesFacture((prevState) => ({
      ...prevState,
      items: [...prevState.items, { description: '', quantité: 0, prix: 0 }],
    }));
  };

  const removeItem = (index) => {
    const itemsMisAJour = donneesFacture.items.filter((item, i) => i !== index);
    setDonneesFacture((prevState) => ({
      ...prevState,
      items: itemsMisAJour,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Génération du document de facture ou autres actions ici
    console.log('Données de la facture:', donneesFacture);
  };

  return (
    <div>
      <h2>Formulaire de Facture</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomEntreprise">Nom de l'Entreprise:</label>
          <input
            type="text"
            id="nomEntreprise"
            name="nomEntreprise"
            value={donneesFacture.nomEntreprise}
            onChange={handleChange}
            style={{ width: '150px' }}
          />
        </div>
        <div>
          <label htmlFor="numeroFacture">Numéro de Facture:</label>
          <input
            type="text"
            id="numeroFacture"
            name="numeroFacture"
            value={donneesFacture.numeroFacture}
            onChange={handleChange}
            style={{ width: '150px' }}
          />
        </div>
        <div>
          <label htmlFor="dateEcheance">Date d'Échéance:</label>
          <input
            type="date"
            id="dateEcheance"
            name="dateEcheance"
            value={donneesFacture.dateEcheance}
            onChange={handleChange}
            style={{ width: '150px' }}
          />
        </div>
        <h2>Des produits</h2>
        {donneesFacture.items.map((item, index) => (
          <div key={index}>
            <label htmlFor={`description-${index}`}>Description:</label>
            <input
              type="text"
              id={`description-${index}`}
              name={`description-${index}`}
              value={item.description}
              onChange={(event) => handleItemChange(index, event)}
              style={{ width: '150px' }}
            />
            <label htmlFor={`quantité-${index}`}>Quantité:</label>
            <input
              type="number"
              id={`quantité-${index}`}
              name={`quantité-${index}`}
              value={item.quantité}
              onChange={(event) => handleItemChange(index, event)}
              style={{ width: '150px' }}
            />
            <label htmlFor={`prix-${index}`}>Prix:</label>
            <input
              type="number"
              id={`prix-${index}`}
              name={`prix-${index}`}
              value={item.prix}
              onChange={(event) => handleItemChange(index, event)}
              style={{ width: '150px' }}
            />
            <button onClick={() => removeItem(index)}  style={{ width: '150px' }}>Supprimer produit</button>
          </div>
        ))}
        <button onClick={addItem}  style={{ width: '150px' }} >Ajouter un produit</button>
        <button type="submit"  style={{ width: '150px' }}>Générer la Facture</button>
      </form>
    </div>
  );
};

export default ajoutDocument;
