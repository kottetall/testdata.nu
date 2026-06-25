import { describe, expect, test } from "vitest";
import { internationalizeSwedishText } from "./internationalizeSwedishText.js";

describe("formatSsn", () => {
  test("Gives valid formats", () => {
    expect(internationalizeSwedishText("0")).toBe("0");
    expect(internationalizeSwedishText("a")).toBe("a");
    expect(internationalizeSwedishText("å")).toBe("a");
    expect(internationalizeSwedishText("ä")).toBe("a");
    expect(internationalizeSwedishText("ö")).toBe("o");
    expect(internationalizeSwedishText("Å")).toBe("A");
    expect(internationalizeSwedishText("Ä")).toBe("A");
    expect(internationalizeSwedishText("Ö")).toBe("O");
    expect(internationalizeSwedishText("åäöÅÄÖ")).toBe("aaoAAO");
  });
});
