import Tile from "./Tile"

function Board({ tiles, backgroundColor, color, isDarkMode }) {
  return <div className = "board">
    <style>{`body { background-color: ${backgroundColor}; color: ${color}}`}</style>
    <>
      {/* Row 1 */}
      <Tile
        isDarkMode = {isDarkMode}
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[0]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[1]}
      />
      <Tile
          backgroundColor={isDarkMode ? 'white' : 'tan'}
          value = {tiles[2]}
        />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[3]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[4]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[5]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[6]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[7]}
      />

      {/* Row 2 */}
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[8]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[9]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[10]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[11]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[12]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[13]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[14]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[15]}
      />

      {/* Row 3 */}
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[16]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[17]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[18]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[19]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[20]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[21]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[22]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[23]}
      />

      {/* Row 4 */}
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[24]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[25]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[26]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[27]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[28]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[29]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[30]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[31]}
      />

      {/* Row 5 */}
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[32]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[33]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[34]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[35]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[36]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[37]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[38]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[39]}
      />

      {/* Row 6 */}
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[40]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[41]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[42]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[43]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[44]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[45]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[46]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[47]}
      />

      {/* Row 7 */}
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[48]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[49]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[50]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[51]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[52]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[53]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[54]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[55]}
      />

      {/* Row 8 */}
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[56]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[57]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[58]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[59]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[60]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[61]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'black' : 'brown'}
        value = {tiles[62]}
      />
      <Tile
        backgroundColor={isDarkMode ? 'white' : 'tan'}
        value = {tiles[63]}
      />
    </>
  </div>
} 

export default Board