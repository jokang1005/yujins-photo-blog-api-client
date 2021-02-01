import logo from './logo.svg';
import './App.css';
import Header from "../components/Header"
import { Route, Link, Switch } from "react-router-dom"
//allows this context to be imported someplace else
export const GlobalCtx = React.createContext(null)

const url = "http://localhost:3000"

const [gState, setGState] = React.useState({url})

function App() {
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
