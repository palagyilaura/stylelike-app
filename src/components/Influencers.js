import React from "react";
import "../css/Influencers.css";
import photo1 from "../img/photo-1.png";
import photo2 from "../img/photo-2.png";
import photo3 from "../img/photo-3.png";
import photo4 from "../img/photo-4.png";
import photo5 from "../img/photo-5.png";

function Influencers() {
  return (
    <section id="influencers">
      <h2 className="infl-title">Top influencers</h2>
      <div className="infl-container">
        <div className="infl-row">
          <img src={photo1} className="" />
          <div>
            <p className="infl-name">Mildred Estrada</p>
            <p className="infl-rate">Engagement rate: 25%</p>
          </div>
          <div>
            <button className="add-fav">ADD TO FAVOURITES</button>
          </div>
        </div>
        <hr />
        <div className="infl-row">
          <img src={photo2} className="" />
          <div>
            <p className="infl-name">Charlotte Morris</p>
            <p className="infl-rate">Engagement rate: 20%</p>
          </div>
          <div>
            <button className="add-fav">ADD TO FAVOURITES</button>
          </div>
        </div>
        <hr />
        <div className="infl-row">
          <img src={photo3} className="" />
          <div>
            <p className="infl-name">Sadie Brooks</p>
            <p className="infl-rate">Engagement rate: 18%</p>
          </div>
          <div>
            <button className="add-fav">ADD TO FAVOURITES</button>
          </div>
        </div>
        <hr />
        <div className="infl-row">
          <img src={photo4} className="" />
          <div>
            <p className="infl-name">Mary Nichols</p>
            <p className="infl-rate">Engagement rate: 18%</p>
          </div>
          <div>
            <button className="add-fav">ADD TO FAVOURITES</button>
          </div>
        </div>
        <hr />
        <div className="infl-row">
          <img src={photo5} className="" />
          <div>
            <p className="infl-name">Teresa Austin</p>
            <p className="infl-rate">Engagement rate: 17%</p>
          </div>
          <div>
            <button className="add-fav">ADD TO FAVOURITES</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Influencers;
