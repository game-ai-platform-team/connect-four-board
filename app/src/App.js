import './App.css';
import CFourUIPlayable from "./CFourUIPlayable.tsx"

function App() {
  return (
    <div className="App">
      <CFourUIPlayable column={7} row={6} moves={[]}/>
    </div>
  );
}

export default App;
