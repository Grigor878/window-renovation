import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs"
import './Summary.scss'

const SummaryPage = () => {

    const { material, glass, color } = useSelector((state) => state.form)
    const navigate = useNavigate()

    return (
        <section className='summary'>
            <div className='container'>
                <h1>Summary</h1>
                {material && glass && color ?
                    <div className='summary__result'>
                        <p>Frame Material - {material}</p>
                        <p>Glass Type - {glass}</p>
                        <p>Frame Color - {color}</p>
                    </div> :
                    <div className='summary__empty'>
                        <p>Please complete all fields on the home page.</p>
                        <button onClick={() => navigate(-1)}><BsArrowLeft />Go Back</button>
                    </div>}
            </div>
        </section>
    );
};

export default SummaryPage;