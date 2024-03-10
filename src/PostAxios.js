import  Axios  from 'axios';
import React, { useState } from 'react'

function PostAxios() {
    const [my_title, setTitle] = useState('');
    const [my_body, setBody] = useState('');

    const changeTitle = (e) =>{
        setTitle(e.target.value)
    }

    const changeBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post('https://jsonplaceholder.typicode.com/posts',{
            title : my_title,
            body : my_body,
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err)
        });
    }
  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Title :</label>
        <input type="text" name='title' value={my_title} onChange={changeTitle}/>
        <br /><br />
        <label htmlFor="">Enter Body :</label>
        <input type="text" name='body'value={my_body}onChange={changeBody}/>
        <br /><br />
        <input type="submit" value='Post' />
      </form>
    </>
  )
}

export default PostAxios
