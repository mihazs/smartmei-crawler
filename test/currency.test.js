import chai, { expect } from "chai";
import { getLatest, convert } from "../src/currency-dealer";
import chaiAlmost from "chai-almost";

chai.use(chaiAlmost(0, 1));

describe("Currency", () => {
  it("Should fetch and convert BRL to USD and EUR", async () => {
    const dataEur = await getLatest({ base: "EUR", currencies: ["BRL"] });
    const dataUsd = await getLatest({ base: "USD", currencies: ["BRL"] });
    const { rates: converted } = await convert({
      from: "BRL",
      to: ["USD", "EUR"],
      value: 4,
    });
    expect(converted["EUR"]).to.be.almost.equal(4 * dataEur.rates["BRL"]);
    expect(converted["USD"]).to.be.almost.equal(4 * dataUsd.rates["BRL"]);
  });
  it("Should fetch latest USD and EUR currency with BRL based", async () => {
    const data = await getLatest({ base: "BRL", currencies: ["USD", "EUR"] });
    expect(data).to.include({ base: "BRL" });
    expect(data).to.have.property("rates");
    expect(data.rates).to.have.keys(["USD", "EUR"]);
  });
});
