import React from 'react'
import { useSelector } from 'react-redux'
import './FormStyles.scss'

const FrameMaterial = ({ onChange }) => {

  const { material } = useSelector((state) => state.form)


  return (
    <div className='form'>
      <label htmlFor="frame-material">Frame Material </label>
      <select id="frame-material" name="frame-material" onChange={onChange} value={material}>
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