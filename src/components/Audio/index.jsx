import React from 'react';


function Audio(props) {
  const auto = props.auto;
  return (
    <audio autoPlay = {auto} src="https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"></audio>
  );
}

export default Audio;