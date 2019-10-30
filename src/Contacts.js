import React from 'react'
import Users from './Users.json'


function Contacts(props){
    const id = props.match.params.id
    const user = Users.find(
        user => user.id == id
        )

    return (
        <>
        <div className="singleView">
            <div id="profilePic">
                <img src={user.picture.large} />
            </div>
            <p>{user.name.first} {user.name.last}</p>
            <p>{user.email}</p>
            <p>{user.cell}</p>
            <p>{user.location.city}, {user.location.state}</p>
        </div>
        </>
    )
}

export default Contacts