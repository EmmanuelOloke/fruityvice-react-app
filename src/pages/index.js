import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SearchForm from "../components/Search/SearchForm";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import FruitCard from "../components/FruitCard/FruitCard";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [fruitInDetail, setFruitinDetail] = useState({});

  const getFruitDetails = async () => {
    try {
      const response = await fetch(
        `https://fruityvice.com/api/fruit/${fruitInDetail}`
      );
      console.log("response = ", response);
      const oneFruit = await response.json();
      if (response.status === 200) {
        setFruitinDetail(oneFruit);
        console.log(`oneFruit = `, oneFruit);
      }
    } catch (error) {
      console.log(
        "Something went wrong while fetching the fruit details from the server!",
        error
      );
    }
  };

  const fetchFruits = async () => {
    try {
      const response = await fetch("https://fruityvice.com/api/fruit/all");
      const fruits = await response.json();
      if (response.status === 200) {
        setFruits(fruits);
        setFilteredFruits(fruits);
      }
    } catch (error) {
      console.log("Something went wrong while fetching the fruits", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <SearchForm fruits={fruits} setFruits={setFruits} />
      <SearchFilter
        fruits={fruits}
        filteredFruits={filteredFruits}
        setFilteredFruits={setFilteredFruits}
      />
      <FruitCard fruits={filteredFruits} getFruitDetails={getFruitDetails} /> 
    </>
     
    
  );
};

export default Home;
