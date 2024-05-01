import React, { useState } from 'react';
import './creeFacture.css';

const CreeFacture = () => {
  const [clientsVisible, setClientsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [facture, setFacture] = useState({
    numero: '',
    date: '',
    conditionsPaiement: '',
    echéance: '',
    engagement: '',
    codeService: ''
  });
  const [ligneFacture, setLigneFacture] = useState([]);

  const toggleClients = () => {
    setClientsVisible(!clientsVisible);
  };

  const handleSendMessage = () => {
    // Code pour envoyer le message
  };

  const handleAddLine = () => {
    // Code pour ajouter une ligne dans le tableau de facture
  };

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  return (
    <div>
      
        <button onClick={handleSendMessage} style={{ width: '150px' }} >Enregistrer</button>
        <button  onClick={handleSendMessage} style={{ width: '150px' }}>Voir l'aperçu</button>
      

      {/* Clients */}
      <div>
        <label htmlFor="client">Client:</label>
        <select id="client" onChange={handleClientChange} value={selectedClient}>
          <option value="">Sélectionner un client</option>
          <option value="client1">Client 1</option>
          <option value="client2">Client 2</option>
          {/* Ajouter d'autres options au besoin */}
        </select>
      </div>

      {/* Facture */}
      <div className="facture">
        <div>
          <div>
            <label htmlFor="numeroFacture">Numéro de facture:</label>
            <input type="text" id="numeroFacture" value={facture.numero} onChange={(e) => setFacture({ ...facture, numero: e.target.value })} style={{ width: '150px' }} />
          </div>
          <div>
            <label htmlFor="dateFacturation">Date de facturation:</label>
            <input type="date" id="dateFacturation" value={facture.date} onChange={(e) => setFacture({ ...facture, date: e.target.value })} style={{ width: '200px' } }/>
          </div>
          <div>
            <label htmlFor="conditionsPaiement">Conditions de paiement:</label>
            <input type="text" id="conditionsPaiement" value={facture.conditionsPaiement} onChange={(e) => setFacture({ ...facture, conditionsPaiement: e.target.value })} style={{ width: '200px' }} />
          </div>
          <div>
            <label htmlFor="numeroEngagement">Numéro d'engagement:</label>
            <input type="text" id="numeroEngagement" value={facture.engagement} onChange={(e) => setFacture({ ...facture, engagement: e.target.value })} style={{ width: '150px' }} />
          </div>
          <div>
            <label htmlFor="codeService">Code service:</label>
            <input type="text" id="codeService" value={facture.codeService} onChange={(e) => setFacture({ ...facture, codeService: e.target.value })} style={{ width: '150px' }} />
          </div>
        </div>
        <div className="table-facture">
  <div className="ligne-facture">
    <div>
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" />
    </div>
    <div>
      <label htmlFor="typeProduit">Type de produit:</label>
      <select id="typeProduit">
        <option value="biens">Biens</option>
        <option value="services">Services</option>
      </select>
    </div>
    <div>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" />
    </div>
    <div>
      <label htmlFor="quantite">Qté:</label>
      <input type="text" id="quantite" />
    </div>
    <div>
      <label htmlFor="unite">Unité:</label>
      <select id="unite">
        <option value="kg">Kg</option>
        <option value="cm" >cm</option>
        <option value="h" >h</option>
        <option value="pcs" >pcs</option>
        <option value="kg" >Kg</option>
        <option value="km" >km</option>
        <option value="m" >m</option>

        {/* Ajoutez d'autres options d'unité si nécessaire */}
      </select>
    </div>
    <div>
      <label htmlFor="prix">Prix:</label>
      <input type="text" id="prix" />
    </div>
    <div>
      <label htmlFor="tva">TVA:</label>
      <input type="text" id="tva" />
    </div>
    <div>
      <label htmlFor="montant">Montant:</label>
      <input type="text" id="montant" />
    </div>
  </div>
</div>


        <button onClick={handleAddLine} style={{ width: '150px' }} >Ajouter une ligne</button>
      </div>

      {/* Message */}
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '250px', height: '100px' }}
        />
        <button onClick={handleSendMessage} style={{ width: '150px' }}>Envoyer</button>
      </div>
    </div>
  );
};

export default CreeFacture;
