import "./App.css";
import CFourUIPlayable from "./components/CFourUIPlayable.tsx";
import { useState } from "react";

function App() {
    const [gameMoves, setGameMoves] = useState([]);
    function playMove(move) {
        console.log(move);
    }

    return (
        <div className="App">
            <CFourUIPlayable
                columns={7}
                rows={6}
                gameMoves={gameMoves}
                setGameMoves={setGameMoves}
                playMove={playMove}
            />
        </div>
    );
}

export default App;
