import React, { useState } from 'react';
import './mocompte.css';

function Compte() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const renderCompanyInfo = () => (
    <div className="info">
      <h2>Coordonnées de l'entreprise</h2>
      <div className="field">
        <label  >Logo de l'entreprise</label>
        <input type="file"  style={{ width: '330px' }}/>
      </div>
      <div className="field">
        <label  >Nom de l'entreprise</label>
        <input type="text" placeholder="Entrez le nom de votre entreprise"  style={{ width: '250px' }}/>
      </div>
      <div className="field">
        <label>E-mail de contact</label>
        <input type="email" placeholder="Entrez l'e-mail de contact de l'entreprise"  style={{ width: '250px' }}/>
      </div>
      <div className="field">
        <label>Numéro de SIRET</label>
        <input type="text" placeholder="Entrez le numéro de SIRET de l'entreprise"  style={{ width: '250px' }} />
      </div>
      <div className="field">
        <label>Numéro de TVA</label>
        <input type="text" placeholder="Entrez le numéro de TVA de l'entreprise"  style={{ width: '250px' }}/>
      </div>
      <div className="field">
        <label>TVA par défaut</label>
        <input type="text" placeholder="Entrez le taux de TVA par défaut de l'entreprise"  style={{ width: '150px' }}/>
      </div>
      <button  style={{ width: '150px' }}>Enregistrer</button>
    </div>
  );

  const renderBillingSettings = () => (
    <div className="info">
      <h2>Paramètres de facturation</h2>
         <div className="field">
        <label>Type de facture :</label>
        <select>
          <option>Facture standard</option>
          <option>Facture pro forma</option>
          <option>Facture d'acompte</option>
        </select>
      </div>
      <div className="field">
        <label>Afficher colonnes :</label>
        <select>
          <option>Colonnes par défaut</option>
          <option>Personnalisé</option>
        </select>
      </div>
      <div className="field">
        <label>Devise :</label>
        <select>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
          <option>...</option>
        </select>
      </div>
      <div className="field">
        <label>Langue de facturation :</label>
        <select>
          <option>Français</option>
          <option>Anglais</option>
          <option>Espagnol</option>
          <option>...</option>
        </select>
      </div>
      <div className="field">
        <label>Type de produit :</label>
        <select>
          <option>Produit standard</option>
          <option>Produit personnalisé</option>
          <option>Service</option>
        </select>
      </div>
      <div className="field">
        <label>Paramètres de remise :</label>
        <input type="text" placeholder="Entrez les paramètres de remise"  style={{ width: '150px' }}/>
      </div>
      <div className="field">
        <label>Référence client :</label>
        <input type="text" placeholder="Entrez la référence client par défaut"  style={{ width: '150px' }} />
      </div>
      <button  style={{ width: '150px' }}>Enregistrer</button>


      </div>
  );

  const renderUserAccount = () => (
    <div className="info">
      <h2>Compte utilisateur</h2>
      <div className="field">
      <label>Langues :</label>
      <select>
        <option>Français</option>
        <option>Anglais</option>
        <option>Espagnol</option>
        {/* Ajoutez d'autres options de langue ici */}
      </select>
    </div>
    <div className="field">
      <label>Identifiant :</label>
      <input type="text" placeholder="Entrez votre identifiant"  style={{ width: '150px' }}/>
    </div>
    <div className="field">
      <label>Mot de passe :</label>
      <input type="password" placeholder="Entrez votre mot de passe" style={{ width: '150px' }} />
    </div>
    <div className="field">
      <label>Social Connect :</label>
      <input type="text" placeholder="Entrez vos informations de connexion sociales"  style={{ width: '150px' }}/>
    </div>
    <div className="field">
      <label>Format de l'heure :</label>
      <select>
        <option>12 heures</option>
        <option>24 heures</option>
      </select>
    </div>
    <div className="field">
      <label>Format de date :</label>
      <select>
        <option>DD/MM/YYYY</option>
        <option>MM/DD/YYYY</option>
      </select>
    </div>
    <button  style={{ width: '150px' }}>Enregistrer</button>
          </div>
  );
  const renderBillingParameters = () => (
    <div className="info">
      <h2>Paramètres de Devis :</h2>
  <div className="field">
        <label>Afficher colonnes :</label>
        <input type="text" placeholder="Date, Qté, Unité, TVA, Montant"  style={{ width: '200px' }}/>
      </div>
      
      <div className="field">
        <label>Date de validité :</label>
        <input type="text" placeholder="Entrez la date de validité"  style={{ width: '150px' }} />
      </div>
      <div className="field">
        <label>Devise :</label>
        <select>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
          <option>...</option>
        </select>
      </div>
      <div className="field">
      <label>Langue :</label>
      <select>
        <option>Français</option>
        <option>Anglais</option>
        <option>Espagnol</option>
        {/* Ajoutez d'autres options de langue ici */}
      </select>
    </div>
      <div className="field">
        <label>Référence client :</label>
        <input type="text" placeholder="Entrez la référence client par défaut"  style={{ width: '150px' }} />
      </div>
      <div className="field">
        <label>Numéro d’engagement :</label>
        <input type="text" placeholder="Entrez le numéro d'engagement"  style={{ width: '150px' }} />
      </div>
      <button  style={{ width: '150px' }}>Enregistrer</button>
      </div>
      );

  return (
    <div className="container">
      <div className="links">
        <ul>
          <h2><li onClick={() => handleLinkClick('companyInfo')}>Coordonnées de l'entreprise</li></h2> 
          <h2><li onClick={() => handleLinkClick('billingSettings')}>Paramètres de facturation</li></h2>
          <h2><li onClick={() => handleLinkClick('billingParameters')}>Paramètres des devis</li></h2> 
          <h2><li onClick={() => handleLinkClick('userAccount')}>Compte utilisateur</li></h2>
        </ul>
      </div>
      <div className="content">
        {selectedLink === 'companyInfo' && renderCompanyInfo()}
        {selectedLink === 'billingSettings' && renderBillingSettings()}
        {selectedLink === 'billingParameters' && renderBillingParameters()}
        {selectedLink === 'userAccount' && renderUserAccount()}
      </div>
    </div>
  );
}

export default Compte;


