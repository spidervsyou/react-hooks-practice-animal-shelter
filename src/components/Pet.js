import React from 'react';

const Pet = ({ pet, onAdoptPet }) => {
  const handleAdoptClick = () => {
    onAdoptPet(pet.id);
  };

  return (
    <div className="card">
      <div className="content">
        <div className="header">
          {pet.gender === 'male' ? '♂ ' : '♀ '}
          {pet.name}
        </div>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
};

export default Pet;
