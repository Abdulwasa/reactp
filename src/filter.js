import React from 'react'
import Bo from './shelf.js'

function Shelfs(props) { // create function that changing a main books page
                  // when user change the select value it will call bo Function shelf.js and onshelfChange function to change shelves 
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                  props.bookshelfBooks.map(book => book).map((book) => 
                   <li key={book.id}>                                                        
		        	<Bo key={book.id} book={book} onShelfChange={props.onShelfChange} />      
                   </li>
		        )}
      
                    </ol>
                  </div>
        </div>
    )
}  


export default Shelfs