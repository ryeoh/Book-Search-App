import React, {Component} from 'react';
import './bookResult.css';

class BookResult extends Component {
    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          })
        const pricing = this.props.saleInfo.listPrice
            ? formatter.format(this.props.saleInfo.listPrice.amount)
            : <span>N/A</span>
        const description = this.props.searchInfo
            ? this.props.searchInfo.textSnippet
            : 'No description available'
        return (
            <div className='book'>
                <div className='bookTitle'>
                    <h2>{this.props.volumeInfo.title}</h2>
                </div>
                <div className='bookDetails'>
                    <div className='bookCoverThumbnail'>
                        <img 
                            src={this.props.volumeInfo.imageLinks.smallThumbnail} 
                            alt='thumbnail of book cover' />
                    </div>
                    <div className='bookInfo'>
                        <p>Author: {this.props.volumeInfo.authors}</p>
                        <p>Price: {pricing}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default BookResult;