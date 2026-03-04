import React, { useContext } from 'react'
import { getAllProductData } from '../api/productApi'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {
    const productData = useContext(ProductDataContext)
    console.log(productData)

    return (
        <div className='allProducts'>   
            {productData.map(function (elem,idx){
                
                return <Link className='product' key={idx} to={`/products/${elem.id}`}>
                    <div>
                        <img src={elem.image} alt="" />
                        <h2>{elem.title}</h2>
                    </div>
                </Link>
            })}
        </div>
    )
}

export default Product
