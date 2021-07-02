import React,{useEffect, useState} from 'react';
import axios from 'axios';
import '.././App.css';
export default function Comments() {
    const [Comments, setComments] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            setComments(response.data)
        },[])
        .catch(error => console.log(error))
    },)
    return (
        <>
        <div className= 'container'>
            <div className='childe-div'>
                <ul className='Comments'>
                    {
                        Comments.map(comments => (
                            <li key={comments.id} className='comments-li'>
                                <div className="comments-title">
                                    {comments.title}
                                </div>
                            </li>
                        ))
                    }
                </ul>
           </div>
        </div>
        </>
    )
}
