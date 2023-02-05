import logo from './logo.svg';
import './App.css';
import Props from './components/Props';
import Destructuring from './components/Destructuring';
import Array from './components/Array';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseStateForm from './components/UseStateForm';
import CustomHook from './components/CustomHook';
import Data from './components/Data';
import DataTwo from './components/DataTwo';

function App() {
  return (
    <div className="App">
     {/*<Props name="motun"/>
     <Destructuring name="Zion"/>
     <Array/>
     <UseState/>
     <UseEffect/>
     <UseRef/>
     <UseReducer/>
     <UseStateForm/>
     <CustomHook/>
  <Data/>*/}
    <DataTwo/>
     
    </div>
  );
}

export default App;
