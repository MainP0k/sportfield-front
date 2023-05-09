import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">Accueil</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/login">Connexion</Link>
      <Link to="/logout">Déconnexion</Link>
    </nav>
  );
}

export default Navbar;