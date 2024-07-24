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

export type Result = {
  name: string;
  region: string;
  winner: Party;
} & Partial<Record<Party, number>>;
