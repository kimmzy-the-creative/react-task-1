import React, { useEffect, useState, Fragment } from "react";

const PriceFormat = () => {
  const [products, setProducts] = useState([])

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
                <h4>{product.price}</h4>
  )
}

export default PriceFormat
