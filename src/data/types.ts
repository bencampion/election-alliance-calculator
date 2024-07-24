export type Party =
  | "APNI"
  | "BRX"
  | "Con"
  | "DUP"
  | "Green"
  | "Lab"
  | "LD"
  | "PC"
  | "SDLP"
  | "SF"
  | "SNP"
  | "RUK"
  | "UKIP"
  | "UUP"
  | "Other";

export type Result = {
  name: string;
  region: string;
  winner: Party;
} & Partial<Record<Party, number>>;
