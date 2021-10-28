import React from 'react'


const Info=(props )=> {
const id= props.match.params.id
const user=props.users.filter(el=>el.id==id)


    return (
        <div>
           <h1>{user[0].name}</h1>
           <h3>email:{user[0].email}</h3>
        </div>
    )
}

export default Info
