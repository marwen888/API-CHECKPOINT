
import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({el}) => {
  return (
    <div>
            <Card 
    bg={'light'.toLowerCase()}
    text={'dark'.toLowerCase()}
    style={{ width: '18rem',height:'200px' }}
    className="mb-2"
            
            >
  
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
      {el.company.catchPhrase}
    </Card.Text>
   <Link to={`/info/${el.id}`}> <Button>more informations </Button> </Link> 
  </Card.Body>
</Card>
      
    </div>
  )
}

export default UserList


    
  
