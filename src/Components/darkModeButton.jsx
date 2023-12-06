function DarkMode({darkModeHandler, buttonColor}) {
  return <button 
            onClick={darkModeHandler} 
            className={`dark-mode-button ${buttonColor}_button`}
          >
            Dark Mode
          </button>
}

export default DarkMode