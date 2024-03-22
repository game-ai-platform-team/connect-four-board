import React from "react";

export interface CFourUIProps {
    row: number;
    column: number;
    moves: number[];
    moveIndex?: number;
    circle_radius?: number;
    circle_margin?: number;
    background_color?: string;
    empty_color?: string;
    player_a_color?: string;
    player_b_color?: string;
    onClick?: (row: number, column: number) => void;
}

const defaultProps: Partial<CFourUIProps> = {
    moveIndex: -1,
    circle_radius: 40,
    circle_margin: 4,
    empty_color: "white",
    background_color: "gray",
    player_a_color: "red",
    player_b_color: "yellow",
};

const CFourUI = ({
    row,
    column,
    moves,
    moveIndex = -1,
    circle_radius = 40,
    circle_margin = 4,
    empty_color = "white",
    background_color = "gray",
    player_a_color = "red",
    player_b_color = "yellow",
    onClick,
}: CFourUIProps) => {
    const style = { backgroundColor: background_color };

    const createBoardFromMoves = () => {
        const board: number[][] = [];

        for (let i = 0; i <= column; i++) {
            board.push(new Array(row).fill(0));
        }

        if (moves) {
            moves.forEach((move, index) => {
                if (index >= moveIndex && moveIndex > 0) {
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

        return (
            <circle
                key={`${row}-${column}`}
                cx={column * circle_radius * 2 + circle_radius}
                cy={row * circle_radius * 2 + circle_radius}
                r={circle_radius - circle_margin}
                fill={fillColor}
            ></circle>
        );
    };

    const board = createBoardFromMoves();

    const generateCircles = () => {
        const circles: JSX.Element[] = [];
        for (let columnIndex = 0; columnIndex < column; columnIndex++) {
            for (let rowIndex = 0; rowIndex < row; rowIndex++) {
                circles.push(
                    <g key={`${rowIndex}-${columnIndex}`}>
                        {getCircle(rowIndex, columnIndex, board)}
                        <rect
                            x={columnIndex * circle_radius * 2}
                            y={rowIndex * circle_radius * 2}
                            width={circle_radius * 2}
                            height={circle_radius * 2}
                            fill="transparent"
                            onClick={() => onClick && onClick(rowIndex, columnIndex)}
                        />
                    </g>
                );
            }
        }
        return circles;
    };

    return (
        <div id="cfour-board">
            <svg
                width={column * 80}
                height={row * 80}
                xmlns="http://www.w3.org/2000/svg"
                style={style}
                >
                {generateCircles()}
            </svg>
        </div>
    );
};

CFourUI.defaultProps = defaultProps;

export default CFourUI;
