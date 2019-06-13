import React, {Component} from 'react';
import './App.css';

import BookSearchApp from './bookSearchApp/bookSearchApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'q': '',
      searchResults: [],
      'printType': 'all',
      'filter': 'no-filter',
      error: null
    };
  }

  handleChange(e) {
    this.setState({
      'q': e.target.value,
    });
  }

  // formatQueryParams(params) {
  //   const queryItems = Object.keys(params)
  //     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  //   let queryString = queryItems.join('&');
  //   return queryString;
  // };

  handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'AIzaSyB5TimN2vYM_nKbeFditwP_QtAbBemdkpM',
        'q': this.state.q,
      }
    };
    const url = `https://www.googleapis.com/books/v1/volumes?q=${options.headers.q}&maxResults=40`;
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchResults: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  handleFilter(key, value) {
    console.log(key, value);
    this.setState({
        [key]: value    
    });
    this.filteredSearchResults([key], value);
  }

  filteredSearchResults() {
    const url2 = this.state.filter === 'no-filter'
      ? `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&maxResults=40&printType=${this.state.printType}`
      : `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&maxResults=40&printType=${this.state.printType}&filter=${this.state.filter}`;
    fetch(url2)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchResults: data.items,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
 

  render() {
    return (
      <BookSearchApp 
        handleChange={e => this.handleChange(e)}
        handleSubmit={e => this.handleSubmit(e)}
        handleFilter={this.handleFilter.bind(this)}
        printType={this.state.printType}
        filter={this.state.filter}
        searchResults={this.state.searchResults}
        />
    );
  }
}

export default App;
