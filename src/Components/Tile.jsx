function Tile({ backgroundColor, value }) {
  return <div className = {`tile ${backgroundColor}_tile`}>
    {value}
  </div>
}

export default Tile