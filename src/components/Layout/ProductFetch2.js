import React, { useEffect, useState } from "react"

const ProductFetch = () => {
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
    <div>
      {products.length > 0 && (
        <ul>
          {products.map(product => (
            <div key={product.id}>{product.face}{product.price}</div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductFetch
