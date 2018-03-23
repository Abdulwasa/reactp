
import React from 'react'
import {Route} from 'react-router-dom'
import ListBooks from './select.js'
import BooksApp from './search.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {
  state = {
    books: [],
    isLoading: true
  }

componentDidMount() {
BooksAPI.getAll()
.then(books => this.setState({ books }))
.catch(err => err)
}


componentWillUpdate(nextProps, nextState){
		localStorage.setItem('books', JSON.stringify(nextState.books))
}

componentWillMount(nextProps, nextState){
    localStorage.getItem('books') && this.setState({
      books: JSON.parse(localStorage.getItem('books')),
      isLoading: false
    })
}


  onShelfChange = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then( BooksAPI.getAll(this.setState(state => ({
         books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    })))
)
}

render() {
    return (
      <div className="app">        
            <Route
                  path="/"
                  exact
                  render={() => (              
                    <ListBooks books={this.state.books} onShelfChange={this.onShelfChange}/>
                )}/>
			<div>
               <Route path="/search" render={() =>(<BooksApp  books={this.state.books} onShelfChange={this.onShelfChange}/>)}/>
             
			</div>
       </div>
    )
  }
}

export default App
