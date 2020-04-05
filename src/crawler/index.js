import axios from "axios";
import cheerio from "cheerio";

/**
 * Crawl the price and the description of the transfer in the profissional plan of an smartmei website.
 * @param {Object} args - Arguments.
 * @param {string} args.url - Url to crawl data
 */
export async function crawl({ url }) {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);
  //Query the DOM of the transfer price cell
  const priceDom = $("#tarifas-2 .tarifas-2-2-2");
  //Query the description based on the parent of the price
  const description = priceDom
    .parent()
    .find(".cell-small-title")
    .text()
    .replace(/[\n\s\m]+/g, ""); //remove the spaces and linebreaks
  //Query the price, remove the spaces, linebreaks and the "R$", and replace the comma to a dot.
  const price = parseFloat(
    priceDom
      .text()
      .replace(/[\\n\s\m(R\$)]+/g, "")
      .replace(",", ".")
  );
  return {
    description,
    price,
  };
}
