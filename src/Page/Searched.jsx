import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Filtercard } from '../Css'; // Assuming these are styled-components or CSS modules

function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [error, setError] = useState(null);  // Add error state

  const { search } = useParams();

  const getSearched = async (name) => {
    try {
      setLoading(true);  // Set loading true when the fetch starts
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY}&query=${name}&number=20`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const recipes = await response.json();
      setSearchedRecipe(recipes.results);
    } catch (error) {
      setError(error.message);  // Set error message if something goes wrong
    } finally {
      setLoading(false);  // Set loading to false after fetch completes
    }
  };

  useEffect(() => {
    if (search) {
      getSearched(search);
    }
  }, [search]);

  return (
    <div>
      {loading && <p>Loading...</p>} {/* Show loading message while fetching */}
      {error && <p>{`Error: ${error}`}</p>} {/* Show error message if there's an issue */}
      
      <Grid>
        {searchedRecipe.length > 0 ? (
          searchedRecipe.map((item) => (
            <Filtercard key={item.id}>
              <img src={item.image} alt={item.title} /> {/* Add descriptive alt text */}
              <h4>{item.title}</h4>
            </Filtercard>
          ))
        ) : (
          !loading && <p>No recipes found for "{search}"</p> // Show message if no recipes found
        )}
      </Grid>
    </div>
  );
}

export default Searched;
