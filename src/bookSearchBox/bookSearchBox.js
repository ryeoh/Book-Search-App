import React, {Component} from 'react';
import './bookSearchBox.css';

class BookSearchBox extends Component {
    render() {
        return (
            <form 
                className='searchBox'
                onSubmit={this.props.handleSubmit}
                >
                <label>Search: </label>
                    <input 
                        type='text'
                        value={this.props.q}
                        placeholder='Search'
                        onChange={this.props.handleChange}
                        >
                    </input>
                <button type='submit'>
                    Search
                </button>
            </form>
        )
    }
}

export default BookSearchBox;