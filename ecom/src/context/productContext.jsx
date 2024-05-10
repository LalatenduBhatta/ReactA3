import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"

const productContext = createContext()

export const ProductContextAPI = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const data = await axios.get("https://api.escuelajs.co/api/v1/products")
            setProducts(data.data)
        } catch (err) { console.log(err) }
    }
    return (
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    )
}
export const useProducts = () => {
    return useContext(productContext)
}
