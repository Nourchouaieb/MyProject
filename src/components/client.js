// import React, { useState } from 'react';
// import './Client.css';

// const Client = () => {
//   const [showNewClientForm, setShowNewClientForm] = useState(false);
//   const [newClient, setNewClient] = useState({
//     type: '',
//     reference: '',
//     entreprise: '',
//     prenom: '',
//     nom: '',
//     email: '',
//     numTel: ''
//   });
//   const [clients, setClients] = useState([]); 
//   const [clientCount, setClientCount] = useState(0); 
//   const [selectedClient, setSelectedClient] = useState(null);

//   const handleNewClient = () => {
//     setShowNewClientForm(true);
//   };

//   const handleCancel = () => {
//     setShowNewClientForm(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewClient(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSaveClient = () => {
//     setClientCount(prevCount => prevCount + 1);

//     const client = {
//       numero: clientCount + 1,
//       nom: newClient.nom,
//       prenom: newClient.prenom,
//       facturesEnAttente: 0,
//       facturesPayees: 0 
//     };

//     setClients(prevClients => [...prevClients, client]);

//     setNewClient({
//       type: '',
//       reference: '',
//       entreprise: '',
//       prenom: '',
//       nom: '',
//       email: '',
//       numTel: ''
//     });

//     setShowNewClientForm(false);
//   };

//   const handleClientClick = (client) => {
//     setSelectedClient(client);
//   };

//   const handleEditClient = () => {
//   };

//   const handleDeleteClient = () => {
//     if (selectedClient) {
//       const updatedClients = clients.filter(client => client !== selectedClient);
//       setClients(updatedClients);
//       setSelectedClient(null);
//     }

//   };

//   return (
//     <div className="client-page">
//       <div className="left-side">
//         <div className="left-top">
//           <input type="text" placeholder="Recherche..." />
//           <button onClick={handleNewClient} className="green-button">Nouveau client</button>
//         </div>
//         <div className="main-content">
//           {showNewClientForm ? (
//             <div className="new-client-form">
//               <h2>Nouveau client</h2>
//               <div className="form-group">
//                 <label htmlFor="type de client">type de client :</label>
//                 <select id="type de client">
//                   <option value="Client professionnel">Client professionnel</option>
//                   <option value="Client particulier">Client particulier</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Nom de l'entreprise: </label>
//                 <input type="text" name="reference" value={newClient.reference} onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Nom: </label>
//                 <input type="text" name="nom" value={newClient.nom} onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Prenom: </label>
//                 <input type="text" name="prenom" value={newClient.prenom} onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Cin: </label>
//                 <input type="text" name="cin" value={newClient.cin} onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Numéro de téléphone:</label>
//                 <input type="text" name="numTel" value={newClient.numTel} onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <label>Email :</label>
//                 <input type="text" name="email" value={newClient.email} onChange={handleChange} />
//               </div>
//               <div className="form-group">
//                 <button onClick={handleCancel} className="blue-button">Annuler</button>
//                 <button onClick={handleSaveClient} className="blue-button">Enregistrer</button>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h1>Clients</h1>
//               <p>Clients enregistrés avec votre abonnement : {clients.length}/5</p>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Numéro</th>
//                     <th>Client</th>
//                     <th>Factures en attente</th>
//                     <th>Factures payées</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {clients.map((client, index) => (
//                     <tr key={index} onClick={() => handleClientClick(client)}>
//                       <td>{client.numero}</td>
//                       <td>{`${client.prenom} ${client.nom}`}</td>
//                       <td>{client.facturesEnAttente}</td>
//                       <td>{client.facturesPayees}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="right-side">
//         <h1>Mes Clients</h1>
//         {selectedClient ? (
//           <div>
//             <h2>Détails du Client</h2>
//             <p>Nom: {selectedClient.nom}</p>
//             <p>Prénom: {selectedClient.prenom}</p>
//             <p>Factures en attente: {selectedClient.facturesEnAttente}</p>
//             <p>Factures payées: {selectedClient.facturesPayees}</p>
//             <div>
//               <button onClick={handleEditClient}>Modifier</button>
//               <button onClick={handleDeleteClient}>Supprimer</button>
//             </div>
//             <button onClick={() => setSelectedClient(null)}>Fermer</button>
//           </div>
//         ) : (
//           <p>Sélectionnez un client dans la liste de gauche pour voir ses détails</p>
//         )}
//         {/* <button>Importer Client</button> */}
//       </div>
//     </div>
//   );
// };

// export default Client;


import React, { useState } from 'react';
import './Client.css';

const Client = () => {
  const [showNewClientForm, setShowNewClientForm] = useState(false);
  const [newClient, setNewClient] = useState({
    type: '',
    reference: '',
    entreprise: '',
    prenom: '',
    nom: '',
    email: '',
    numTel: ''
  });
  const [clients, setClients] = useState([]); 
  const [clientCount, setClientCount] = useState(0); 
  const [selectedClient, setSelectedClient] = useState(null);

  const handleNewClient = () => {
    setShowNewClientForm(true);
  };

  const handleCancel = () => {
    setShowNewClientForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClient = () => {
    setClientCount(prevCount => prevCount + 1);

    const client = {
      numero: clientCount + 1,
      nom: newClient.nom,
      prenom: newClient.prenom,
      facturesEnAttente: 0,
      facturesPayees: 0 
    };

    setClients(prevClients => [...prevClients, client]);

    setNewClient({
      type: '',
      reference: '',
      entreprise: '',
      prenom: '',
      nom: '',
      email: '',
      numTel: ''
    });

    setShowNewClientForm(false);
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleDeleteClient = () => {
    if (selectedClient) {
      const updatedClients = clients.filter(client => client !== selectedClient);
      setClients(updatedClients);
      setSelectedClient(null);
    }
  };

  return (
    <div className="client-page">
      <div className="left-side">
        <div className="left-top">
          <input type="text" placeholder="Recherche..." />
          <button onClick={handleNewClient} className="green-button">Nouveau client</button>
        </div>
        <div className="main-content">
          {showNewClientForm ? (
            <div className="new-client-form">
              {/* New client form */}
            </div>
          ) : (
            <div>
              <h1>Clients</h1>
              <p>Clients enregistrés avec votre abonnement : {clients.length}/5</p>
              {/* Client list */}
            </div>
          )}
        </div>
      </div>
      <div className="right-side">
        <h1>Mes Clients</h1>
        {selectedClient ? (
          <div>
            <h2>Détails du Client</h2>
            <p>Nom: {selectedClient.nom}</p>
            <p>Prénom: {selectedClient.prenom}</p>
            <p>Factures en attente: {selectedClient.facturesEnAttente}</p>
            <p>Factures payées: {selectedClient.facturesPayees}</p>
            <div>
              <button onClick={handleDeleteClient}>Supprimer</button>
            </div>
            <button onClick={() => setSelectedClient(null)}>Fermer</button>
          </div>
        ) : (
          <p>Sélectionnez un client dans la liste de gauche pour voir ses détails</p>
        )}
        {/* <button>Importer Client</button> */}
      </div>
    </div>
  );
};

export default Client;


