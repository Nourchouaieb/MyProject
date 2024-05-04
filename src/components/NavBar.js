import React from 'react';
import './navBar.css';
import {} from 'react-router-dom';


const NavBar = () => {
  return (
    <>
    

     <header className="header">
      
        <div className="left">
          <a href="/">Accueil</a>
          <a href="/produits">Produits</a>
          <a href="/Clients">Clients</a>
          <a href="/Factures">Factures</a>
          <a href="/Devis">Devis</a>
          <a href="/dashbords">Rapports</a>

        
        </div>
        <div className="right">
          <a href="/aide">Aide</a>
          <a href="/moncompte">Mon Compte</a>
          <a href="/loginPage">Déconnexion</a>
        </div>
      </header>

      </>

      );
      };
      export default NavBar;
// import { Link } from "react-router-dom";

// // Définir la fonction NavBar comme une fonction fléchée
// const NavBar = () => {

//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         site name
//       </Link>
//       <ul>
//         {/* Utilisez la fonction CustomLink pour les liens personnalisés */}
//         <CustomLink to="/produit">Produits</CustomLink>
//       </ul>
//     </nav>
//   );
// };

// // Déplacez la déclaration de la fonction CustomLink en dehors de la fonction NavBar
// function CustomLink({ to, children, ...props }) {
//   return (
//     <li className={window.location.pathname === to ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

// export default NavBar;
