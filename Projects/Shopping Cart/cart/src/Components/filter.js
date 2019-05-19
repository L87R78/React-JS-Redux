import React, { Component } from "react";

export default class filter extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          <h2> {this.props.count} Products found.</h2>
        </div>
        <div className="col-md-4">
          <label>
            <h4>Order by</h4>
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}
            >
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            <h4>Filter size</h4>
            <select
              className="form-control"
              value={this.props.size}
              onChange={this.props.handleChangeSize}
            >
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
        />
      </div>
    );
  }
}
