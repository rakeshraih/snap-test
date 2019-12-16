import React, { Component } from 'react';
import './index.css';

const filterData = (key, data) => {
  const filteredArray = [];
  if (!key || key === '') {
    return [];
  }
  data.forEach(element => {
    if (element.toLowerCase().includes(key.toLowerCase())) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
};
class Filter extends Component {
  state = {
    searchKey: '',
    filterList: [],
    data: this.props.data,
  };

  keyChange = event => {
    const { value } = event.target;
    this.setState({ searchKey: event.target.value, filterList: filterData(value, this.props.data) });
  };
  render() {
    const { searchKey, filterList } = this.state;
    return (
      <div className="filter">
        <input value={searchKey} onChange={this.keyChange}></input>
        <ul>
          {filterList.map(val => (
            <li key={val} onClick={() => this.props.updateSelectedItems(val)}>
              {val}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
