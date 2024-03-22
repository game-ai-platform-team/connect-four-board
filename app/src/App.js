import './App.css';
import CFourUI from "./CFourUI.tsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CFourUI column={7} row={6} moves={[1,2,3]} moveIndex={3} background_color='red' empty_color='white' player_a_color='blue' player_b_color="green"/>
      </header>
    </div>
  );
}

export default App;
