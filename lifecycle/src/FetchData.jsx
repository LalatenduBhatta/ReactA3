import React, { useEffect, useState } from 'react'
import axios from "axios"

function FetchData() {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        // fetch("https://dummyjson.com/products").then(d => d.json())
        //     .then(d => setData(d.products))
        //     .catch(err => console.log(err))
        // fetchData()
        // axios.get("https://dummyjson.com/products?limit=100")
        //     .then(data => setData(data.data.products))
        //     .catch(err => console.log(err))
        dataFetch()
    }, [])
    // const fetchData = async () => {
    //     try {
    //         let response = await fetch("https://dummyjson.com/products?limit=100")
    //         let data = await response.json()
    //         setData(data.products)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const dataFetch = async () => {
        let data = await axios.get("https://dummyjson.com/products?limit=100")
        setData(data.data.products)
        setFilterData(data.data.products)
    }
    useEffect(() => {
        let timeOut = setTimeout(() => {
            if (search) {
                let filter = data.filter(product => {
                    if (product.title.toLowerCase().startsWith(search)) {
                        return product
                    }
                })
                console.log(filter);
                setFilterData(filter)
            } else {
                setFilterData(data)
            }
        }, 1000)
        return () => {
            clearTimeout(timeOut)
        }
    }, [search])
    return (
        <>
            <h1 className='bg-danger text-white mb-4 p-2'>OUR PRODUCTS</h1>
            <div className='bg-success mb-3 p-3 text-white fs-2'>
                <label>Search :</label>
                <input type="search" name="search" id="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="row gap-3">
                {filterData.map(ele => {
                    return <div className="card col-12 col-sm-6 col-md-4 col-lg-3
                    flex-grow-1 bg-secondary text-white"
                        style={{ width: "18rem" }} key={ele.id}>
                        <img src={ele.images[0]} className="card-img-top"
                            alt="products" style={{ height: "150px" }} />
                        <div className="card-body">
                            <h3 className="card-title">{ele.title}</h3>
                            <h5 className="card-title">{ele.brand}</h5>
                            <p className="card-text">{ele.description}</p>
                            <h4>price:{ele.price}</h4>
                            <a href="#" className="btn btn-primary">ADD TO CART</a>
                        </div>
                    </div >
                })}
            </div>
        </>
    )
}

export default FetchData