import React, {Component} from 'react';
import './bookFilter.css';

class BookFilter extends Component {
    render() {
        return (
            <div className='book-filter'>
                <label className='printType'>Print Type: </label>
                <select className='printTypeOptions'>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>

                <label className='bookType'>Book Type: </label>
                <select className='bookTypeOptions'>
                    <option value="no-filter">No filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free-ebooks</option>
                    <option value="paid-ebooks">Paid-ebooks</option>
                    <option value="ebooks">Ebooks</option>
                </select>
            </div>
        )
    };
}

export default BookFilter;