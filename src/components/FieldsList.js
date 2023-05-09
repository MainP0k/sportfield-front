import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api';

function FieldsList() {
  const { sportId } = useParams();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await api.get(`/fields/${sportId}`);
        setFields(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des terrains:', error);
      }
    };

    fetchFields();
  }, [sportId]);

  return (
    <div className="FieldsList">
      <h1>Liste des terrains</h1>
      <ul>
        {fields.map(field => (
          <li key={field.id}>
            <Link to={`/reservation/${field.id}`}>{field.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldsList;