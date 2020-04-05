import { expect } from "chai";
import { crawl } from "../src/crawler";

describe("Crawler", () => {
  it("Should return the price of the transfer in the profissional plan", async () => {
    const crawled = await crawl({ url: "https://www.smartmei.com.br" });
    expect(crawled).to.be.equal(7);
  });
});
