import React, {Component} from 'react';
import './bookSearchApp.css';

import BookSearchBar from '../bookSearchBar/bookSearchBar';
import BookListResults from '../bookListResults/bookListResults';

class BookSearchApp extends Component {
    render() {
        return (
            <div className="bookSearchApp">
                <h1>Google Book Search</h1>
                <BookSearchBar
                    handleChange={this.props.handleChange} 
                    handleSubmit={this.props.handleSubmit}
                    handleFilter={this.props.handleFilter}
                    printType={this.props.printType}
                    filter={this.props.filter}
                     />
                <BookListResults 
                    searchResults={this.props.searchResults}
                    printType={this.props.printType}
                    filter={this.props.filter}
                 />
            </div>
        )
    }
}

export default BookSearchApp;