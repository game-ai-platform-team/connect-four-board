/// <reference types="react" />
import { CFourUIProps } from "./CFourUI";
interface CFourUIPlayableProps {
    gameMoves: number[] | number[][];
    playMove: (move: number) => void;
    active?: boolean;
}
declare const CFourUIPlayable: ({ rows, columns, move_index, circle_radius, circle_margin, background_color, empty_color, player_a_color, player_b_color, highlight_color, active, gameMoves, playMove, }: CFourUIProps & CFourUIPlayableProps) => import("react").JSX.Element;
export default CFourUIPlayable;
