import "./App.css";
import CFourUIPlayable from "./components/CFourUIPlayable.tsx";

function App() {
    const gameMoves: number[] = []

    function playMove(move: number) {
        gameMoves.push(move)
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
