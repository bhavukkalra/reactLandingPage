import ReactDOM from "react-dom/client";

import App from "./App.jsx";
/*
the CSS rules defined in index.css are applied globally within the scope of your React application, 
styling all elements rendered within <App /> and its child components.
*/

/*
Normally these types of imports don't work in a sample js file
but in jsx they do work

Q/A
*/



import "./index.css";

const entryPoint = document.getElementById("root");
/*
Renders the root component App and any other nested components it might have
i.e start of rendering of react component tree
*/



ReactDOM.createRoot(entryPoint).render(<App />);
