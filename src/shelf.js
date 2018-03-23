import React from 'react'

class Bo extends React.Component{
     moveImage = (e) => {
       let shelf = e.target.value;
        this.props.onShelfChange(this.props.book, shelf);
    };

  render() { 
      const {book} = this.props;
      const  url = book.imageLinks ? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
        return (
            <div className="book">
                <div className="book-top">
                    <book className="book-cover" style={{
                        width: 200,
                        height: 200,
                        backgroundImage: `url('${book.imageLinks ? book.imageLinks.thumbnail :  url}')`
                    }} />
                    <div className="book-shelf-changer">
                        <select onChange={this.moveImage} value={book.shelf ? book.shelf: book.shelf = 'none'}>
                            <option value="nonee" disabled>Move to...</option> 
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option  value="none" >None</option>
                        </select>
                     </div>
                 </div>
          { 
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
   )
  }   
}

export default Bo
