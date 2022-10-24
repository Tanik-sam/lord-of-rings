import React from 'react';
import { render, screen, fireEvent, getAllByRole } from '@testing-library/react';
import FormAddCard from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils'

describe('index', () => {
  it('renders App component', () => {
    render (<FormAddCard />);
    screen.debug();
    expect(screen.getAllByText(/Creating of card/i)[0]).toBeInTheDocument();
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

describe('FormAddCard',() => {
  describe ("with valid inputs",() => {
    render (<FormAddCard />)
    screen.debug();
    fireEvent.change(screen.getAllByRole("textbox")[0], {
      target: {value: 'newName',}
    })
    screen.debug();
  });
});

describe("Index", () => {
  describe("with valid inputs", () => {
    it('calls the onSubmit function', async () => {
      const {getByLabelText, getByRole} = render(<FormAddCard/>)

      await act(async () => {
        fireEvent.change(getByLabelText("wikiUrl"), {target: {value: "https://gghffh"}})
        fireEvent.change(getByLabelText("name"), {target: {value: "name"}})
      })

      await act(async () => {
        fireEvent.click(getByLabelText("submit"))
      })
      expect(screen.getAllByText(/name/i)[0]).toBeInTheDocument();
    })
  })
})

