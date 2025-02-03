import React, { useState } from "react";

export default function Photos(props) {
  if (Array.isArray(props.photos) && props.photos.length > 0) {
    return (
      <div>
        <br />
        <h2> Photo Gallery</h2>
        <div className="row">
          {props.photos.map((photo, index) => (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt="photo"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <p>No photos available.</p>;
  }
}
