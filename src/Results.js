import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h1> {props.result.word} </h1>

          <p className="phonetics-label">/{props.result.phonetic}/</p>
          <Phonetic phonetic={props.result.phonetic} />
        </section>
        {props.result.meanings.length > 0 && (
          <section>
            <div className="border shadow-sm rounded">
              <Meaning meaning={props.result.meanings[0]} />
            </div>
          </section>
        )}
      </div>
    );
  } else {
    return null;
  }
}
