import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const profile = () => {
   const {user}= useContext(UserContext)
      if(!user) return <div>please login</div>
      return  <div>Welcom{user.username}</div>
 

}

export default profile
