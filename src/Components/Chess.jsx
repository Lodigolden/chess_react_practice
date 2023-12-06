import { useState, useEffect} from "react"; 
import Board from "./Board"; 
import DarkMode from "./darkModeButton"; 

function Chess(darkMode) {
  const [tiles, setTiles] = useState(Array(64).fill(null)); 

  /* Function to handle the dark mode stuff:  */
  const [isDarkMode, setDarkMode] = useState(false); 
  const toggleDarkMode = () => {
    setDarkMode(isDarkMode => !isDarkMode); 
  }

  return <div>
    <h1>Chess</h1>
    <Board
      tiles = {tiles}
      backgroundColor = {isDarkMode ? '#23272f;' : '#c0dccd;'}
      color = {isDarkMode ? 'white' : 'black'}
      isDarkMode = {isDarkMode}
    />
    <DarkMode 
      darkModeHandler = {toggleDarkMode}
      buttonColor = {isDarkMode ? 'blue' : 'tan'}
    />
  </div>
}

export default Chess; 