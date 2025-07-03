import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import App component
import './assets copy/css/style.css'; // fixed CSS import
import './assets copy/css/404.css';
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Ensure the main App component is rendered */}
  </React.StrictMode>,
  document.getElementById("root") // Ensure `index.html` has <div id="root"></div>
);
