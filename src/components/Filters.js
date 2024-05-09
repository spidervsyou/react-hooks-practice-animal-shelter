import React from 'react';

const Filters = ({ filters, onChangeType, onFindPetsClick }) => {
  const handleChangeType = (e) => {
    onChangeType(e.target.value);
  };

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select value={filters.type} onChange={handleChangeType}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <button className="ui secondary button" onClick={onFindPetsClick}>
        Find pets
      </button>
    </div>
  );
};

export default Filters;
