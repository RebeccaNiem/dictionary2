import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <ul>
        <p className="definition-label">
          <strong>definition:</strong>{" "}
          {props.meanings.definition && props.meanings.definition.length > 0
            ? props.meanings.definition
            : "No definitions available"}
        </p>
        <p className="example-label">
          <strong>example:</strong>{" "}
          {props.meanings.example && props.meanings.example.length > 0
            ? props.meanings.example
            : "No examples available"}
        </p>
        <p className="synonym-label">
          <strong>synonym:</strong>{" "}
          {props.meanings.synonyms[0] && props.meanings.synonyms[0].length > 0
            ? props.meanings.synonyms[0]
            : "No synonyms available"}
        </p>
      </ul>
    </div>
  );
}
