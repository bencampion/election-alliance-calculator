export type Party =
  | "APNI"
  | "BRX"
  | "Con"
  | "DUP"
  | "Green"
  | "Ind"
  | "Lab"
  | "LD"
  | "PC"
  | "RUK"
  | "SDLP"
  | "SF"
  | "SNP"
  | "Spk"
  | "TUV"
  | "UKIP"
  | "UUP"
  | "Other";

export type Alliance = "Left" | "Right";

export type Result = {
  name: string;
  region: string;
  winner: Party;
} & Partial<Record<Party, number>>;

export type ResultChange = Result & { allianceWinner: Alliance };

export interface Election {
  year: string;
  majoritySeats: Map<Party, number>;
  results: Result[];
}
