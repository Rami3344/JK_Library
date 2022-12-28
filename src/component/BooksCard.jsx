import React, { useEffect } from 'react'
import { useState } from 'react'

import StarsRating from './StarsRating.jsx'
function BooksCard({book}) {
  const [showMore,setShowMore] = useState(false)
  const [rate]=useState(book.star)
  const rating = rate
  function handleShow(){
    setShowMore(!showMore)
  }
    return (
      <div className='book-card'>
          <h3>{book.name}</h3>
          <p>{book.author}</p>
          <img src={book.url}/>
          <div className='star'>
            {rate && <StarsRating rating={rating}/>}
          </div>
          <p>{book.price}</p>
          <button className='show-btn' id='show' onClick={handleShow}>{showMore ? 'hide':'show'} description</button>
          {showMore && <p id='disc'>{book.description}</p>}
      </div>
    )
  }

export default BooksCard