import React, { Component } from "react";
import "./App.css";
import Filter from "./Components/filter";

import PrintProducts from "./Components/products";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filteredProducts: []
    };
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        return this.setState({
          products: data,
          filteredProducts: data,
          sort: "lowest"
        });
      });
  }

  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleChangeSize(e) {
    this.setState({ size: e.target.value });
    this.listProducts();
  }
  listProducts() {
    
    this.setState(state => {
      if (this.state.sort !== "") {
        this.state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        )
      }else {
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      
      if(this.state.size === 'm'){
        return this.state.filteredProducts
      }
     
      return { filteredProducts: state.products };
    });
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter
              size={this.state.size}
              sort={this.state.sort}
              handleChangeSize={this.handleChangeSize}
              handleChangeSort={this.handleChangeSort}
              count={this.state.filteredProducts.length}
            />
            <hr />
            <PrintProducts
              products={this.state.filteredProducts}
              handleAddToCard={this.handleAddToCard}
            />
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default App;
