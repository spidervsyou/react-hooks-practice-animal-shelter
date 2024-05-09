import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

const App = () => {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  const onChangeType = (type) => {
    setFilters({ type });
  };

  const onFindPetsClick = () => {
    let url = 'http://localhost:3001/pets';
    if (filters.type !== 'all') {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(error => console.error('Error fetching pets:', error));
  };

  const onAdoptPet = (id) => {
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true };
      }
      return pet;
    });
    setPets(updatedPets);
  };

  return (
    <div>
      <h1>Animal Shelter</h1>
      <Filters
        filters={filters}
        onChangeType={onChangeType}
        onFindPetsClick={onFindPetsClick}
      />
      <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
    </div>
  );
};

export default App;
