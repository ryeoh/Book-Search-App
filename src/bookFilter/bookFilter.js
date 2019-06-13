import React, {Component} from 'react';
import './bookFilter.css';

class BookFilter extends Component {

    render(props) {
        return (
            <div className='book-filter'>
                <label htmlFor='printType' className='printType'>Print Type: </label>
                <select 
                    id='printType'
                    value={this.props.printType}
                    className='printTypeOptions'
                    onChange={e => this.props.handleFilter('printType', e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>

                <label htmlFor='filter' className='bookType'>Book Type: </label>
                <select 
                    id='filter'
                    value={this.props.filter}
                    className='bookTypeOptions'
                    onChange={e => this.props.handleFilter('filter', e.target.value)}>
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