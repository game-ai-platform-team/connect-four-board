# connect-four-board

Two simple components to display a Connect Four board. `CFourUI` displays a board from an array of numbers and `CFourUIPlayable` is a playable Connect Four game. Contains no other game logic.

## Usage
```TypeScript
import { CFourUI, CFourUIPlayable } from "connect-four-board" 

```

### `CFourUI`

```HTML
<CFourUI rows={6} columns={7} />
```

### `CFourUIPlayable`

#### Move array and play function

```TypeScript

// Move array
const gameMoves: number[] = []

// Function to call when the user makes a move. Called with the number of the move column.
function playMove(move: number) {
    gameMoves.push(move)
    console.log(move);
}

```
#### Component with required parameters only

```HTML
<CFourUIPlayable
    rows={6}
    columns={7}
    gameMoves={gameMoves}
    playMove={playMove}
/>
```

### Parameters

#### Required

-   `rows`: The number of rows in the Connect Four board.
-   `columns`: The number of columns in the Connect Four board.
-   `gameMoves` (playable only): An array of numbers representing the sequence of moves made in the game.
-   `playMove` (playable only): A function to handle the action of playing a move in the game. Called with the column number when a move is made.

#### Optional

-   `active` (playable only): Is the playable board interactable (default `true`)
-   `moves` (static only): An array of moves made in the game. Moves are represented as the index of the column (default: `[]`).
-   `move_index`: Display moves in `moves` up to this value. Values below `0` show all moves (default: `-1`).
-   `circle_radius`: The radius of the circles representing game pieces (default: `40`).
-   `circle_margin`: The margin between circles representing game pieces, reduced from radius (default: `4`).
-   `background_color`: The background color of the Connect Four board (default: `"gray"`).
-   `empty_color`: The color of empty spaces on the board (default: `"white"`).
-   `player_a_color`: The color representing first player's game pieces (default: `"red"`).
-   `player_b_color`: The color representing second player's game pieces (default: `"yellow"`).
-   `highlight_color`: The color used to highlight the last move made, set to `"transparent"` to disable (default: `"black"`).
-   `onClick` (static only): A function to handle click events on the board, called with two numbers; `row` and `column` (default: `undefined`).
