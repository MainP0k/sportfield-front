import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function FieldReservation() {
  const { fieldId } = useParams();
  const [field, setField] = useState(null);

  useEffect(() => {
    const fetchField = async () => {
      try {
        const response = await api.get(`/fields/${fieldId}`);
        setField(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du terrain:', error);
      }
    };

    fetchField();
  }, [fieldId]);

  return (
    <div className="FieldReservation">
      {field ? (
        <>
          <h1>Réservation du terrain : {field.name}</h1>
          {/* Formulaire de réservation */}
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default FieldReservation;