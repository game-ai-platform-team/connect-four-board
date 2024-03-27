"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CFourUI_1 = __importDefault(require("./CFourUI"));
var CFourUIPlayable = function (_a) {
    var rows = _a.rows, columns = _a.columns, move_index = _a.move_index, circle_radius = _a.circle_radius, circle_margin = _a.circle_margin, background_color = _a.background_color, empty_color = _a.empty_color, player_a_color = _a.player_a_color, player_b_color = _a.player_b_color, highlight_color = _a.highlight_color, _b = _a.active, active = _b === void 0 ? true : _b, gameMoves = _a.gameMoves, playMove = _a.playMove;
    var _c = (0, react_1.useState)(1), currentPlayer = _c[0], setCurrentPlayer = _c[1];
    var handleColumnClick = function (_, clickedColumn) {
        var moveCount = 0;
        var canPlace = true;
        if (Array.isArray(gameMoves) && Array.isArray(gameMoves[0])) {
            var gameMatrix = gameMoves;
            if (gameMatrix[clickedColumn].lastIndexOf(0) === -1) {
                canPlace = false;
            }
        }
        else {
            moveCount = gameMoves.filter(function (move) { return move === clickedColumn; }).length;
            if (moveCount >= rows) {
                canPlace = false;
                console.log(moveCount);
            }
        }
        if (canPlace && active) {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
            playMove(clickedColumn);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(CFourUI_1.default, { rows: rows, columns: columns, moves: gameMoves, move_index: move_index, circle_radius: circle_radius, circle_margin: circle_margin, background_color: background_color, empty_color: empty_color, player_a_color: player_a_color, player_b_color: player_b_color, highlight_color: highlight_color, onClick: handleColumnClick }) }));
};
exports.default = CFourUIPlayable;
