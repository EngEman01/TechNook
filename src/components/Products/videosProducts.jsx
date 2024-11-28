import React from 'react';
import { Link } from 'react-router-dom';
import styleAllProduct from './AllProducts.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Usefatch from '../ProductData/getProduct';

export default function VideoProducts() {
    const products = Usefatch();

    return (
        <>
            <div className={styleAllProduct.allPage}>
                <div className={styleAllProduct.productEle}>
                    {products
                        .filter((product) => product.category === "Audio & Video")
                        .map((product) => (
                            <div className={styleAllProduct.productItem} key={product.id}>
                                {/* Use the first image in the array */}
                                <img src={product.image[0]} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>Brand: {product.brand}</p>
                                <p>
                                    Price: <span style={{ color: 'green' }}>${product.price}</span>
                                </p>
                                <p>{product.description}</p>
                                <button className={styleAllProduct.btnDetails}>
                                    <i
                                        className="fa-solid fa-right-long"
                                        style={{ color: '#fff', fontSize: '20px' }}
                                    ></i>
                                    <Link
                                        to={`/product/${product.id}`}
                                        className={styleAllProduct.Details}
                                    >
                                        Details
                                    </Link>
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
