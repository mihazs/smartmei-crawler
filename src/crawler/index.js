import Crawler from "crawler";

export async function crawl({ url }) {
  var response = "";
  const crawler = new Crawler({
    maxConnections: 5,
  });
  crawler.direct({
    uri: url,
    skipEventRequest: false,
    callback(error, res) {
      if (error) {
        throw new Error(error);
      } else {
        var $ = res.$;
        response = 
      }
    },
  });
}
