import { render } from "@testing-library/react";
import CFourUI from "../CFourUI.tsx";
import { expect, test, describe, beforeEach } from "vitest";

describe("CFourUI", () => {
    let view: RenderResult;

    beforeEach(() => {
        const ui = <CFourUI columns={7} rows={6} moves={[0, 4, 2, 3]} />;
        view = render(ui);
    });

    test("renders CFourUI", () => {
        const board = view.container.querySelector("#cfour-board");
        expect(board).not.toBeNull();
    });

    test("moves appear correctly", () => {
        const board = view.container.querySelector("#cfour-board");
        const circles = board?.querySelectorAll("circle");
        const circle_red = circles?.[5];
        const circle_yellow = circles?.[29];

        expect(circle_red?.getAttribute("fill")).toBe("red");
        expect(circle_yellow?.getAttribute("fill")).toBe("yellow");

        const whiteCircles = Array.from(
            board?.querySelectorAll("circle") || [],
        ).filter((circle) => circle.getAttribute("fill") === "white");
        expect(whiteCircles.length).toBe(6 * 7 - 4);
    });

    test("all moves appear when index is minus one", () => {
        const board = view.container.querySelector("#cfour-board");
        const circles = board?.querySelectorAll("circle");
        const circle_red_1 = circles?.[5];
        const circle_yellow_1 = circles?.[29];

        const circle_red_2 = circles?.[17];
        const circle_yellow_2 = circles?.[23];

        expect(circle_red_1?.getAttribute("fill")).toBe("red");
        expect(circle_yellow_1?.getAttribute("fill")).toBe("yellow");
        expect(circle_red_2?.getAttribute("fill")).toBe("red");
        expect(circle_yellow_2?.getAttribute("fill")).toBe("yellow");

        const whiteCircles = Array.from(
            board?.querySelectorAll("circle") || [],
        ).filter((circle) => circle.getAttribute("fill") === "white");
        expect(whiteCircles.length).toBe(6 * 7 - 4);
    });

    test("no moves appear when index is zero", () => {
        const ui = (
            <CFourUI columns={7} rows={6} moves={[0, 4, 2, 3]} move_index={0} />
        );

        const view = render(ui);
        const board = view.container.querySelector("#cfour-board");

        const whiteCircles = Array.from(
            board?.querySelectorAll("circle") || [],
        ).filter((circle) => circle.getAttribute("fill") === "white");
        expect(whiteCircles.length).toBe(6 * 7);
    });

    test("more moves added to a column", () => {
        const ui = (
            <CFourUI
                columns={7}
                rows={6}
                moves={[3, 3, 3, 3, 3, 3, 3]}
                moveIndex={7}
            />
        );

        const view = render(ui);
        const board = view.container.querySelector("#cfour-board");
        const circles = board?.querySelectorAll("circle");
        const circle_red_1 = circles?.[23];
        const circle_yellow_1 = circles?.[22];
        const circle_red_2 = circles?.[21];
        const circle_yellow_2 = circles?.[20];
        const circle_red_3 = circles?.[19];
        const circle_yellow_3 = circles?.[18];

        expect(circle_red_1?.getAttribute("fill")).toBe("red");
        expect(circle_yellow_1?.getAttribute("fill")).toBe("yellow");
        expect(circle_red_2?.getAttribute("fill")).toBe("red");
        expect(circle_yellow_2?.getAttribute("fill")).toBe("yellow");
        expect(circle_red_3?.getAttribute("fill")).toBe("red");
        expect(circle_yellow_3?.getAttribute("fill")).toBe("yellow");

        const whiteCircles = Array.from(
            board?.querySelectorAll("circle") || [],
        ).filter((circle) => circle.getAttribute("fill") === "white");
        expect(whiteCircles.length).toBe(6 * 7 - 6);
    });
});
