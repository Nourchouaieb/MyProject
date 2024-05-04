import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import LoginPage from './components/loginPage'; 
import Client from './components/client';
import Produit from './components/Produit';
import Facture from './components/facture';
import Devis from './components/devis';
import CreeFacture from './components/creeFacture';
import AjoutDocument from './components/ajoutDocument';
import Moncompte from './components/moncompte';
import Dashboards from './components/dashbords';

function App() { 

  return (
    <div>
      <Router>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<TopBar />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/Clients" element={<Client />} />
          <Route path="/produits" element={<Produit />} />
          <Route path="/Factures" element={<Facture />} />
          <Route path="/Devis" element={<Devis />} />
          <Route path="/creeFacture" element={<CreeFacture />} />
          <Route path="/ajoutDocument" element={<AjoutDocument/>} />
          <Route path="/moncompte" element={<Moncompte/>} />
          <Route path="/dashbords" element={<Dashboards/>} />




        </Routes>
      </Router>
    </div>   
  );
};

export default App;
