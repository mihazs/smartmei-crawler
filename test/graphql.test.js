import chai, { expect } from "chai";
import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import server from "../src/graphql";
import chaiAlmost from "chai-almost";
import { convert } from "../src/currency-dealer";

chai.use(chaiAlmost(0.01));

const GET_PRICE = gql`
  query GetPrice($url: URL!) {
    transfer_price(url: $url) {
      date
      description
      rates {
        code
        value
      }
    }
  }
`;

describe("GraphQL", () => {
  it("Should query transfer price currencies", async () => {
    const { query } = createTestClient(server);
    const res = await query({
      query: GET_PRICE,
      variables: { url: "https://www.smartmei.com.br" },
    });
    const converted = await convert({
      from: "BRL",
      to: ["EUR", "USD"],
      value: 7,
    });
    expect(res.data).to.not.be.null;
    expect(res.data).to.not.be.undefined;
    expect(res.data.transfer_price).to.not.be.null;
    expect(res.data.transfer_price.description).to.be.equals("Transferência");
    res.data.transfer_price.rates.forEach(({ code, value }) => {
      if (code !== "BRL") {
        expect(value).to.be.almost.equal(converted.rates[code]);
      } else {
        expect(value).to.be.equals(7);
      }
    });
  });
});
