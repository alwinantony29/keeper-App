import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
function CreateArea(props) {
  const [clicked, setClicked] = useState(false)
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
    setClicked(false)
    props.create({
      title,content
    })
  }
  return (
    <div>
      <form onSubmit={handleClick}>

        {clicked && <input name="title" placeholder="title" onChange={e => { settitle(e.target.value) }} />}

        <textarea onClick={() => setClicked(true)} placeholder="Take a note..." onChange={e => { setcontent(e.target.value) }}
          name="content" rows={clicked ? "3" : "1"} />

        <button type="submit" ><AddIcon /></button>

      </form>
    </div>
  )
}
export default CreateArea;
