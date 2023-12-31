import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import StarRating from "./star.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      color="blue"
      size={30}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={5}
    />
    <Testing messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} /> */}
  </React.StrictMode>
);

function Testing({ messages }) {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        onSetRating={setMovieRating}
        messages={messages}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
