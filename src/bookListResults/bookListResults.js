import React, {Component} from 'react';

import BookResult from '../bookResult/bookResult';

class BookListResults extends Component {
    render() {
        const books = this
            .props
            .searchResults
            .map((book, i) =>
            <BookResult {...book} key={i} />
            );
        console.log(books);

        return (
            <div className='bookListResults'>
                {books}
            </div>
        )
    }
}

BookListResults.defaultProps = {
    searchResults: []
};

export default BookListResults;