import './App.css';
import ComponentC from './components/ComponentC';
import React, {useReducer} from 'react'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import CompP from './components/CompP';
import CompQ from './components/CompQ';
import CompR from './components/CompR';
import DataFetchOne from './components/DataFetchOne';
import DataFetchTwo from './components/DataFetchTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: return state
    }

}


function App() {
  const [count,dispatch ] = useReducer(reducer,initialState)

  return (
    <div className="App">
      <UserContext.Provider value={'Chaithra'}>
        <ChannelContext.Provider value={'React.js'} >
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne/>
      <CounterTwo />
      <CounterThree />
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
        <h2>useReducer with useContext</h2>
        <h3>Counter - {count}</h3>
        <CompP/>
        <CompQ/>
        <CompR/>
      </CountContext.Provider>
      <h2>Fetching data with useState</h2>
      <DataFetchOne />
      <h2>Fetching data with useReducer</h2>
      <DataFetchTwo />
    </div>
  );
}

export default App;
