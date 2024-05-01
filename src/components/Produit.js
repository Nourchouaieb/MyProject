import React, { useState } from 'react';
import './produit.css'; 
// import NavBar from './components/NavBar';

/*import { Navbar } from 'react-bootstrap';*/

const Produit = () => {
  const [showNewProduitForm, setShowNewProduitForm] = useState(false);
  const [newProduit, setNewProduit] = useState({
    nom: '',
    typedeproduit: '',
    unite: '',
    prix: '',
    tva: ''
  });
  const [produits, setProduits] = useState([]); 
  const [produitCount, setProduitCount] = useState(0); 

  const handleNewProduit = () => {
    setShowNewProduitForm(true);
  };

  const handleCancel = () => {
    setShowNewProduitForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduit(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveProduit = () => {
    setProduitCount(prevCount => prevCount + 1);

    const produit = {
      numero: produitCount + 1,
      nom: newProduit.nom,
      typedeproduit: newProduit.typedeproduit,
      unite: newProduit.unite,
      prix: newProduit.prix,
      tva: newProduit.tva
    };

    setProduits(prevProduits => [...prevProduits, produit]);

    setNewProduit({
      nom: '',
      typedeproduit: '',
      unite: '',
      prix: '',
      tva: ''
    });

    setShowNewProduitForm(false);
  };

  return (
    <div className="produit-page">
      <div className="left-side">
        <div className="left-top">
        <input type="text" placeholder="Recherche..." />
          <button onClick={handleNewProduit} className="green-button">Nouveau produit</button>
        </div>
        <div className="main-content">
          {showNewProduitForm ? (
            <div className="new-produit-form">
              <h2>Nouveau produit</h2>
              <div className="form-group">
                <label>Nom :</label>
                <input type="text" name="nom" value={newProduit.nom} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="type de produit">type de produit :</label>
                  <select id="type de produit">
                    <option value="Biens">Biens</option>
                    <option value="Services">Services</option>
                </select>
              </div>
              <div className="form-group">
                <label>Unité: </label>
                <input type="text" name="unite" value={newProduit.unite} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Prix: </label>
                <input type="text" name="prix" value={newProduit.prix} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>TVA: </label>
                <input type="text" name="tva" value={newProduit.tva} onChange={handleChange} />
              </div>
              <div className="form-group">
                <button onClick={handleCancel} className="blue-button">Annuler</button>
                <button onClick={handleSaveProduit} className="blue-button">Enregistrer</button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Produits</h1>
              <p>Produits enregistrés : {produits.length}</p>
              <table>
                <thead>
                  <tr>
                    <th>Numéro</th>
                    <th>Nom</th>
                    <th>Type de produit</th>
                    <th>Unité</th>
                    <th>Prix</th>
                    <th>TVA</th>
                  </tr>
                </thead>
                <tbody>
                  {produits.map((produit, index) => (
                    <tr key={index}>
                      <td>{produit.numero}</td>
                      <td>{produit.nom}</td>
                      <td>{produit.typedeproduit}</td>
                      <td>{produit.unite}</td>
                      <td>{produit.prix}</td>
                      <td>{produit.tva}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="right-side">
        <h1>Mes Produits</h1>
        <p>Sélectionnez un produit dans la liste de gauche pour voir ses détails</p>
        <button>Importer Produit</button>
      </div>
    </div>
  );
};

export default Produit;
