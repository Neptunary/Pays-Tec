import React, { useState, useEffect } from 'react';

function PaysComponent() {
  const [pays, setPays] = useState('');
  const [informationPays, setInformationPays] = useState(null);

  const afficherInformation = () => {
    alert("Vous avez tapé : " + pays);
  };

  useEffect(() => {
    if (pays.trim() !== '') {
      fetch(`https://restcountries.com/v3.1/name/${pays}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            setInformationPays(data[0]);
          } else {
            alert("Pays non trouvé. Veuillez vérifier l'orthographe et réessayer.");
          }
        })
        .catch(error => console.error('Erreur lors de la récupération des informations du pays', error));
    } else {
      setInformationPays(null);
    }
  }, [pays]);

  return (
    <div>
      <label htmlFor="paysInput">Tapez un pays :</label>
      <input type="text" id="paysInput" placeholder="Entrez un pays" value={pays} onChange={(e) => setPays(e.target.value)} />

      <button onClick={afficherInformation}>Information</button>

      {informationPays && (
        <div>
          <h2>Informations sur le pays</h2>
          <p>Capitale: {informationPays.capital}</p>
          <p>Population: {informationPays.population}</p>
          <p>Continent: {informationPays.region}</p>
          <p>Villes à visiter: {/* Ajoutez ici une liste de villes à visiter en fonction des données disponibles */}</p>
          {/* Ajoutez d'autres informations selon les propriétés disponibles dans les données du pays */}
        </div>
      )}
    </div>
  );
}

export default PaysComponent;








