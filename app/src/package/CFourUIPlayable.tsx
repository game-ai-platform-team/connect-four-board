import { useState } from "react";
import CFourUI, { CFourUIProps } from "./CFourUI.tsx";

const CFourUIPlayable = ({
    rows,
    columns,
    move_index,
    circle_radius,
    circle_margin,
    background_color,
    empty_color,
    player_a_color,
    player_b_color,
    highlight_color,
    gameMoves,
    playMove,
}: CFourUIProps & {
    gameMoves: number[];
    playMove: (move: number) => void;
}) => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    
    const handleColumnClick = (_: number, clickedColumn: number) => {
        const moveCount = gameMoves.filter(
            (move) => move === clickedColumn,
        ).length;
        if (moveCount < rows) {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
            playMove(clickedColumn);
        }
    };

    return (
        <div>
            <CFourUI
                rows={rows}
                columns={columns}
                moves={gameMoves}
                move_index={move_index}
                circle_radius={circle_radius}
                circle_margin={circle_margin}
                background_color={background_color}
                empty_color={empty_color}
                player_a_color={player_a_color}
                player_b_color={player_b_color}
                highlight_color={highlight_color}
                onClick={handleColumnClick}
            />
        </div>
    );
};

export default CFourUIPlayable;
