import React from 'react'
function Filter({search,handleSearch}) {
  return (
    <div className='search'>
    <input type="text" value={search} onChange={handleSearch} id='search' placeholder="Search a book"/>
  </div>
  )
}

export default Filter