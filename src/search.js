import React from 'react';
import './App.css';
import { BrowserRouter as Route, Link} from "react-router-dom";
import ListBooks from "./select.js"
import Bo from "./shelf.js"
import * as BooksAPI from './BooksAPI'	


class BooksApp extends React.Component {
  state = {
    query: '',
    newBooks: [],
    fa: false
  }

  getBooks = (event) => {
    const query = event.target.value
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ?  this.setState({newBooks: books, fa: false}) : this.setState({ newBooks: [], fa: true})

      })
  } else this.setState({newBooks: [], fa: false})
  }

    render(){  
      
        const { query, newBooks, fa} = this.state;
        const { books, onShelfChange} = this.props;
              return (    
                     <div className="app">  
                           <div className="search-books">  
                                <div className="search-books-bar">
                                  <Link to="/" className="close-search" ><Route exact path="/" component={ListBooks}/> Close</Link>
                                  <div className="search-books-input-wrapper">
                                    {                           
                                      /*
                                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                      You can find these search terms here:
                                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                      you don't find a specific author or title. Every search is limited by search terms.
                                    */}
                                    <input type="text" placeholder="Search by title or author" value={query} onChange={ this.getBooks }/>

                                  </div>

                                </div>

                                    <div className="search-books-results">
                                      <ol className="books-grid">
                                         { newBooks.length > 0 && (
                                            <div>                    
                                              <ol className="books-grid">
                                                      {newBooks.map((book) => (
                                                            <Bo
                                                                  book={ book }
                                                                  books={ books }
                                                                  key={ book.id }
                                                                  
               														 onShelfChange={onShelfChange}
                                                 			 />
                                                		))}
							
                                                </ol>
                                              </div>              				            
            				   )}
                              {fa  && (
                                  <div>
                                      <p>{query} not found in the booklist</p>
                                    </div>
                                )}
                						</ol>
                                    </div>

                          </div>
                 	   </div> 	
)}}


export default BooksApp

