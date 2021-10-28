
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Info from './components/Info';
import Allusers from './components/Allusers';
import { Route, Switch } from "react-router-dom";


function App() {
    const [users , setUsers]= useState([]) ;
    useEffect(()=>
    {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) => setUsers(response.data))
       .catch(error=>console.log(error));
      
    },[]
  )
  return (
     <div>
    <Switch>
   <header>
   
   <Route exact path="/" render={(props)=><> <Allusers {...props} users={users}/> </>}/>
   <Route path='/info/:id' render ={(props)=><> <Info {...props} users={users}/> </>}/>
   </header>
   </Switch>
   </div>
  ) ;
}

export default App;