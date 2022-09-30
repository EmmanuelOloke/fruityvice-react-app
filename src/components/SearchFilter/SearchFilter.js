import React from 'react';
import Select from 'react-select';

import { groupedOptions } from './docs/data';

import './search-filter.css';

// Group styles and groupBadgeStyle initializations
const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBFFF5',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

// Format group label styling with grouped options as input
const formatGroupLabel = (groupedOptions) => (
  <div style={groupStyles}>
    <span>{groupedOptions.label}</span>
    <span style={groupBadgeStyles}>{groupedOptions.options.length}</span>
  </div>
);

const SearchFilter = ({ setFruits }) => {
  // Taking setFruits as prop, make request to the API based on whatever the value of the Select element (filterOption.value) is
  const handleFilterChange = async (filterOption) => {
    if (
      filterOption.value === 'rosaceae' ||
      filterOption.value === 'rutaceae' ||
      filterOption.value === 'anacardiaceae' ||
      filterOption.value === 'cucurbitaceae'
    ) {
      const response = await fetch(`https://fruityvice.com/api/fruit/family/${filterOption.value}`);
      const families = await response.json();

      setFruits(families);
    } else if (
      filterOption.value === 'citrus' ||
      filterOption.value === 'malus' ||
      filterOption.value === 'prunus' ||
      filterOption.value === 'rubus' ||
      filterOption.value === 'fragaria'
    ) {
      const response = await fetch(`https://fruityvice.com/api/fruit/genus/${filterOption.value}`);
      const genus = await response.json();

      setFruits(genus);
    } else if (
      filterOption.value === 'carbohydrates' ||
      filterOption.value === 'protein' ||
      filterOption.value === 'fat' ||
      filterOption.value === 'calories' ||
      filterOption.value === 'sugar'
    ) {
      const response = await fetch(`https://fruityvice.com/api/fruit/all`);
      const all = await response.json(); // Fetch all fruits again, to get an array of all fruits

      // Sort all fruits array from highest to lowest based on the value of the nutrition that was selected.
      const sortedAll = all.sort((a, b) =>
        a.nutritions[filterOption.value] > b.nutritions[filterOption.value]
          ? -1
          : a.nutritions[filterOption.value] < b.nutritions[filterOption.value]
          ? 1
          : 0
      );

      setFruits(sortedAll); // Set the fruits state to the sorted all array, so the state can be updated throughout the app and the appropriate data rendered.
    } else console.error('something went wrong');
  };

  return (
    <>
      <Select
        className="search-filter"
        options={groupedOptions}
        placeholder="Filter Fruits"
        formatGroupLabel={formatGroupLabel}
        backgroundColor="EBFFF5"
        onChange={handleFilterChange}
      />
    </>
  );
};

export default SearchFilter;
