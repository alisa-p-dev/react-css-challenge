import React from 'react';
import './style.scss';


const Card = () => {
  return (
      <div className="card">
        <img src='https://t3.ftcdn.net/jpg/01/57/36/74/240_F_157367489_FSqP231EvpCB9fqD5s5PhCp8MOuEcfih.jpg' alt='house' ></img>
        <div className="card-container">
        <h2 className="card-title">House for rent</h2>
        <div className="card-rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="raiting">  5.0(123)</span>
        </div>
        <h4 className="secondary-text">Secondary text</h4>
        <p className="card-description">Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Modi, alias officia quas porro perspiciatis a consequatur 
        </p>
        <h4 className="card-subtitle">Subtitle</h4>
        <ul className="card-tags-container">
          <li className="tag">tag1 </li>
          <li className="tag">tag2</li>
          <li className="tag">tag3</li>
          <li className="tag">tag4</li>
        </ul>
        </div>
      </div>
  );
};

export default Card;
