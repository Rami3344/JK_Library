import React from 'react'
function ShowMore({handleIndex,show,handleShow}) {
  return (
    <div>
        {<button className='show-more' onClick={()=>{handleShow();handleIndex()}}>Show {show ?"Less...": "More..."}</button>}
    </div>
  )
}

export default ShowMore