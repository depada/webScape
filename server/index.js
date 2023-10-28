const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/open-links", async (req, res) => {
  try {
    const linksArr = req.body.links;
    if (!linksArr || !Array.isArray(linksArr) || linksArr.length === 0) {
      res.status(400).json({ error: "Invalid or empty links array" });
      return;
    }

    const browser = await puppeteer.launch({ headless: false });
    const results = [];
    const extractedData = [];

    for (const link of linksArr) {
      const page = await browser.newPage();

      try {
        await page.goto(`https://www.google.com/search?q=${link}`, {
          waitUntil: "load",
        });

        let currentURL = page.url(); // Get the current URL
        let loadMoreClicked = false; // Flag to track whether the "Load More" button has been clicked
        let allLinksProcessed = false;

        while (true) {
          if (!loadMoreClicked) {
            const loadMoreButton = await page.$(
              "#Odp5De > div > div > div.ixix9e > div.VT5Tde > div.kuydt > div.iNTie > g-more-link > a"
            );

            if (loadMoreButton) {
              await loadMoreButton.click();
              loadMoreClicked = true; // Set the flag to true
              await page.waitForTimeout(2000); // Add a delay to wait for more results to load (adjust the time as needed)
            }
          }

          const phoneData = [];
          const titleData = [];
          console.log("URL changed");

          // Select all anchor tags with jsaction="click:h5M12e;"
          const links = await page.$$(`a[jsaction="click:h5M12e;"]`);
          const maxLinksToProcess =
            // 2;
            links.length;
          let linksProcessed = 0;
          const nextBtn = await page.$("#pnnext");
          const linksData = [];

          for (const aTag of links) {
            if (linksProcessed >= maxLinksToProcess) {
              allLinksProcessed = true; // Set the flag to true when all links are processed
              break; // Break the loop if the maximum number of links are processed
            }
            const linkText = await page.evaluate((el) => el.textContent, aTag);
            linksData.push(linkText);

            // Click on each link
            await aTag.click();
            await page.waitForTimeout(3000); // Wait for 3 seconds before opening another anchor tag

            // Get data from divs with data-attrid="kc:/collection/knowledge_panels/has_phone:phone"
            const phoneDivs = await page.$$(
              'span[aria-label*="Call phone number"]'
            );
            const titles = await page.$$(`h2[data-attrid="title"]`);

            for (const title of titles) {
              const textTitle = await page.evaluate(
                (el) => el.textContent,
                title
              );
              for (const div of phoneDivs) {
                const phoneText = await page.evaluate(
                  (el) => el.textContent,
                  div
                );
                phoneData.push(phoneText);
                titleData.push(textTitle);
                extractedData.push({ textTitle, phoneText });
                console.log("extractedData==>", extractedData);
              }
            }

            await page.waitForTimeout(3000); // Wait for 3 seconds before opening another anchor tag
            linksProcessed++; // Increment the counter for processed links
            console.log(
              "linksProcessed==>",
              linksProcessed,
              "maxLinksToProcess==>",
              maxLinksToProcess
            );
          }
          // if (allLinksProcessed) {
          //   console.log("nextBtn==>", nextBtn);
          //   const uniqueExtractedData = [...new Set(extractedData)];
          //   return res.json({ uniqueExtractedData });
          // }
          if (allLinksProcessed && !nextBtn) {
            break; // No more pages to navigate or all links processed
          } else {
            await nextBtn.click(); // Navigate to the next page
            await page.waitForTimeout(3000); // Wait for the new page to load
          }
        }
      } catch (error) {
        console.error(`Error opening link ${link}: ${error}`);
        results.push({ link, error: "Unable to open link" });
      } finally {
        // await page.close();
      }
    }
    const uniqueExtractedData = [...new Set(extractedData)];
    res.json({ uniqueExtractedData });
    // await browser.close();
    // res.json({ results });
  } catch (error) {
    console.error("Error Opening Links:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
