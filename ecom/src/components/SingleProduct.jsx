import React from 'react'
import { useParams } from "react-router-dom"
import { useProducts } from '../context/productContext';
function SingleProduct() {
    let { id } = useParams()
    const products = useProducts()
    const product = products.find(ele => ele.id == id)
    console.log(product);
    return (
        <div>SingleProduct</div>
    )
}

export default SingleProduct