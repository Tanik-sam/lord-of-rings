import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormAddCard from './search';
import Search from './search';
import { apiCharacter } from './api'

describe('index', () => {
  it('renders App component', () => {
    render (<Search cbSearch={async ()=> await apiCharacter('Gandalf')} />);
    screen.debug();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
describe('events', () => {
it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});


