import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("No alliances", () => {
  beforeAll(() => {
    render(<App />);
  });

  test.each([
    [0, "Conservative", 365],
    [1, "Labour", 202],
    [2, "SNP", 48],
    [3, "Lib Dems", 11],
    [4, "DUP", 8],
    [5, "Sinn Féin", 7],
    [6, "Plaid Cymru", 4],
    [7, "SDLP", 2],
    [8, "APNI", 1],
    [9, "Green", 1],
    [10, "Other", 1],
  ])("Result %i: %s have %i seats", (position, party, seats) => {
    expect(screen.getAllByRole("rowheader")[position]).toHaveTextContent(party);
    expect(screen.getAllByRole("cell")[position]).toHaveTextContent(seats);
  });

  test("no seats changed", () => {
    expect(screen.getByText("Seats changed (0)")).toBeInTheDocument();
    expect(screen.getByText("No seat changes.")).toBeInTheDocument();
  });

  afterAll(cleanup);
});

describe("[Lib Dem + Green] Left Alliance and [DUP + UUP] Right Alliance", () => {
  beforeAll(() => {
    render(<App />);
    userEvent.click(screen.getAllByLabelText("Green")[0]);
    userEvent.click(screen.getAllByLabelText("Lib Dems")[0]);
    userEvent.click(screen.getAllByLabelText("DUP")[1]);
    userEvent.click(screen.getAllByLabelText("UUP")[1]);
  });

  test.each([
    [0, "Conservative", 364],
    [1, "Labour", 201],
    [2, "SNP", 47],
    [3, "Left Alliance", 15],
    [4, "Right Alliance", 9],
    [5, "Sinn Féin", 7],
    [6, "Plaid Cymru", 4],
    [7, "SDLP", 2],
    [8, "Other", 1],
  ])("Result %i: %s have %i seats", (position, party, seats) => {
    expect(screen.getAllByRole("rowheader")[position]).toHaveTextContent(party);
    expect(screen.getAllByRole("cell")[position]).toHaveTextContent(seats);
  });

  test("Left Alliance check boxes", () => {
    expect(screen.getAllByLabelText("DUP")[0]).toBeDisabled();
    expect(screen.getAllByLabelText("Green")[0]).toBeChecked();
    expect(screen.getAllByLabelText("Lib Dems")[0]).toBeChecked();
    expect(screen.getAllByLabelText("UUP")[0]).toBeDisabled();
  });

  test("Right Alliance check boxes", () => {
    expect(screen.getAllByLabelText("DUP")[1]).toBeChecked();
    expect(screen.getAllByLabelText("Green")[1]).toBeDisabled();
    expect(screen.getAllByLabelText("Lib Dems")[1]).toBeDisabled();
    expect(screen.getAllByLabelText("UUP")[1]).toBeChecked();
  });

  test("4 seats changed", () => {
    expect(screen.getByText("Seats changed (4)")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(
      "Carshalton and Wallington — London (Left Alliance gain from Conservative)",
    );
    expect(screen.getAllByRole("listitem")[1]).toHaveTextContent(
      "East Dunbartonshire — Scotland (Left Alliance gain from SNP)",
    );
    expect(screen.getAllByRole("listitem")[2]).toHaveTextContent(
      "North Down — Northern Ireland (Right Alliance gain from APNI)",
    );
    expect(screen.getAllByRole("listitem")[3]).toHaveTextContent(
      "Sheffield, Hallam — Yorkshire and The Humber (Left Alliance gain from Labour)",
    );
  });

  test("query string is updated", () => {
    expect(window.location.search).toBe(
      "?left=green&left=ld&right=dup&right=uup",
    );
  });

  afterAll(cleanup);
});
