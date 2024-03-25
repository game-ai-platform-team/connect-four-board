import React, { useState } from "react";
import CFourUI, { CFourUIProps } from "./CFourUI.tsx";

const CFourUIPlayable = ({
    rows,
    columns,
    moves,
    move_index,
    circle_radius,
    circle_margin,
    background_color,
    empty_color,
    player_a_color,
    player_b_color,
}: CFourUIProps) => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [gameMoves, setGameMoves] = useState(moves || []);

    const handleColumnClick = (clickedRow: number, clickedColumn: number) => {
        const newMoves = [...gameMoves, clickedColumn];
        setGameMoves(newMoves);
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
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
                onClick={handleColumnClick}
            />
        </div>
    );
};

export default CFourUIPlayable;
