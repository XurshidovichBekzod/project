import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Products.css";

const API_URL = 'https://dummyjson.com';
const limit = 8;

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`${API_URL}/products`, { params: { limit } })
            .then(res => {
                setProducts(res.data.products);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <section>
            <div className='productsText'>
                <h1>Products</h1>
                <p>Order it for you or for your beloved ones</p>
            </div>
            <div className="products-wrapper">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {!loading && !error && products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} className="product-img" />
                        <div className="product-info">
                            <p className="product-title">{item.title}</p>
                            <p className="product-price">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
