import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-md-4">
          {this.props.count} products found.
        </div>
        <div className="col-md-4">
          <label>
            Order by
            <select 
              name="sortby" 
              id="sortby" 
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}>
                <option value="">Select</option>
                <option value="lowest">Low to High</option>
                <option value="highest">High to Low</option>
            </select>
          </label>
        </div>
        <div className="col-md-4"></div>
      </div>
    )
  }
}

export default Filter;
