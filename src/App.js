import React from "react"
import './App.css';
import Header from "./components/Header"
import { Route, Link, Switch } from "react-router-dom"

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
          <Route path="/" render= {(rp => <h1>HOME</h1>)}/>
        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
