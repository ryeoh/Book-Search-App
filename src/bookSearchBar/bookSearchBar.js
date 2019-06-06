import React, {Component} from 'react';
import './bookSearchBar.css';

import BookSearchBox from '../bookSearchBox/bookSearchBox';
import BookFilter from '../bookFilter/bookFilter';

class bookSearch extends Component {
    render() {
        return (
            <div className='bookSearchBar'>
                <BookSearchBox 
                    handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    />
                <BookFilter />
            </div>
        )
    };
}

export default bookSearch;
