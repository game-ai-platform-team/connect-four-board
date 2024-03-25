"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var CFourUI_tsx_1 = require("./CFourUI.tsx");
var CFourUIPlayable = function (_a) {
    var rows = _a.rows, columns = _a.columns, move_index = _a.move_index, circle_radius = _a.circle_radius, circle_margin = _a.circle_margin, background_color = _a.background_color, empty_color = _a.empty_color, player_a_color = _a.player_a_color, player_b_color = _a.player_b_color, highlight_color = _a.highlight_color, gameMoves = _a.gameMoves, playMove = _a.playMove;
    var _b = (0, react_1.useState)(1), currentPlayer = _b[0], setCurrentPlayer = _b[1];
    var handleColumnClick = function (_, clickedColumn) {
        var moveCount = gameMoves.filter(function (move) { return move === clickedColumn; }).length;
        if (moveCount < rows) {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
            playMove(clickedColumn);
        }
    };
    return (<div>
            <CFourUI_tsx_1.default rows={rows} columns={columns} moves={gameMoves} move_index={move_index} circle_radius={circle_radius} circle_margin={circle_margin} background_color={background_color} empty_color={empty_color} player_a_color={player_a_color} player_b_color={player_b_color} highlight_color={highlight_color} onClick={handleColumnClick}/>
        </div>);
};
exports.default = CFourUIPlayable;
