import logo from './logo.svg';
import './App.css';
//allows this context to be imported someplace else
export const GlobalCtx = React.createContext(null)

const [gState, setGState] = React.useState({})

function App() {
  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
      
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
