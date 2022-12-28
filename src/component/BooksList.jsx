import React from 'react'
import BooksCard from './BooksCard'
function BooksList({books,index}) {
  if(index<=5){
    var sliced = books.slice(0,6)
  return (
    <div>
        {sliced.map(el=>(
              <BooksCard book={el}/>))}
    </div>
  )
}else if(index>5){
  return (
    <div>
        {books.map(el=>(
              <BooksCard book={el}/>))}
    </div>
  )
}
}

export default BooksList