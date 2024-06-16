const { chromium } = require('playwright');
const cheerio = require('cheerio');

async function soundcloudsearch(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await chromium.launch({ headless: true });
            const context = await browser.newContext({
                viewport: { width: 375, height: 812 },
                userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
            });
            const page = await context.newPage();

            await page.goto('https://m.soundcloud.com/search');
            await page.click('button:has-text("I Accept")');
            await page.fill('input[type="search"]', query);
            await page.keyboard.press('Enter');
            await page.waitForTimeout(5000);

            const html = await page.content();
            const $ = cheerio.load(html);

            const results = [];

            $('ul.List_VerticalList__2uQYU li').each((index, element) => {
                const title = $(element).find('div.Information_CellTitle__2KitR').text().trim();
                const artist = $(element).find('div.Information_CellSubtitle__1mXGx').text().trim();
                const plays = $(element).find('div.Metadata_CellLabeledMetadata__3s6Tb:nth-child(1) div.Metadata_MetadataLabel__3GU8Y').text().trim();
                const duration = $(element).find('div.Metadata_CellLabeledMetadata__3s6Tb:nth-child(2) div.Metadata_MetadataLabel__3GU8Y').text().trim();
                const uploaded = $(element).find('div.Metadata_CellLabeledMetadata__3s6Tb:nth-child(3) div.Metadata_MetadataLabel__3GU8Y').text().trim();
                const image = $(element).find('img[data-testid="actual-image"]').attr('src');
                const url = "https://m.soundcloud.com" + $(element).find('a.Cell_CellLink__3yLVS').attr('href');

                results.push({
                    title,
                    artist,
                    plays,
                    duration,
                    uploaded,
                    image,
                    url
                });
            });
            resolve(results);
            await browser.close();
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = { soundcloudsearch }
