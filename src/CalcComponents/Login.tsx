import React, { FormEvent, useState } from "react";

type Props = {
    text: any,
}
function Login(){
    const [text, setText]=useState({email: '', password: ''})
    const inputTextHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setText((prev)=> ({...prev, [name]: value}))
       }
   
       const submitTodoHandler = (e: any) => {
           e.preventDefault();
          
   
       }
   
       
    return (
        <div>
            <form onSubmit={submitTodoHandler}> 
            
            <label htmlFor="email">Email:
            <input type="email" name='email' onChange={inputTextHandler}  value={text.email || ""}/>
            </label>
            <label htmlFor="password">Password:</label>
            <input type="text" value={text.password || ""} name="password" onChange={inputTextHandler} />

            <button className="todo-button" type="submit">Login</button>

        </form> 
        </div>
    )
}
export default Login;