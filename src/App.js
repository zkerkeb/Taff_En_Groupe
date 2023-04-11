import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <button onClick={() => alert('WAW')} >Wesh</button>
      <img 
        width={272}
        height={92}
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      ></img>
      <button onClick={() => alert('WAW')} >Wesh</button>
      <img 
        width={272}
        height={92}
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      ></img>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
