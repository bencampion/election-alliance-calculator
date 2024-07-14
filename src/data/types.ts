export type Party =
  | "apni"
  | "brexit"
  | "dup"
  | "con"
  | "green"
  | "lab"
  | "ld"
  | "pc"
  | "sdlp"
  | "sf"
  | "snp"
  | "uup"
  | "other";

export type Result = {
  name: string;
  region: string;
  winner: string;
} & Partial<Record<Party, number>>;
