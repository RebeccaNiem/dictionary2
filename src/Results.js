import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h1> {props.result.word} </h1>

        <section>
          {props.result.phonetic ? (
            <div>
              <Phonetic phonetic={props.result.phonetic} />{" "}
            </div>
          ) : (
            <p>No phonetics available.</p>
          )}
        </section>

        {props.result.meanings.length > 0 && (
          <section>
            <div className="info-box">
              <Meaning meanings={props.result.meanings[0]} />
            </div>
          </section>
        )}
      </div>
    );
  } else {
    return null;
  }
}
