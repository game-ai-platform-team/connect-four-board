"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var defaultProps = {
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
var CFourUI = function (_a) {
    var rows = _a.rows, columns = _a.columns, _b = _a.moves, moves = _b === void 0 ? [] : _b, _c = _a.move_index, move_index = _c === void 0 ? -1 : _c, _d = _a.circle_radius, circle_radius = _d === void 0 ? 40 : _d, _e = _a.circle_margin, circle_margin = _e === void 0 ? 4 : _e, _f = _a.empty_color, empty_color = _f === void 0 ? "white" : _f, _g = _a.background_color, background_color = _g === void 0 ? "gray" : _g, _h = _a.player_a_color, player_a_color = _h === void 0 ? "red" : _h, _j = _a.player_b_color, player_b_color = _j === void 0 ? "yellow" : _j, _k = _a.highlight_color, highlight_color = _k === void 0 ? "black" : _k, onClick = _a.onClick;
    var style = { backgroundColor: background_color };
    var moveIndex = move_index;
    var createBoardFromMoves = function (boardMoves) {
        var board = [];
        for (var i = 0; i <= columns; i++) {
            board.push(new Array(rows).fill(0));
        }
        if (boardMoves) {
            boardMoves.forEach(function (move, index) {
                if (index >= moveIndex && moveIndex >= 0) {
                    return;
                }
                if (!isNaN(move)) {
                    var valueToAdd = index % 2 === 0 ? 1 : 2;
                    var boardRow = board[move];
                    var colorIndex = boardRow.lastIndexOf(0);
                    if (colorIndex !== -1) {
                        boardRow[colorIndex] = valueToAdd;
                    }
                }
            });
        }
        return board;
    };
    var getCircle = function (row, column, board) {
        var fillColor = empty_color;
        var colorCode = board[column][row];
        if (colorCode === 1) {
            fillColor = player_a_color;
        }
        else if (colorCode === 2) {
            fillColor = player_b_color;
        }
        var useMoveIndex = moveIndex >= 0;
        var columnCount = useMoveIndex
            ? moves.slice(0, moveIndex).filter(function (move) { return move === column; }).length
            : moves.filter(function (move) { return move === column; }).length;
        var isLastMove = columnCount === rows - row &&
            column ===
                (useMoveIndex ? moves[moveIndex - 1] : moves[moves.length - 1]);
        var circleElement = ((0, jsx_runtime_1.jsx)("circle", { cx: column * circle_radius * 2 + circle_radius, cy: row * circle_radius * 2 + circle_radius, r: circle_radius - circle_margin, fill: fillColor, stroke: isLastMove ? highlight_color : undefined, strokeWidth: 3 }, "".concat(row, "-").concat(column)));
        return circleElement;
    };
    var generateCircles = function (board) {
        var circles = [];
        var _loop_1 = function (columnIndex) {
            var _loop_2 = function (rowIndex) {
                circles.push((0, jsx_runtime_1.jsxs)("g", { children: [getCircle(rowIndex, columnIndex, board), (0, jsx_runtime_1.jsx)("rect", { x: columnIndex * circle_radius * 2, y: rowIndex * circle_radius * 2, width: circle_radius * 2, height: circle_radius * 2, fill: "transparent", onClick: function () {
                                return onClick && onClick(rowIndex, columnIndex);
                            } })] }, "".concat(rowIndex, "-").concat(columnIndex)));
            };
            for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
                _loop_2(rowIndex);
            }
        };
        for (var columnIndex = 0; columnIndex < columns; columnIndex++) {
            _loop_1(columnIndex);
        }
        return circles;
    };
    var circleArray = [];
    // Check if moves is number[] or number[][]
    if (Array.isArray(moves) && Array.isArray(moves[0])) {
        circleArray = generateCircles(moves);
    }
    else {
        var boardFromMoves = createBoardFromMoves(moves);
        circleArray = generateCircles(boardFromMoves);
    }
    return ((0, jsx_runtime_1.jsx)("div", { id: "cfour-board", children: (0, jsx_runtime_1.jsx)("svg", { width: columns * circle_radius * 2, height: rows * circle_radius * 2, xmlns: "http://www.w3.org/2000/svg", style: style, children: circleArray }) }));
};
CFourUI.defaultProps = defaultProps;
exports.default = CFourUI;
