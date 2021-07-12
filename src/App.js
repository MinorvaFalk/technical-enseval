import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const App = () => {
  const [loggedIn, setLoggedIn] = useState()

  if(!loggedIn){
    return <Login setLoggedIn={setLoggedIn}/>
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home loggedIn={loggedIn}/>
          </Route>
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App