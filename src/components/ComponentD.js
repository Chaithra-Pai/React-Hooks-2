import React, {useContext} from 'react'
import ComponentE from './ComponentE'
import {UserContext,ChannelContext} from '../App'

function ComponentD() {

    const user = useContext(UserContext)
    const subject = useContext(ChannelContext)
    
    return (
        <div>Username: {user} , Favourite Subject: {subject}</div>
    )
}

export default ComponentD