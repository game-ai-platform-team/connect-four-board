import './App.css';
import CFourUI from "./CFourUI.tsx"

function App() {
  return (
    <div className="App">
      <CFourUI column={7} row={6} moves={[0,1,2,3,3,3,3,3,3,3,3,1,1,1,1,1]}/>
    </div>
  );
}

export default App;
