import { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';

import { genuses, families, groupedOptions } from './docs/data';

import './search-filter.css';

// Format group label styling with grouped options as input
const formatGroupLabel = (groupedOptions) => <div>{groupedOptions.label}</div>;

const SearchFilter = ({ fruits, filteredFruits, setFilteredFruits }) => {
  // Create two state variables to hold checkboxes filter criteria for the fruit Genus and Family
  const [genusCriteria, setGenusCriteria] = useState([]);
  const [familyCriteria, setFamilyCriteria] = useState([]);

  const handleGenusCriteria = (e) => {
    const value = e.target.value;
    // Make a copy of the genusCriteria state array. Doing this because it is not best practice to directly mutate a state variable, so it makes sense to make a copy of it.
    // Modify that copy and then set the state variable to the copy using the setState() function.
    const genusCriteriaCopy = [...genusCriteria];
    // check if the value is already existing in genusCriteria state array, if it is, remove it. This will ensure the value only gets added if it's not already present in the state array
    if (genusCriteria.includes(value)) {
      // Find the index of the already existing value and remove it using the Array.splice() function, starting from the index and removing 1 item.
      const index = genusCriteriaCopy.indexOf(value);
      genusCriteriaCopy.splice(index, 1);
    } else {
      // Else modify the genusCriteriaCopy and add the value it
      genusCriteriaCopy.push(value);
    }
    // Finally set the genusCriteria state variable to the genusCriteriaCopy array.
    setGenusCriteria(genusCriteriaCopy);
  };

  // This function uses the same logic as the handleGenusCriteria above, so the same comments therein serve as explanation to what is being done.
  const handleFamilyCriteria = (e) => {
    const value = e.target.value;
    const familyCriteriaCopy = [...familyCriteria];
    if (familyCriteria.includes(value)) {
      const index = familyCriteriaCopy.indexOf(value);
      familyCriteriaCopy.splice(index, 1);
    } else {
      familyCriteriaCopy.push(value);
    }
    setFamilyCriteria(familyCriteriaCopy);
  };

  // This function works on the React Select tag and uses the selected drop down filterOption value to sort the exisiting filteredFruits array
  const handleFilterChange = (filterOption) => {
    // Sort all fruits array based on the values of the nutrition that was selected.
    // Also created a copy of the filteredFruits array here, so it can be conviniently modified as required by best practices
    const filteredCopy = [...filteredFruits];
    // Using the Array.sort() method as understood from MDN documentation to sort filteredCopy based the content of the selected nutrient from high to low
    let sortedAll = [];
    const sorted = filteredCopy.sort((a, b) =>
      a.nutritions[filterOption.value] > b.nutritions[filterOption.value]
        ? -1
        : a.nutritions[filterOption.value] < b.nutritions[filterOption.value]
        ? 1
        : 0
    );

    if (filterOption.order === 'highToLow') {
      sortedAll = sorted;
    } else {
      sortedAll = sorted.reverse();
    }
    setFilteredFruits(sortedAll); // Set the filteredFruits state to the sortedAll array, so the state can be updated throughout the app and the appropriate data rendered.
  };

  useEffect(() => {
    // First check if the genusCriteria and familyCriteria state arrays are empty, and if they are setFilteredFruits to fruits variable containing all fruits as fetched from the API.
    if (genusCriteria.length === 0 && familyCriteria.length === 0) {
      // render the original array of fruits
      setFilteredFruits(fruits);
    } else {
      // If the genusCriteria or the familyCriteria array contains some items, then forEach of those item, make a copy of the fruits state array and perform a filter on it.
      // Then return only values that match with the genus or the family selected.
      // Spread whatever content is in the filter array (might be empty to begin with) and add the copy of the fuits array that was made to it, then assign everything back to the filter array
      let filtered = [];
      if (genusCriteria.length > 0) {
        genusCriteria?.forEach((item) => {
          filtered = [
            ...filtered,
            ...filteredFruits.filter((match) => match.genus.toLowerCase() === item),
          ];
        });
      }
      if (familyCriteria.length > 0) {
        familyCriteria?.forEach((item) => {
          filtered = [
            ...filtered,
            ...filteredFruits.filter((match) => match.family.toLowerCase() === item),
          ];
        });
      }

      // Sometimes it's possible to have a fruit belonging to a genus as well as a family that has been checked, so the filtered array is filtered again to contain only unique items.
      const unique = {};
      const arrFiltered = filtered.filter((obj) => !unique[obj.id] && (unique[obj.id] = true));
      setFilteredFruits(arrFiltered);
    }
  }, [genusCriteria, familyCriteria]); // The dependencies that triggers a re-render are genusCriteria and familyCriteria. This may have yellow squiggly line, which can be ignored.

  return (
    <>
      <div className="filter-container">
        <div className="horizontal">
          <div className="genus-checkboxes">
            <h5>Genus</h5>
            {genuses.map((genus) => (
              <Fragment key={genus}>
                <input
                  type="checkbox"
                  name={`${genus}`}
                  value={`${genus}`}
                  onChange={handleGenusCriteria}
                />
                <label htmlFor="genus" style={{ textTransform: 'capitalize' }}>
                  {genus}
                </label>
                <br />
              </Fragment>
            ))}
          </div>
          <div className="family-checkboxes">
            <h5>Family</h5>
            {families.map((family) => (
              <Fragment key={family}>
                <input
                  type="checkbox"
                  name={`${family}`}
                  value={`${family}`}
                  onChange={handleFamilyCriteria}
                />
                <label htmlFor="family" style={{ textTransform: 'capitalize' }}>
                  {family}
                </label>
                <br />
              </Fragment>
            ))}
          </div>
        </div>
        <Select
          className="search-filter-select"
          options={groupedOptions}
          placeholder="Sort Fruits by Nutrients"
          formatGroupLabel={formatGroupLabel}
          onChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default SearchFilter;
