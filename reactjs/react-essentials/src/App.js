import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Hello {props.library}</h1>
    </div>
  );
}

export default App;
