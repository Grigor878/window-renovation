import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setMaterial, setGlass, setColor } from '../../store/slices/formSlice'
import FrameMaterial from '../../components/forms/FrameMaterial'
import GlassType from '../../components/forms/GlassType'
import FrameColor from '../../components/forms/FrameColor'
import './Home.scss'


const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/summary')
    };

    const handleMaterialChange = (e) => {
        dispatch(setMaterial(e.target.value))
    };

    const handleGlassChange = (e) => {
        dispatch(setGlass(e.target.value))
    };

    const handleColorChange = (e) => {
        dispatch(setColor(e.target.value))
    };

    return (
        <section className='home'>
            <div className='container'>
                <h1>Window Renovation</h1>
                <form onSubmit={handleSubmit} className="home__form">
                    <FrameMaterial onChange={handleMaterialChange} />
                    <GlassType onChange={handleGlassChange} />
                    <FrameColor onChange={handleColorChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Home;