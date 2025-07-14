import React from 'react'
import "./Testimonials.css"
import img from "../../assets/img.svg"
import star from "../../assets/stars.svg"

const Testimonials = () => {
    return (
        <section className='backround'>
            <div className='container'>
                <div className='productsText'>
                    <h1>Testimonials</h1>
                    <p>Some quotes from our happy customers</p>
                </div>
                <div className='cardFlex'>
                    <div className='card'>
                        <img className='first' src={img} alt="" />
                        <img className='second' src={star} alt="" />
                        <h1>“I love it! No more air fresheners”</h1>
                        <p>Luisa</p>
                    </div>
                    <div className='card'>
                        <img className='first' src={img} alt="" />
                        <img className='second' src={star} alt="" />
                        <h1>“I love it! No more air fresheners”</h1>
                        <p>Luisa</p>
                    </div>
                    <div className='card'>
                        <img className='first' src={img} alt="" />
                        <img className='second' src={star} alt="" />
                        <h1>“I love it! No more air fresheners”</h1>
                        <p>Luisa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials