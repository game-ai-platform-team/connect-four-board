export interface CFourUIProps {
    rows: number;
    columns: number;
    moves?: number[] | number[][];
    move_index?: number;
    circle_radius?: number;
    circle_margin?: number;
    background_color?: string;
    empty_color?: string;
    player_a_color?: string;
    player_b_color?: string;
    highlight_color?: string;
    onClick?: (row: number, column: number) => void;
}
declare const CFourUI: {
    ({ rows, columns, moves, move_index, circle_radius, circle_margin, empty_color, background_color, player_a_color, player_b_color, highlight_color, onClick, }: CFourUIProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<CFourUIProps>;
};
export default CFourUI;
