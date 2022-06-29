import { Routes, Route } from "react-router-dom";
import "./App.css";
import Meal from "./components/Meal";
import RecipeInfo from "./components/RecipeInfo";

function App({}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </div>
  );
}

export default App;
