import React from "react"
import './App.css';
import Header from "./components/Header"
import { Route, Link, Switch } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"

//allows this context to be imported someplace else
export const GlobalCtx = React.createContext(null)

const url = "http://localhost:3000"
const token = null


function App() {
  const [gState, setGState] = React.useState({url, token})
  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route path="/login" render= {(rp => <Login {...rp}/>)}/>
          <Route path="/" render= {((rp) => <Home {...rp}/>)}/>

        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
