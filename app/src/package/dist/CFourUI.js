import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const defaultProps = {
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
const CFourUI = ({ rows, columns, moves = [], move_index = -1, circle_radius = 40, circle_margin = 4, empty_color = "white", background_color = "gray", player_a_color = "red", player_b_color = "yellow", highlight_color = "black", onClick, }) => {
    const style = { backgroundColor: background_color };
    const moveIndex = move_index;
    const createBoardFromMoves = (boardMoves) => {
        const board = [];
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
    const getCircle = (row, column, board) => {
        let fillColor = empty_color;
        const colorCode = board[column][row];
        if (colorCode === 1) {
            fillColor = player_a_color;
        }
        else if (colorCode === 2) {
            fillColor = player_b_color;
        }
        const useMoveIndex = moveIndex >= 0;
        const columnCount = useMoveIndex
            ? moves.slice(0, moveIndex).filter((move) => move === column).length
            : moves.filter((move) => move === column).length;
        const isLastMove = columnCount === rows - row &&
            column ===
                (useMoveIndex ? moves[moveIndex - 1] : moves[moves.length - 1]);
        const circleElement = (_jsx("circle", { cx: column * circle_radius * 2 + circle_radius, cy: row * circle_radius * 2 + circle_radius, r: circle_radius - circle_margin, fill: fillColor, stroke: isLastMove ? highlight_color : undefined, strokeWidth: 3 }, `${row}-${column}`));
        return circleElement;
    };
    const generateCircles = (board) => {
        const circles = [];
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
                circles.push(_jsxs("g", { children: [getCircle(rowIndex, columnIndex, board), _jsx("rect", { x: columnIndex * circle_radius * 2, y: rowIndex * circle_radius * 2, width: circle_radius * 2, height: circle_radius * 2, fill: "transparent", onClick: () => onClick && onClick(rowIndex, columnIndex) })] }, `${rowIndex}-${columnIndex}`));
            }
        }
        return circles;
    };
    let circleArray = [];
    // Check if moves is number[] or number[][]
    if (Array.isArray(moves) && Array.isArray(moves[0])) {
        circleArray = generateCircles(moves);
    }
    else {
        const boardFromMoves = createBoardFromMoves(moves);
        circleArray = generateCircles(boardFromMoves);
    }
    return (_jsx("div", { id: "cfour-board", children: _jsx("svg", { width: columns * circle_radius * 2, height: rows * circle_radius * 2, xmlns: "http://www.w3.org/2000/svg", style: style, children: circleArray }) }));
};
CFourUI.defaultProps = defaultProps;
export default CFourUI;
