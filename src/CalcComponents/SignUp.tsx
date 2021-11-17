import React, {useState} from 'react'



function SignUp(){

    const [text, setText]=useState({firstName: '',lastName: '', email: '', password: ''})
    const inputTextHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setText((prev)=> ({...prev, [name]: value}))
       }

    return (
        <div>

        <form >
            <label htmlFor="firstName">FirstName:</label>
            <input type="text" value={text.firstName} name="firstName" onChange={inputTextHandler}/>
            <label htmlFor="firstName">LasttName:</label>
            <input type="text" value={text.lastName} name="lastName" onChange={inputTextHandler}/>
            <label htmlFor="email">Email:</label>
            <input type="email" value={text.email} name="email" onChange={inputTextHandler}/>
            <label htmlFor="password">Password:</label>
            <input type="text" value={text.password} name="password" onChange={inputTextHandler}/>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}
export default SignUp;