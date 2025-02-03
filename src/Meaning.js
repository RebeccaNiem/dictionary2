import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <ul>
        <p className="definition-label">
          <strong>definition:</strong>{" "}
          {props.meaning.definitions && props.meaning.definitions.length > 0
            ? props.meaning.definitions.join(",")
            : "No definitions available"}
        </p>
        <p className="example-label">
          <strong>example:</strong>{" "}
          {props.meaning.examples && props.meaning.examples.length > 0
            ? props.meaning.examples.join(", ")
            : "No examples available"}
        </p>

        <p className="synonym-label">
          <strong>Synonyms:</strong>{" "}
          {props.meaning.synonyms && props.meaning.synonyms.length > 0
            ? props.meaning.synonyms.join(", ")
            : "No synonym available"}
        </p>
      </ul>
    </div>
  );
}
