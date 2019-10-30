import React from 'react'
import Users from './Users.json'
import { Link } from "react-router-dom"

function Home(props) {
    return (
        <>
        <div className="listView">
            <header>
                <p>My Peeps</p>
            </header>
            <ul>
                {Users.map (user => (
                    <li key={"users-tab" + user.id}>
                        <Link to={"/contacts/" + user.id}>
                            <img src={user.picture.thumbnail} />
                            {user.name.first} {user.name.last}
                        </Link>
                    </li>
                ))} 
            </ul>
        </div>
        </>
    )
}

export default Home