// tictactoe

import { createRoot } from "react-dom/client";
import Game from "./components/Game/tictactoe";
import "./tictactoe.css";

// clear the existing HTML content
document.body.innerHTML = '<div id="game"></div>';

//Render your React component instead
const root = createRoot(document.getElementById("game"));
root.render(<Game />);

