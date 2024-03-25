import "./App.css";
import CFourUIPlayable from "./components/CFourUIPlayable.tsx";
import { useState } from "react";

function App() {
    const [gameMoves, setGameMoves] = useState<number[]>([]);

    function playMove(move: number) {
        const newMoves: number[] = [...gameMoves, move];
        setGameMoves(newMoves);
        console.log(move);
    }

    return (
        <div className="App">
            <CFourUIPlayable
                columns={7}
                rows={6}
                gameMoves={gameMoves}
                playMove={playMove}
            />
        </div>
    );
}

export default App;
