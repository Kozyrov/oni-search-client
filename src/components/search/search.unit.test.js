import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

describe("search input", () => {
  it("should render without breaking", () => {
    render(<Search />);

    expect(screen.findByLabelText("Search input")).not.toBeNull();
  });

  it("should trigger search on 'enter'", () => {
    render(<Search />);

    const searchComponent = screen.findByLabelText("Search component");

    fireEvent.keyPress(searchComponent, {key: 'Enter', code: 'Enter', charCode: 13});
    

    expect()
  })
}) 