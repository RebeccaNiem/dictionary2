import React from "react";

export default function Phonetic(props) {
  // Check if the phonetic object has an audio property
  if (!props.phonetic || !props.phonetic.audio) {
    return null; // Return null if there is no phonetic data or audio
  }

  return (
    <div className="Phonetic">
      <audio controls>
        <source src={props.phonetic.audio} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
