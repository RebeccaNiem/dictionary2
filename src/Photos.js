import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (Array.isArray(props.photos) && props.photos.length > 0) {
    return (
      <div>
        <br />

        <h2>
          Photo Gallery <i class="bi bi-image"></i>
        </h2>
        <p />
        <div className="row">
          {props.photos.map((photo, index) => (
            <div className="col-4" key={index}>
              <div className="image-row">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt=""
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
