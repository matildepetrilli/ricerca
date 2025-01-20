import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
//lo colleghiamo dai baldings, cioè i componenti di react-redux.
//questo componente andrà a racchiudere app, inserendo cosi lo store di redax


createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
