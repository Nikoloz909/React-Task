import React,{useRef,useEffect, useState} from 'react';
import axios from 'axios';
import '.././App.css';
export default function Comments() {
    const [Comments, setComments] = useState([]);
    const [Value, setValue] = useState('');
    const [EditingText, setEditingText] = useState('')
    let referenc = useRef();
    let scroll = useRef();
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            setComments(response.data)
        },[])
        .catch(error => console.log(error))
    },)
    let newInput = {id:Date.now() , text: Value  }

    function onSubmit(e){
        e.preventDefault()
        setComments([
            ...Comments,
            newInput, 
            
        ])
        setValue('');
        setEditingText(Value)
    }
   
    useEffect(()=>{
        referenc.current.focus()
    },[])
    function onClick(id){
        let edit =[ ...Comments].map(items =>{
            if(items.id === id){
                items.id = EditingText;
            }
            return items;
            
        } )
        setEditingText(edit)
    }
    return (
        <>
        <div className= 'container comments-Parent'>
            <h1 className='comments-user' >Users Comments</h1>
            <div className='childe-div' ref={scroll}>
            <form action='/submit' className='comments-form' onSubmit={onSubmit} method='post' >
                    <input 
                    ref={referenc}
                    value={Value}
                    type='text'  
                    className='comments-input'
                    placeholder="Write a comment..."
                    onChange={e => setValue(e.target.value)}
                    />
                    <button className='comments-btn'>add comments</button>
                    {
                        !!EditingText && <div><input 
                        type='text' 
                        onChange={e => setEditingText(e.target.value)}
                        value={EditingText}
                        />
                        <button onClick={()=>{
                            onClick(Comments.title)
                        }}>Edit Text</button>
                        </div>
                       
                    }
                     
                </form>
                
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
