export type Party =
  | "apni"
  | "brx"
  | "con"
  | "dup"
  | "green"
  | "lab"
  | "ld"
  | "pc"
  | "sdlp"
  | "sf"
  | "snp"
  | "ruk"
  | "ukip"
  | "uup"
  | "other";

export type Result = {
  name: string;
  region: string;
  winner: string;
} & Partial<Record<Party, number>>;
