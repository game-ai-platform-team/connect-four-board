export interface CFourUIProps {
    rows: number;
    columns: number;
    moves?: number[] | number[][];
    move_index?: number;
    circle_radius?: number;
    circle_margin?: number;
    background_color?: string;
    empty_color?: string;
    player_a_color?: string;
    player_b_color?: string;
    highlight_color?: string;
    onClick?: (row: number, column: number) => void;
}

const defaultProps: Partial<CFourUIProps> = {
    moves: [],
    move_index: -1,
    circle_radius: 40,
    circle_margin: 4,
    empty_color: "white",
    background_color: "gray",
    player_a_color: "red",
    player_b_color: "yellow",
    highlight_color: "black",
};

const CFourUI = ({
    rows,
    columns,
    moves = [],
    move_index = -1,
    circle_radius = 40,
    circle_margin = 4,
    empty_color = "white",
    background_color = "gray",
    player_a_color = "red",
    player_b_color = "yellow",
    highlight_color = "black",
    onClick,
}: CFourUIProps) => {
    const style = { backgroundColor: background_color };
    const moveIndex = move_index;

    const createBoardFromMoves = (boardMoves: number[]) => {
        const board: number[][] = [];

        for (let i = 0; i <= columns; i++) {
            board.push(new Array(rows).fill(0));
        }

        if (boardMoves) {
            boardMoves.forEach((move, index) => {
                if (index >= moveIndex && moveIndex >= 0) {
                    return;
                }
                if (!isNaN(move)) {
                    const valueToAdd = index % 2 === 0 ? 1 : 2;
                    const boardRow = board[move];
                    const colorIndex = boardRow.lastIndexOf(0);
                    if (colorIndex !== -1) {
                        boardRow[colorIndex] = valueToAdd;
                    }
                }
            });
        }

        return board;
    };

    const getCircle = (row: number, column: number, board: number[][]) => {
        let fillColor = empty_color;
        const colorCode = board[column][row];
        if (colorCode === 1) {
            fillColor = player_a_color;
        } else if (colorCode === 2) {
            fillColor = player_b_color;
        }

        const useMoveIndex = moveIndex >= 0;

        const columnCount = useMoveIndex
            ? moves.slice(0, moveIndex).filter((move) => move === column).length
            : moves.filter((move) => move === column).length;
        const isLastMove =
            columnCount === rows - row &&
            column ===
                (useMoveIndex ? moves[moveIndex - 1] : moves[moves.length - 1]);

        const circleElement = (
            <circle
                key={`${row}-${column}`}
                cx={column * circle_radius * 2 + circle_radius}
                cy={row * circle_radius * 2 + circle_radius}
                r={circle_radius - circle_margin}
                fill={fillColor}
                stroke={isLastMove ? highlight_color : undefined}
                strokeWidth={3}
            />
        );

        return circleElement;
    };

    const generateCircles = (board: number[][]) => {
        const circles: JSX.Element[] = [];
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
                circles.push(
                    <g key={`${rowIndex}-${columnIndex}`}>
                        {getCircle(rowIndex, columnIndex, board)}
                        <rect
                            x={columnIndex * circle_radius * 2}
                            y={rowIndex * circle_radius * 2}
                            width={circle_radius * 2}
                            height={circle_radius * 2}
                            fill="transparent"
                            onClick={() =>
                                onClick && onClick(rowIndex, columnIndex)
                            }
                        />
                    </g>,
                );
            }
        }
        return circles;
    };

    let circleArray: JSX.Element[] = [];
    // Check if moves is number[] or number[][]
    if (Array.isArray(moves) && Array.isArray(moves[0])) {
        circleArray = generateCircles(moves as number[][]);
    } else {
        const boardFromMoves: number[][] = createBoardFromMoves(
            moves as number[],
        );
        circleArray = generateCircles(boardFromMoves);
    }

    return (
        <div id="cfour-board">
            <svg
                width={columns * circle_radius * 2}
                height={rows * circle_radius * 2}
                xmlns="http://www.w3.org/2000/svg"
                style={style}
            >
                {circleArray}
            </svg>
        </div>
    );
};

CFourUI.defaultProps = defaultProps;

export default CFourUI;
