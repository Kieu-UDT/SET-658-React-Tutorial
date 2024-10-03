// MyApp
import { createRoot } from "react-dom/client";
import  MyApp  from "./App.js";


// clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

//Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render( <MyApp/>);

