import React from "react";
import { render } from '@testing-library/react';
import CFourUI from '../CFourUI.tsx';
import  { expect, test, describe } from 'vitest';

describe("CFourUI", () => {
  const ui = (
    <CFourUI columns={7} rows={6} moves={[0,1,2,3]}/>
  );

  test('hello world', () => {
    expect(true).toBe(true)
  }) 

  test('renders CFourUI', () => {
    const component = render(ui);
    const board = component.container.querySelector("#cfour-board");
        expect(board).not.toBeNull();
  });

  test("moves appear correctly", () => {
    const ui = (
      <CFourUI columns={7} rows={6} moves={[0,4,2,3]} moveIndex={3}/>
    );

    const component = render(ui);
    const board = component.container.querySelector("#cfour-board");
    const circles = board?.querySelectorAll("circle");
    const circle_red = circles?.[5]
    const circle_yellow = circles?.[29]

    expect(circle_red?.getAttribute("fill")).toBe("red");
    expect(circle_yellow?.getAttribute("fill")).toBe("yellow");

    const whiteCircles = Array.from(
        board?.querySelectorAll("circle") || [],
    ).filter((circle) => circle.getAttribute("fill") === "white");
    expect(whiteCircles.length).toBe(6 * 7 -3);
  });

  test("all moves appear when index is minus one", () => {
    const ui = (
      <CFourUI columns={7} rows={6} moves={[0,4,2,3]} moveIndex={-1}/>
    );

    const component = render(ui);
    const board = component.container.querySelector("#cfour-board");
    const circles = board?.querySelectorAll("circle");
    const circle_red_1 = circles?.[5]
    const circle_yellow_1 = circles?.[29]

    const circle_red_2 = circles?.[17]
    const circle_yellow_2 = circles?.[23]

    expect(circle_red_1?.getAttribute("fill")).toBe("red");
    expect(circle_yellow_1?.getAttribute("fill")).toBe("yellow");
    expect(circle_red_2?.getAttribute("fill")).toBe("red");
    expect(circle_yellow_2?.getAttribute("fill")).toBe("yellow");

    const whiteCircles = Array.from(
        board?.querySelectorAll("circle") || [],
    ).filter((circle) => circle.getAttribute("fill") === "white");
    expect(whiteCircles.length).toBe(6 * 7 -4);
  });

  test("no moves appear when index is zero", () => {
    const ui = (
      <CFourUI columns={7} rows={6} moves={[0,4,2,3]} moveIndex={0}/>
    );

    const component = render(ui);
    const board = component.container.querySelector("#cfour-board");

    const whiteCircles = Array.from(
        board?.querySelectorAll("circle") || [],
    ).filter((circle) => circle.getAttribute("fill") === "white");
    expect(whiteCircles.length).toBe(6 * 7);
  });

  test("more moves added to a column", () => {
    const ui = (
      <CFourUI columns={7} rows={6} moves={[3,3,3,3,3,3,3]} moveIndex={7}/>
    );

    const component = render(ui);
    const board = component.container.querySelector("#cfour-board");
    const circles = board?.querySelectorAll("circle");
    const circle_red_1 = circles?.[23]
    const circle_yellow_1 = circles?.[22]
    const circle_red_2 = circles?.[21];
    const circle_yellow_2 = circles?.[20]
    const circle_red_3 = circles?.[19]
    const circle_yellow_3 = circles?.[18]

    expect(circle_red_1?.getAttribute("fill")).toBe("red");
    expect(circle_yellow_1?.getAttribute("fill")).toBe("yellow");
    expect(circle_red_2?.getAttribute("fill")).toBe("red");
    expect(circle_yellow_2?.getAttribute("fill")).toBe("yellow");
    expect(circle_red_3?.getAttribute("fill")).toBe("red");
    expect(circle_yellow_3?.getAttribute("fill")).toBe("yellow");

    const whiteCircles = Array.from(
        board?.querySelectorAll("circle") || [],
    ).filter((circle) => circle.getAttribute("fill") === "white");
    expect(whiteCircles.length).toBe(6 * 7 -6);
  });
});