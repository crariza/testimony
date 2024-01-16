import React from "react";

function Testimonial({ name, location, position, description, company, url }) {
  return (
    <div className="testimony-card">
      <div className="image-container">
        <img className="image" src={url} alt="person" />
      </div>
      <div className="description">
        <h4>
          {name}
          <span className="description-location">{` in ${location}`}</span>
        </h4>
        <h4>
          {position}
          <span>{` at ${company}`}</span>
        </h4>
        <p className="description-person">{description}</p>
      </div>
    </div>
  );
}

export default Testimonial;
