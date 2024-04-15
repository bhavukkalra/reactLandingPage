import ReactDOM from "react-dom/client";

import App from "./App.jsx";
/*
he CSS rules defined in index.css are applied globally within the scope of your React application, 
styling all elements rendered within <App /> and its child components.
*/

import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
