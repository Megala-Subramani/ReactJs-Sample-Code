import './App.css';
import BounceComponent from './Bounce'
import {UserProvider} from './Context'
import Caller from './UseEffect';
import RefComponent from './RefComponent'
//This folder contains the concept of
// 1.debounce
// 2.Route Params & redirect To
// 3.UseEffect, with emp [] ,with state value dep,
// 4.wat is ref
// 5.how to pass obj in useState
function App() {
  return (
    <div className="App">
      <UserProvider value={{debounceTimer:undefined}} >
        <BounceComponent MyName="NewName" />
        <Caller/>
        <RefComponent />
      </UserProvider>
    </div>
  );
}

export default App;
