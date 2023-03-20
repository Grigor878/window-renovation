import React from 'react'
import { useSelector } from 'react-redux'
import './FormStyles.scss'

const GlassType = ({ onChange }) => {

  const { glass } = useSelector((state) => state.form)

  return (
    <div className='form'>
      <label htmlFor="glass-type">Glass Type </label>
      <select id="glass-type" name="glass-type" onChange={onChange} value={glass}>
        <option value="">Select</option>
        <option value="clear">Clear</option>
        <option value="frosted">Frosted</option>
        <option value="tined">Tinted</option>
        <option value="lowe">Low-E</option>
      </select>
    </div>
  );
};

export default GlassType;