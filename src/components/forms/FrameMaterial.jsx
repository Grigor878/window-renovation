import React from 'react'
import './FormStyles.scss'

const FrameMaterial = ({ onChange }) => {

  return (
    <div className='form'>
      <label htmlFor="frame-material">Frame Material </label>
      <select id="frame-material" name="frame-material" onChange={onChange}>
        <option value="">Select</option>
        <option value="wood">Wood</option>
        <option value="aluminum">Aluminum</option>
        <option value="vinyl">Vinyl</option>
        <option value="fiberglass">Fiberglass</option>
      </select>
    </div>
 
  );
};

export default FrameMaterial;