import React, { useEffect, useState, Fragment } from "react";
import classes from './ProductFetch.module.css';
import Card from '../UI/Card';

const ProductFetch = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8000/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Fragment>
        <h2>Featured Products</h2>
        <Card >
          {products.map((product) => (
            <div className='product-grid' >
              <div className='grid-item' key={product.id}>
                <p className="face-font">{product.face}</p>
                <p className="date-font">{`Date: ${product.date}`}</p>
                <h4 className="price-font">{`Price: ${product.price}`}</h4>
                <button className={classes.button}>Add to Cart</button>
              </div>
            </div>
          ))}
        </Card>
      </Fragment>
  )
}

export default ProductFetch
