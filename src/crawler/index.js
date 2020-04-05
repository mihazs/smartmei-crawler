import axios from "axios";
import cheerio from "cheerio";

/**
 * Crawl the price of the transfer in the profissional plan of an smartmei website.
 * @param {Object} args - Arguments.
 * @param {string} args.url - Url to crawl data
 */
export async function crawl({ url }) {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);
  return parseFloat(
    $("#tarifas-2 .tarifas-2-2-2")
      .text()
      .replace(/[\\n\s\m(R\$)]+/g, "")
      .replace(",", ".")
  );
}
