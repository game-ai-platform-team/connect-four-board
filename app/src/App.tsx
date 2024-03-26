import "./App.css";
import CFourUIPlayable from "./package/CFourUIPlayable";
import CFourUI from "./package/CFourUI";

function App() {
    const gameMoves: number[] = [];

    function playMove(move: number) {
        gameMoves.push(move);
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

            <CFourUI
                rows={4}
                columns={4}
                moves={[
                    [1, 1, 1, 1],
                    [0, 2, 2, 2],
                    [0, 0, 1, 1],
                    [0, 0, 0, 2],
                ]}
            />
        </div>
    );
}

export default App;
