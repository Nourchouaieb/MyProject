import React, { useState } from 'react';
import './facture.css'; 
const Facture = () => {
  const [showOptions, setShowOptions] = useState(false); 
  const [showNewFactureForm, setShowNewFactureForm] = useState(false);
  const [selectedFacture, setSelectedFacture] = useState(null);
  const [newFacture, setNewFacture] = useState({
    numero: '',
    montant: '',
    date: ''
  });

  const [factures, setFactures] = useState([]); 
  const [factureCount, setFactureCount] = useState(0); 

  const handleNewFacture = () => {
    setShowOptions(!showOptions);

    setShowNewFactureForm(true);
  };

  const handleCancel = () => {
    setShowNewFactureForm(false);
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFacture(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveFacture = () => {
    setFactureCount(prevCount => prevCount + 1);

    const facture = {
      numero: newFacture.numero,
      montant: newFacture.montant,
      date: newFacture.date
    };

    setFactures(prevFactures => [...prevFactures, facture]);

    setNewFacture({
      numero: '',
      montant: '',
      date: ''
    });

    setShowNewFactureForm(false);
  };
  const handleEditFacture= () => {
  };
  const handleDeleteFacture = () => {
    if (selectedFacture) {
      const updatedFactures = factures.filter(Facture => Facture !== selectedFacture);
      setFactures(updatedFactures);
      setSelectedFacture(null);
    }

  };


  return (
    <div className="facture-page">
      <div className="left-side">
        <div className="left-top">
          <input type="text" placeholder="Recherche..." />
          <button onClick={handleNewFacture} className="green-button">Nouvelle facture</button>
        </div>
        <div className="main-content">
          {showNewFactureForm ? (
            <div className="new-facture-form">
              <h2>Nouvelle facture</h2>
              <div className="form-group">
                <label>Numéro :</label>
                <input type="text" name="numero" value={newFacture.numero} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Montant: </label>
                <input type="text" name="montant" value={newFacture.montant} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <input type="text" name="date" value={newFacture.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <button onClick={handleCancel} className="blue-button">Annuler</button>
                <button onClick={handleSaveFacture} className="blue-button">Enregistrer</button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Factures</h1>
              <p>Nombre de factures enregistrées : {factures.length}</p>
              <table>
                <thead>
                  <tr>
                    <th>Numéro</th>
                    <th>Montant</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {factures.map((facture, index) => (
                    <tr key={index}>
                      <td>{facture.numero}</td>
                      <td>{facture.montant}</td>
                      <td>{facture.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="right-side">
        <h1>Exemple De Factures</h1>
        {selectedFacture ? (
          <div>
            <p>Numéro: {selectedFacture.numero}</p>
            <p>Montant: {selectedFacture.montant}</p>
            <p>Date: {selectedFacture.date}</p>
            <div>
              <button onClick={handleEditFacture}>Modifier</button>
              <button onClick={handleDeleteFacture}>Supprimer</button>
            </div>
            <button onClick={() => setSelectedFacture(null)}>Fermer</button>
          </div>
        ) : (
          <p>Sélectionnez une facture dans la liste de gauche pour voir ses détails</p>
        )}
      
      </div>
    </div>
  );
};

export default Facture;
