import React, { useState } from 'react';
import './RangeSlider.css'; // Import the CSS file for styling

const RangeSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="range-slider">
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={handleChange} 
        className="slider" 
      />
      <div className="value">{value}</div>
    </div>
  );
};

export default RangeSlider;
