import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as router,route, BrowserRouter } from 'react-router-dom';
import App from './App';
import LoginPage from './components/loginPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <LoginPage />
    </React.StrictMode>
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);