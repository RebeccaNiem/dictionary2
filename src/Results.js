import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h1> {props.result.word} </h1>
          <p className="phonetics-label">/{props.result.phonetic}/</p>
        </section>
        {props.result.meanings.length > 0 && (
          <section>
            <Meaning meaning={props.result.meanings[0]} />
          </section>
        )}
      </div>
    );
  } else {
    return null;
  }
}
