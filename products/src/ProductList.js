// src/components/ProductList.js

import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productAPI';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        getProducts();
    }, []);

    return (
        <div>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index}>
                        <h3>{product.productName}</h3>
                        <p>Price: {product.price}</p>
                        <p>Rating: {product.rating}</p>
                        {/* Add more product details here */}
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductList;
