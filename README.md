# connect-four-board

Two simple components to display a Connect Four board. `CFourUI` displays a board from an array of numbers representing moves or a matrix representing the board state. `CFourUIPlayable` is an interactable Connect Four board. Contains no game logic.

## Usage

```TypeScript
import { CFourUI, CFourUIPlayable } from "connect-four-board"

```

### `CFourUI`

#### Component with required paremeters only

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
-   `gameMoves` (playable only): An array of numbers representing the sequence of moves made in the game OR a matrix representing the game board, where `0` is empty space, `1` is the first player and `2` is the second player.
-   `playMove` (playable only): A function to handle the action of playing a move in the game. Called with the column number when a move is made.

#### Optional

-   `active` (playable only): Is the playable board interactable (default `true`)
-   `moves` (static only): An array of moves made in the game. Moves are represented as the index of the column OR as a matrix where `0` is empty space, `1` is the first player and `2` is the second player. (default: `[]`).
-   `move_index`: Display moves in `moves` up to this value. Values below `0` show all moves (default: `-1`).
-   `circle_radius`: The radius of the circles representing game pieces (default: `40`).
-   `circle_margin`: The margin between circles representing game pieces, reduced from radius (default: `4`).
-   `background_color`: The background color of the Connect Four board (default: `"gray"`).
-   `empty_color`: The color of empty spaces on the board (default: `"white"`).
-   `player_a_color`: The color representing first player's game pieces (default: `"red"`).
-   `player_b_color`: The color representing second player's game pieces (default: `"yellow"`).
-   `highlight_color`: The color used to highlight the last move made, set to `"transparent"` to disable (default: `"black"`).
-   `onClick` (static only): A function to handle click events on the board, called with two numbers; `row` and `column` (default: `undefined`).

### Moves

Moves can be given as either an array of numbers, or a matrix of numbers. The array has the index of the column of each move in the order they were played.

The matrix shows moves as the state of the board. `0` is for empty, `1` is for the first player and `2` is for the second player. The size of the matrix should be equal to `rows` * `columns`. First element of the matrix array is the leftmost column of the Connect Four board. Left to right in the column array translates to up to down in the board component.

```TypeScript
// Both arrays and matrices are valid inputs for CFourUI and CFourUIPlayable

// Create a 6 x 4 board where the bottom row is full of pieces in alternating colors
moveArray: number[] = [0,1,2,3]

(<CFourUI rows={6} columns={4} moves={moveArray} />)

// Create a 4 x 4 board with one piece in bottom row, leftmost column
moveMatrix: number[][] = [
    [0,0,0,1],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

(<CFourUI rows={4} columns={4} moves={moveMatrix} />)

```
