import { render } from '@testing-library/react';
import CFourUI from './CFourUI.tsx';

describe("CFourUI", () => {
  const ui = (
    <CFourUI column={7} row={6} moves={[0,1,2,3]}/>
  );

  test('renders CFourUI', () => {
    const component = render(ui);
    const board = component.container.querySelector("#cfour-board");
        expect(board).not.toBeNull();
  });
});
