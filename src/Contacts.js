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
            <p>Name: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.cell}</p>
            <p>Location: {user.location.city}, {user.location.state}</p>
        </div>
        </>
    )
}

export default Contacts