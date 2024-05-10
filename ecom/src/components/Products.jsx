import React from 'react'
import { useProducts } from '../context/productContext';
function Products() {
    let products = useProducts()
    console.log(products);
    return (
        <div>Products</div>
    )
}

export default Products