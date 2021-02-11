import React from "react"
import './App.css';
import Header from "./components/Header"
import { Route, Link, Switch } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/home"
import YujinHome from "./pages/yujinHome"

//allows this context to be imported someplace else
export const GlobalCtx = React.createContext(null)

const url = "http://localhost:3000"
const token = null


function App() {
  const [gState, setGState] = React.useState({url, token})

  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token) {
      setGState({...gState, token: token.token})
    }
  }, [])
  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">

      <main>
        <Switch>
          <Route exact path="/" render= {((rp) => gState.token ? <YujinHome /> : <Home {...rp}/>)}/>
          <Route path="/login" render= {(rp => <Login {...rp}/>)}/>

        </Switch>
      </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
