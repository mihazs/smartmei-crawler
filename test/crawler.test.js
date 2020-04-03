import {expect} from "chai";
import {crawl} from "../src/crawler";

describe("Crawler", () => {
    it("Should return the price of the transfer in the profissional plan", async (done) =>{
        try{
            const crawled = await crawl({url: "https://www.smartmei.com.br"});
            expect(crawled).to.be("R$ 7,00");
            done();
        } catch(err){
            done(err);
        }

    })
})