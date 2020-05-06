import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import allRecipes from "../../data/allRecipes";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import SocialShare from "../SocialShare";
import "./recipe-item.css";

const RecipeItem = () => {
  let { recipeID } = useParams();
  let recipe = allRecipes[recipeID];
  if (recipe !== undefined) {
    return (
      <div className="recipe-item-container">
        <div className="recipe-item-player-wrapper">
          <ReactPlayer
            className="react-player"
            url={recipe.url}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="recipe-item-title-container">
          <p>Level: {recipe.difficulty}</p>
          <p style={{ fontSize: "2rem" }}>{recipe.title}</p>
          <p>Serves: {recipe.servings}</p>
        </div>
        <div style={{ width: "90%" }}>
          <div className="recipe-level-divider">
            <h2>Ingredients</h2>
            <hr
              style={{
                border: "2px var(--byte-grey) solid",
                margin: "auto",
              }}
            />
          </div>
          <div className="recipe-item-ingredients-list">
            {recipe.items.map((x, n) => (
              <div className="recipe-item-ingredient">
                <input type="checkbox" />
                <p>{x}</p>
              </div>
            ))}
          </div>
          <div className="recipe-level-divider">
            <h2>Directions</h2>
            <hr
              style={{
                border: "2px var(--byte-grey) solid",
                margin: "auto",
              }}
            />
          </div>
          <div className="recipe-item-instructions-list">
            {recipe.directions.map((x, n) => (
              <div className="recipe-item-ingredient">
                <input type="checkbox" />
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recipe-item-share-xp-container">
          <SocialShare />
          <div
            className="recipe-item-xp-button"
            onClick={() => alert("You got XP!")}
          >
            <FA icon={faUtensils} size="1x" />
            <p>I Made It!</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="recipe-item-container">
        <p>No recipe found with that ID</p>
      </div>
    );
  }
};

export default RecipeItem;
