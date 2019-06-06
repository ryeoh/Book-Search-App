import React, {Component} from 'react';
import './App.css';

import BookSearchApp from './bookSearchApp/bookSearchApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'q': '',
      // 'filter': '',
      // 'printType': '',
      searchResults: [],
      error: null
    };
  }

  handleChange(e) {
    this.setState({
      'q': e.target.value
    });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'AIzaSyB5TimN2vYM_nKbeFditwP_QtAbBemdkpM',
        'q': this.state.q
        // 'filter': this.state.filter,
        // 'printType': this.state.printType
      }
    };
    const url = `https://www.googleapis.com/books/v1/volumes?q=${options.headers.q}`;
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
        // console.log(this.state.searchResults);
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
        searchResults={this.state.searchResults}
         />
      // <main className='App'>
      //   {/* content goes here */}
      // </main>
    );
  }
}

export default App;
