import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';
import * as searchAPIMock from  './searchAPI';

describe("search input", () => {
  it("should render without breaking", () => {
    render(<Search />);

    expect(screen.findByLabelText("Search input")).not.toBeNull();
  });

  it("should call searchByTitle on key 'enter'", () => {
    
    searchAPIMock.mockImplementation(() => {
      return {
        searchByTitle: jest.fn()
      }
    });

    render(<Search />);

    fireEvent.keyPress(searchComponent, {key: 'Enter', code: 'Enter', charCode: 13});
    
    expect
    
  })

  it("Should handle inputs", () => {
    const inputField = screen.findByLabelText("Search input");

    fireEvent.keyPress(inputField, {target: {value: "anyvalue"}});

    expect(inputField).toContain("anyvalue");
  })

  
}) 