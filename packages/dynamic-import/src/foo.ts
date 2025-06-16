import { join } from "node:path";

export const concat = (a: string, b: string): string => {
  return join(a, b);
};
