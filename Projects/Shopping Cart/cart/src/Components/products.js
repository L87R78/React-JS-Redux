import React, { Component } from "react";

import  util  from '../util'

export default class Products extends Component {
  render() {
    const productsItems = this.props.products.map((product, i) => {
      return (
        <div key={i} className="col-md-4">
          <div className="thumbnail text-center">
            <a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
              <img src={`/products/${product.sku}_1.jpg`} alt={product.title} />
              <h2>{product.title}</h2>
            </a>
            <div>
              <b>{util.formatCurrency(product.price)}</b>
              <button
                type="button"
                className="btn btn-default"
                onClick={e => {
                  console.log(e);
                  return this.handleAddToCard(e, product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{productsItems}</div>;
  }
}
