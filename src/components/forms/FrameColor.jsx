import React from 'react'
import './FormStyles.scss'

const FrameColor = ({ onChange }) => {

  return (
    <div className='form'>
      <label htmlFor="frame-color">Frame Color </label>
      <select id="frame-color" name="frame-color" onChange={onChange}>
        <option value="">Select</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
      </select>
    </div>
  );
};

export default FrameColor;