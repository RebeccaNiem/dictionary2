import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=280o02ba0daf2b414a53ctfe4e6155a2`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "280o02ba0daf2b414a53ctfe4e6155a2";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handleImageResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="🔎 Type a word"
        />
        <button type="submit">Search</button>
      </form>
      <Results result={results} />
      <Photos photos={photos} />
    </div>
  );
}
