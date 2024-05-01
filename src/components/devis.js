import React, { useState } from 'react';
import './devis.css';
/*import './components/NavBar';*/


const Devis = () => {
  const [showNewDevisForm, setShowNewDevisForm] = useState(false);
  const [newDevis, setNewDevis] = useState({
    numero: '',
    montant: '',
    date: ''
  });
  const [devis, setDevis] = useState([]); 
  const [devisCount, setDevisCount] = useState(0); 

  const handleNewDevis = () => {
    setShowNewDevisForm(true);
  };

  const handleCancel = () => {
    setShowNewDevisForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDevis(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveDevis = () => {
    setDevisCount(prevCount => prevCount + 1);

    const devis = {
      numero: newDevis.numero,
      montant: newDevis.montant,
      date: newDevis.date
    };

    setDevis(prevDevis => [...prevDevis, devis]);

    setNewDevis({
      numero: '',
      montant: '',
      date: ''
    });

    setShowNewDevisForm(false);
  };

  return (
    <div className="devis-page">
     
      <div className="left-side">
        <div className="left-top">
        
          <input type="text" placeholder="Recherche..." />
          <button onClick={handleNewDevis} className="green-button">Nouveau devis</button>
        </div>
        <div className="main-content">
          {showNewDevisForm ? (
            <div className="new-devis-form">
              <h2>Nouveau devis</h2>
              <div className="form-group">
                <label>Numéro :</label>
                <input type="text" name="numero" value={newDevis.numero} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Montant: </label>
                <input type="text" name="montant" value={newDevis.montant} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <input type="text" name="date" value={newDevis.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <button onClick={handleCancel} className="blue-button">Annuler</button>
                <button onClick={handleSaveDevis} className="blue-button">Enregistrer</button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Devis</h1>
              <p>Nombre de devis enregistrés : {devis.length}</p>
              <table>
                <thead>
                  <tr>
                    <th>Numéro</th>
                    <th>Montant</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {devis.map((devis, index) => (
                    <tr key={index}>
                      <td>{devis.numero}</td>
                      <td>{devis.montant}</td>
                      <td>{devis.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="right-side">
        <h1> Devis</h1>
        <p>Sélectionnez un devis dans la liste de gauche pour voir ses détails</p>
      </div>
    </div>
    
  );
};

export default Devis;

