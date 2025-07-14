import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Products.css";
const limit = 8
const API_URL = "https://dummyjson.com"

const Products = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios
            .get(`${API_URL}/products`, {params: {limit: limit}})
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => {
                console.log(err)
            })
            .finally()
    }, [])



    return (
        <section className='containers'>
            <div className='productsText'>
                <h1>Products</h1>
                <p>Order it for you or for your beloved ones</p>
            </div>
            <div className='productsGrid'>
                {
                    products?.map((item) => (
                        <div className='productsCard' key={item.id}>
                            <img className='img' src={item.thumbnail} alt="" />
                            <div className='context'>
                                <p>{item.brand}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Products;
