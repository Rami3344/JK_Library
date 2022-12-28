import React, { useState } from 'react'
import "../Responsive.css"
import Header from './Header'
import find from "./pic/find-book.png"
import BooksList from './BooksList'
import Footer from './Footer'
import Filter from './Filter'
import { data } from './data/data.js'
import ShowMore from './ShowMore'
function Main() {
  const [books,setBooks]=useState(data)
  const [search,setSearch] = useState('')
  const handleSearch = (e) => setSearch (e.target.value)
  const [index,setIndex]= useState(5)
  const[show,setShow] = useState(false)
  function handleShow(){
    setShow(!show)
}
  function showHandleIndex(){
    if (show==false){
      setIndex(books.length)
    }else{
      setIndex(5)
    }
}
  return (
    <div>
        <Header home="#home" cont="#cont" store="#store"/>
        <div id='home'className='about'>
            <p>
                <h3>Welcome to "JK Library"!</h3>
                "JK Library" is an E-Library helps you to find famous and highly rated books.
                You can search about a book that u want to purchase in this website.
                You'll find details,price and ratings about every book so it will help you to find the book that suits you and rating a book is available too.<br/>
                Enjoy surfing in your library!
            </p>
            <img  src={find}/>
        </div>
        <div id='store' className='books'>
          <Filter search={search} handleSearch={handleSearch} />
          <div className='books-list'>
            <BooksList index={index} books={books.filter((el) => el.name.toLowerCase().includes(search.toLowerCase() ))} />
            <ShowMore handleShow={handleShow} show={show} handleIndex={showHandleIndex} />
          </div>
        </div>
        <div id='cont'className='contact'>
            <h2>Contact Us</h2>
            <div className='info'>
              <table>
              <tr>
                <td><span>Username</span><br /><input type="text" placeholder="Username"/></td>
                </tr>
                <tr>
                  <td><span>E-mail</span><br /><input type="text" placeholder="E-mail"/></td>
                </tr>
                <tr>
                  <td><span>Type here:</span> <br /><textarea cols="30" rows="3" placeholder='Ask us a question and we will reply to you as soon as possible.'/></td>
                </tr>
                <tr>
                  <td><input className='submit' type="submit" value="Submit" /></td>
                </tr>
              </table>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Main