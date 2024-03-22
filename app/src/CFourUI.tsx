import React from "react";

interface CFourUIProps {
    row: number;
    column: number;
    moves: number[];
    moveIndex: number;
    background_color: string;
    empty_color: string;
    player_a_color: string;
    player_b_color: string;
}


const CFourUI = ({ row, column, moves, moveIndex, empty_color, background_color, player_a_color, player_b_color }: CFourUIProps) => {
    const style = { backgroundColor: background_color };

    const createBoardFromMoves = () => {
        const board: number[][] = [];
        for (let i = 0; i <= column; i++) {
            board.push(new Array(row).fill(0));
        }

        if (moves) {
            moves.forEach((move, index) => {
                if (index >= moveIndex) {
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
            fillColor = player_b_color
        }

        return (
            <circle
                key={`${row}-${column}`}
                cx={column * 80 + 40}
                cy={row * 80 + 40}
                r={32}
                fill={fillColor}
            ></circle>
        );
    };

    const board = createBoardFromMoves();

    const generateCircles = () => {
        const circles = [];
        for (let columnIndex = 0; columnIndex < column; columnIndex++) {
            for (let rowIndex = 0; rowIndex < row; rowIndex++) {
                circles.push(getCircle(rowIndex, columnIndex, board));
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

export default CFourUI;
