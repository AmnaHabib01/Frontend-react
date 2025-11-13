import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input
       type="text" placeholder='enter name'
       value={username}
       onChange={(e)=>setusername(e.target.value)}
        />
        {' '}
        <input
       type="text" placeholder='enter password'
       value={password}
       onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login
