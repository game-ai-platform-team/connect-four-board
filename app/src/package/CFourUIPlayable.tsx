import { useState } from "react";
import CFourUI, { CFourUIProps } from "./CFourUI.tsx";

interface CFourUIPlayableProps {
    gameMoves: number[];
    playMove: (move: number) => void;
    active?: boolean;
}

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
    active = true,
    gameMoves,
    playMove,
}: CFourUIProps & CFourUIPlayableProps ) => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    
    const handleColumnClick = (_: number, clickedColumn: number) => {
        const moveCount = gameMoves.filter(
            (move) => move === clickedColumn,
        ).length;
        if (moveCount < rows && active) {
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
