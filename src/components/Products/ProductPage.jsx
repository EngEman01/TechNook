import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleProductPage from './ProductPage.module.css'

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:7001/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className={styleProductPage.productDetails}>
            <div className={styleProductPage.productIntro}>
                <img src={product.image[0]} alt={product.name} className={styleProductPage.detailImage} />
                <h1 style={{ marginBottom: '20PX' }}>{product.name}</h1>
                <p><strong>model:</strong> {product.model}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
            </div>
            <div className={styleProductPage.productDescription}>
                <h4>Description:</h4>
                <p>{product.description}</p>
                <ul>
                    <h4>Features:</h4>
                    {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <p style={{ marginTop: '10PX' }}><strong>Rating:</strong> {product.rating} / 5</p>
                <p><strong>Stock Available:</strong> {product.stock}</p>
                <div className={styleProductPage.pricing}>
                    <p><strong>Price:</strong> <span style={{ color: 'green' }}>${product.price}</span></p>
                    <button className={styleProductPage.buying}>buy now</button>
                </div>
            </div>
        </div>
    );
}
