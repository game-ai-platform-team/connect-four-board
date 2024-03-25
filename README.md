# connect-four-board

A connect four board to be used in local ai platform

## Usage

### `CFourUI`

```TypeScript
<CFourUI rows={6} columns={7}/>
```

### `CFourUIPlayable`

```TypeScript
const [gameMoves, setGameMoves] = useState([])

function playMove(move: number) {
    console.log(move)
}

<CFourUIPlayable
    rows={6}
    columns={7}
    gameMoves={gameMoves}
    setGameMoves={setGameMoves}
    playMove={playMove}
/>
```

### Parameters

#### Required

-   `rows`
-   `columns`
-   `gameMoves`
-   `setGameMoves`
-   `playMove`

#### Optional

-   `moves` (static only)
-   `move_index`
-   `circle_radius`
-   `circle_margin`
-   `background_color`
-   `empty_color`
-   `player_a_color`
-   `player_b_color`
-   `highlight_color`
-   `onClick` (static only)
