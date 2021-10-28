import React from 'react'
import UserList from './UserList'
function Allusers({users}) {
    return (
        <div style={{flexWrap:"wrap",display:"flex"}}>
            {users.map(el=><UserList el={el}/>)}
        </div>
    )
}

export default Allusers
