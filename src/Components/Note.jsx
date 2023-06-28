import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props) => {
  return (
    <>
      <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{
          props.delete(props.id)
        }}>
        <DeleteForeverIcon/>
        </button>
      </div>
    </>
  )
}

export default Note