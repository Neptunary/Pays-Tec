
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pays, setPays] = useState([]);

  const fetchPays = () => {
    fetch('http://localhost:3000/pays', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPays(data); // Utilisez setPays pour mettre à jour l'état avec les données récupérées
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  };

  const addPays = () => {
    fetch('http://localhost:3000/pays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pays: 'Nouveau Pays',
        ville: 'Nouvelle Ville'
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchPays();
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout du pays :', error);
      });
  };

  const deletePays = (id) => {
    fetch(`http://localhost:3000/pays/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchPays();
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du pays :', error);
      });
  };

  useEffect(() => {
    fetchPays();
  }, []);

  return (
    <div className="App">
      Affichage de Villes importants et surs à visiter
      {pays.map((pays) => (
        <div key={pays.id}>
          <h2>{pays.nom}</h2>

        </div>
      ))}
      <button onClick={addPays}>Ajouter un pays</button>
      <button onClick={() => deletePays(1)}>Supprimer un pays</button>
    </div>
  );
}

export default App;








