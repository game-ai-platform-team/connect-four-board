import { render, screen } from '@testing-library/react';
import CFourUI from './CFourUI.tsx';

describe("CFourUI", () => {
  const ui = (
    <CFourUI column={7} row={6} moves={[0,1,2,3,3,3,3,3,3,3,3,1,1,1,1,1]}/>
  );

  test('renders CFourUI', () => {
  
  });
});
