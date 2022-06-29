import React, { useEffect, useState } from "react";
import "./style.css";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search For your next meal!</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            mollitia hic optio, delectus in soluta inventore temporibus iusto
            qui quia obcaecati quae rem atque quas. Perferendis esse natus id
            laudantium?
          </h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="searchBar"
            placeholder="search for your next dish!"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="container">
          {show ? <MealItem data={item} /> : "Not Found"}
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};

export default Meal;
