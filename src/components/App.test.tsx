import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

describe("Results", () => {
  const results: Record<string, string[][]> = {
    "2024": [
      ["Labour", "411"],
      ["Conservative", "121"],
      ["Lib Dems", "72"],
      ["SNP", "9"],
      ["Sinn Féin", "7"],
      ["Independent", "6"],
      ["DUP", "5"],
      ["Reform", "5"],
      ["Green", "4"],
      ["Plaid Cymru", "4"],
      ["SDLP", "2"],
      ["APNI", "1"],
      ["Speaker", "1"],
      ["TUV", "1"],
      ["UUP", "1"],
    ],
    "2019": [
      ["Conservative", "365"],
      ["Labour", "202"],
      ["SNP", "48"],
      ["Lib Dems", "11"],
      ["DUP", "8"],
      ["Sinn Féin", "7"],
      ["Plaid Cymru", "4"],
      ["SDLP", "2"],
      ["APNI", "1"],
      ["Green", "1"],
      ["Speaker", "1"],
    ],
    "2017": [
      ["Conservative", "317"],
      ["Labour", "262"],
      ["SNP", "35"],
      ["Lib Dems", "12"],
      ["DUP", "10"],
      ["Sinn Féin", "7"],
      ["Plaid Cymru", "4"],
      ["Green", "1"],
      ["Independent", "1"],
      ["Speaker", "1"],
    ],
    "2015": [
      ["Conservative", "330"],
      ["Labour", "232"],
      ["SNP", "56"],
      ["DUP", "8"],
      ["Lib Dems", "8"],
      ["Sinn Féin", "4"],
      ["Plaid Cymru", "3"],
      ["SDLP", "3"],
      ["UUP", "2"],
      ["Green", "1"],
      ["Independent", "1"],
      ["Speaker", "1"],
      ["UKIP", "1"],
    ],
  };

  for (const year in results) {
    describe(year, () => {
      beforeAll(async () => {
        render(<App />);
        await userEvent.click(screen.getByRole("link", { name: year }));
        await screen.findByRole("link", {
          name: `${year} United Kingdom general election`,
        });
      });

      test.each(results[year].map((result, i) => [i, ...result]))(
        "Position %i: %s have %i seats",
        (position, party, seats) => {
          expect(screen.getAllByRole("rowheader")[position]).toHaveTextContent(
            party,
          );
          expect(screen.getAllByRole("cell")[position]).toHaveTextContent(
            seats,
          );
        },
      );

      test("No seats changed", () => {
        expect(screen.getByText("Seats changed (0)")).toBeInTheDocument();
        expect(screen.getByText("No seat changes.")).toBeInTheDocument();
      });

      afterAll(cleanup);
    });
  }
});

describe("Alliances", () => {
  describe("2019", () => {
    describe("[Lib Dem + Green] Left Alliance and [DUP + UUP] Right Alliance", () => {
      beforeAll(async () => {
        render(<App />);
        await userEvent.click(screen.getByRole("link", { name: "2019" }));
        await screen.findByRole("link", {
          name: "2019 United Kingdom general election",
        });
        await userEvent.click(screen.getAllByLabelText("Green")[0]);
        await userEvent.click(screen.getAllByLabelText("Lib Dems")[0]);
        await userEvent.click(screen.getAllByLabelText("DUP")[1]);
        await userEvent.click(screen.getAllByLabelText("UUP")[1]);
      });

      test.each([
        [0, "Conservative", "364"],
        [1, "Labour", "201"],
        [2, "SNP", "47"],
        [3, "Left Alliance", "15"],
        [4, "Right Alliance", "9"],
        [5, "Sinn Féin", "7"],
        [6, "Plaid Cymru", "4"],
        [7, "SDLP", "2"],
        [8, "Speaker", "1"],
      ])("Result %i: %s have %i seats", (position, party, seats) => {
        expect(screen.getAllByRole("rowheader")[position]).toHaveTextContent(
          party,
        );
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
        const gains = screen.getAllByText(/gain from/);
        expect(gains[0]).toHaveTextContent(
          "Carshalton and Wallington — London (Left Alliance gain from Conservative)",
        );
        expect(gains[1]).toHaveTextContent(
          "East Dunbartonshire — Scotland (Left Alliance gain from SNP)",
        );
        expect(gains[2]).toHaveTextContent(
          "North Down — Northern Ireland (Right Alliance gain from APNI)",
        );
        expect(gains[3]).toHaveTextContent(
          "Sheffield, Hallam — Yorkshire and The Humber (Left Alliance gain from Labour)",
        );
      });

      afterAll(cleanup);
    });
  });
});
