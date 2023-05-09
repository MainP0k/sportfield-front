import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function SportsList() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await api.get('/sports');
        setSports(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des sports:', error);
      }
    };

    fetchSports();
  }, []);

  return (
    <div className="SportsList">
      <h1>Liste des sports</h1>
      <ul>
        {sports.map(sport => (
          <li key={sport.id}>
            <Link to={`/fields/${sport.id}`}>{sport.libelle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SportsList;