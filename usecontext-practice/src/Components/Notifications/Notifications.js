import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContext';

const Notifications = () => {
    const {user} = useContext(UserContext)
    const {name, profilePic, notifications} = user
    // console.log(name)
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>profilePic: {profilePic}</h1>
      <h1>Notifications: {notifications}</h1>
    </div>
  )
}

export default Notifications;
