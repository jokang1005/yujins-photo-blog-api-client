import React from "react"
import './App.css';
import Header from "./components/Header"
import { Route, Link, Switch } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"

//allows this context to be imported someplace else
export const GlobalCtx = React.createContext(null)

const url = "http://localhost:3000"


function App() {
  const [gState, setGState] = React.useState({url})
  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route path="/login" render= {(rp => <Login />)}/>
          <Route path="/" render= {((...rp) => <Home />)}/>

        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
