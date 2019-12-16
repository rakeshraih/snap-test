import React, { Component } from 'react';
import Filter from '../Filter';
import './index.css';

const data = ['Animal', 'Animation', 'cat', 'dog', 'test'];

class Container extends Component {
  state = {
    selectedItems: [],
  };

  updateSelectedItems = item => {
    const { selectedItems } = this.state;
    this.setState({ selectedItems: [...selectedItems, item] });
  };
  render() {
    const { selectedItems } = this.state;
    return (
      <div className="container-comp">
        <ul className="selected-item">
          {selectedItems.map(val => (
            <li key={val}>{val}</li>
          ))}
        </ul>
        <Filter data={data} updateSelectedItems={this.updateSelectedItems}></Filter>
      </div>
    );
  }
}

export default Container;
