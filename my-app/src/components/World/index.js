import React from "react"
import WorldMap from "https://cdn.skypack.dev/react-world-map@2.3.0";
import "./index.css"

const World = ()  => {
  const [selected, onSelect] = React.useState('na');
  return (
    <>
     
      <WorldMap selected={ selected } onSelect={ onSelect } />
      
      
    </>
  );
}

export default World