import React from 'react';
import './LoginPage.css'; 




 
const LoginPage = () => { 
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Adresse email :</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <button type="submit">Se connecter</button>
          </div>
        </form>
        <div className="separator">OU</div>
        <div className="social-buttons">
          <button className="google-button">S'inscrire avec Google</button>
          <button className="apple-button">S'inscrire avec Apple</button>
          <button className="email-button">S'inscrire par Email</button>
        </div>
      </div>
    </div>
  );
  
};

export default LoginPage;
