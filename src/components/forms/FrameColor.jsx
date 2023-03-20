import React from 'react'
import { useSelector } from 'react-redux'
import './FormStyles.scss'

const FrameColor = ({ onChange }) => {

  const { color } = useSelector((state) => state.form)

  return (
    <div className='form'>
      <label htmlFor="frame-color">Frame Color </label>
      <select id="frame-color" name="frame-color" onChange={onChange} value={color}>
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