/// <reference types="react" />
import { CFourUIProps } from "./CFourUI.tsx";
declare const CFourUIPlayable: ({ rows, columns, move_index, circle_radius, circle_margin, background_color, empty_color, player_a_color, player_b_color, highlight_color, gameMoves, playMove, }: CFourUIProps & {
    gameMoves: number[];
    playMove: (move: number) => void;
}) => import("react").JSX.Element;
export default CFourUIPlayable;
