import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }

    }

    componentDidMount() {
        fetch('http://localhost:8000/products')
            .then(response => response.json())
            .then(products => {
                this.setState({
                    products: products
                })
            })
            .catch(error => console.log(error))
    }
    renderList() {
        let productList = []
        this.state.products.map(product => {
            return productList.push(`<li key={product.face}>{product.date}</li>`)
          
        })

        return productList;
    }

    render() {
        const products = this.state.products;
        console.warn(products);
        return (
          <div>
            {
              products ?
              <div>
              <h2> {products.face} {products.date} {products.size}</h2>
              </div>
              :<p></p>
            }
          </div>
        );
    }
}

export default ProductList;
