import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch your credentials from the .env file
  const EDAMAM_APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
  const EDAMAM_APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

  const fetchRecipes = async (query = 'gourmet') => {
    setLoading(true);
    try {
      const response = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchTerm);
  };

  return (
      <div className="App">
        <h1>Gourmet Delight</h1>
        <form onSubmit={handleSearch}>
          <input
              type="text"
              placeholder="Search for gourmet recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="recipe-list">
              {recipes.length > 0 ? (
                  recipes.map(({ recipe }, index) => (
                      <div className="recipe-card" key={index}>
                        <img src={recipe.image} alt={recipe.label} />
                        <h3>{recipe.label}</h3>
                        <p>Calories: {Math.round(recipe.calories)}</p>
                        <a
                            href={recipe.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          View Recipe
                        </a>
                      </div>
                  ))
              ) : (
                  <p>No recipes found. Try a different search.</p>
              )}
            </div>
        )}
      </div>
  );
};

export default App;
