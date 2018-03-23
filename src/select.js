import React from 'react'
import {Link} from 'react-router-dom'
import Shelfs from './filter.js'

function ListBooks(props){
   const { onShelfChange, books} = props;

   const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
   const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
   const read = books.filter((book) => book.shelf === 'read');
   return(
    <div className="list-books">
          <div className="list-books-content">
             <div className="list-books-title">
                <h1>MyReads</h1>
             </div>

             <div className="bookshelf"> 
                 <ol>
                    <Shelfs //set the new title and book and move it 
                        bookshelfTitle='Currently Reading'
                        bookshelfBooks={currentlyReading}
                        onShelfChange={onShelfChange}
                    />
                    <Shelfs
                        bookshelfTitle='Want to Read'
                        bookshelfBooks={wantToRead}
                        onShelfChange={onShelfChange}
                    />
                    <Shelfs 
                        bookshelfTitle='Read' 
                        bookshelfBooks={read}
                        onShelfChange={onShelfChange}
                    />

                  </ol>
                </div>
             </div>

           <div className="open-search">
                   <Link to="/search"> Add book //get the serch pag including /search url 
                    </Link>
            </div>
    </div>
  )
}
export default ListBooks

