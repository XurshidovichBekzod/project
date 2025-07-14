import React from 'react'
import "./Clean.css"
import icons from "../../assets/checkmark.svg"
import image from "../../assets/image.svg"

const Clean = () => {
    return (
        <section className='conteainerTwo'>
            <div className='cleanFlex'>
                <div className='cleanContext'>
                    <h1>Clean and <br /> fragrant soy wax</h1>
                    <h3>Made for your home and for your wellness</h3>
                    <div className='iconFlex'>
                        <img src={icons} alt="" />
                        <p><strong>Eco-sustainable:</strong>All recyclable materials, 0% CO2 emissions</p>
                    </div>
                    <div className='iconFlex'>
                        <img src={icons} alt="" />
                        <p><strong>Hyphoallergenic:</strong> 100% natural, human friendly ingredients </p>
                    </div>
                    <div className='iconFlex'>
                        <img src={icons} alt="" />
                        <p><strong>Handmade:</strong> All candles are craftly made with love.</p>
                    </div>
                    <div className='iconFlex'>
                        <img src={icons} alt="" />
                        <p><strong>Long burning:</strong> No more waste. Created for last long.</p>
                    </div>
                    <button className='btn'>Learn more</button>
                </div>
                <div className='imgClean'>
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Clean