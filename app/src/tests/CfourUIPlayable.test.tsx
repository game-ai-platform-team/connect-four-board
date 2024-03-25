import { render, RenderResult, fireEvent } from "@testing-library/react";
import CFourUIPlayable from "../components/CFourUIPlayable";
import { expect, test, describe, beforeEach } from "vitest";

describe("CFourUIPlayable", () => {
    let view: RenderResult;
    let gameMoves: number[];
    let playMove: (move: number) => void;

    beforeEach(() => {
        gameMoves = [];
        playMove = (move: number) => {
            gameMoves.push(move);
        };

        const ui = (
            <CFourUIPlayable
                rows={6}
                columns={7}
                move_index={-1}
                circle_radius={40}
                circle_margin={4}
                background_color="gray"
                empty_color="white"
                player_a_color="red"
                player_b_color="yellow"
                highlight_color="black"
                gameMoves={gameMoves}
                playMove={playMove}
            />
        );
        view = render(ui);
    });

    test("renders CFourUIPlayable", () => {
        const playableComponent = view.container.querySelector("div");
        expect(playableComponent).not.toBeNull();
    });

    test("clicking a column adds a move", () => {
        const column = view.container.querySelector("#cfour-board g rect");
        expect(column).not.toBeNull();
        fireEvent.click(column!);

        expect(gameMoves.length).toBeGreaterThan(0);
    });

    test("clicking a full column doesn't add a move", () => {
        // Fill a column
        for (let i = 0; i < 6; i++) {
            playMove(0);
        }

        const column = view.container.querySelector("#cfour-board g rect");
        expect(column).not.toBeNull();
        fireEvent.click(column!);

        expect(gameMoves.length).toBe(6);
    });

    test("alternate players on column click", () => {
        const column = view.container.querySelector("#cfour-board g rect");
        expect(column).not.toBeNull();
        fireEvent.click(column!);

        expect(gameMoves.length).toBe(1);
        expect(gameMoves[0]).toBe(0);

        fireEvent.click(column!);

        expect(gameMoves.length).toBe(2);
        expect(gameMoves[1]).toBe(0);
    });
});
