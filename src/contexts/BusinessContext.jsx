import React, { createContext, useState } from "react";

export const BusinessContext = createContext();
const BusinessContextProvider = (props) => {
  const [businessData, setBusinessData] = useState([
    {
      author: null,
      title:
        "Dogecoin co-founder calls LUNA 2.0 believers ‘truly dumb’ - CryptoSlate",
      description:
        'Billy Markus was less than kind about LUNA 2.0 and those who buy into the relaunch, calling them "truly dumb"',
      url: "https://cryptoslate.com/dogecoin-co-founder-calls-luna-2-0-believers-truly-dumb/",
      urlToImage:
        "https://cryptoslate.com/wp-content/uploads/2022/05/billy-markus-luna-1.jpg",
      publishedAt: "2022-05-28T00:11:08Z",
      content:
        "Want to work with us? CryptoSlate is hiring for a handful of positions!Dogecoin co-founder Billy Markus slammed Terra’s attempt to relaunch LUNA, calling those who buy into it “truly dumb.”\r\nThe Terr… [+3434 chars]",
    },
    {
      author: "https://www.engadget.com/about/editors/bryan-menegus",
      title:
        "Apple Store workers in Georgia call off union vote over intimidation claims - Engadget",
      description:
        "Less than a week before its scheduled date, the Communications Workers of America have decided to withdraw a formal vote on unionization for Apple Store employees at Atlanta's Cumberland Mall location..",
      url: "https://www.engadget.com/apple-union-cumberland-georgia-cwa-intimidtion-235511083.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-05/68382260-cd80-11ec-afd7-b1448b37abd6",
      publishedAt: "2022-05-27T23:57:22Z",
      content:
        "Less than a week before its scheduled date, the Communications Workers of America (CWA) have decided to withdraw a formal vote on unionization for Apple Store employees at Atlanta's Cumberland Mall l… [+2450 chars]",
    },
    {
      author: null,
      title: "The bull and bear case for cryptocurrencies - CNBC Television",
      description:
        "Meltem Demirors of CoinShares, Anthony Scaramucci of SkyBridge Capital and Duke Law Professor Lee Reiners join 'CNBC Special: Crypto Night in America' to dis...",
      url: "https://www.youtube.com/watch?v=Sz-qJ6CMUVA",
      urlToImage: "https://i.ytimg.com/vi/Sz-qJ6CMUVA/hqdefault.jpg",
      publishedAt: "2022-05-27T23:11:32Z",
      content: null,
    },
    {
      author: null,
      title:
        "FSIS Issues Public Health Alert for Ready-to-Eat Salad Products Containing Peanut Butter that May be Contaminated with Salmonella | Food Safety and Inspection Service - fsis.usda.gov",
      description: null,
      url: "http://www.fsis.usda.gov/recalls-alerts/fsis-issues-public-health-alert-ready-eat-salad-products-containing-peanut-butter",
      urlToImage:
        "https://www.fsis.usda.gov/sites/default/files/2021-03/MicrosoftTeams-image.png",
      publishedAt: "2022-05-27T22:59:35Z",
      content:
        "WASHINGTON, May 27, 2022 The U.S. Department of Agricultures Food Safety and Inspection Service (FSIS) is issuing a public health alert for ready-to-eat (RTE) salad products containing Food and Drug … [+2636 chars]",
    },
    {
      author: null,
      title:
        "Robinhood agrees to settle customer lawsuit over 2020 outages - Reuters.com",
      description:
        'Robinhood Markets Inc <a href="https://www.reuters.com/companies/HOOD.O" target="_blank">(HOOD.O)</a> has agreed in principle to settle a proposed class action filed by customers in the United States who claimed the investment app\'s outages in March 2020 shut…',
      url: "https://www.reuters.com/business/finance/robinhood-agrees-settle-customer-lawsuit-over-2020-outages-2022-05-27/",
      urlToImage:
        "https://www.reuters.com/resizer/WZXbyMkiVDq-RA9EVdDgj3FcPHk=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6ZXEHRFEH5MBVDDQUWR24YUQ7Q.jpg",
      publishedAt: "2022-05-27T21:40:00Z",
      content:
        "May 27 (Reuters) - Robinhood Markets Inc (HOOD.O) has agreed in principle to settle a proposed class action filed by customers in the United States who claimed the investment app's outages in March 2… [+1780 chars]",
    },
    {
      author: null,
      title:
        "World stock markets rally, treasury yields fall on inflation data - Reuters",
      description:
        "Global markets enjoyed a broad-based rally on Friday, while the yield on benchmark U.S. Treasuries fell after data showed that U.S. consumer spending rose in April and the uptick in inflation slowed, two signs the world's largest economy could be on track to …",
      url: "https://www.reuters.com/markets/europe/global-markets-wrapup-1-2022-05-27/",
      urlToImage:
        "https://www.reuters.com/resizer/ZZ-Iek0dPvE4_cdD_LLCPkTi__k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/G3OBP37YY5JAPJEMAC7BFCSJUE.jpg",
      publishedAt: "2022-05-27T21:22:00Z",
      content:
        "NEW YORK, May 27 (Reuters) - Global markets enjoyed a broad-based rally on Friday, while the yield on benchmark U.S. Treasuries fell after data showed that U.S. consumer spending rose in April and th… [+4366 chars]",
    },
    {
      author: "Robert Anderson",
      title:
        "Memorial Day Game Sales: Ratchet & Clank, Uncharted and More - IGN - IGN",
      description:
        "These are best gaming deals to check out during the Memorial Day sales.",
      url: "https://www.ign.com/articles/memorial-day-games-sale-2022",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/05/26/best-gaming-deals-memorial-day-ign-2022-1653561925692.png?width=1280",
      publishedAt: "2022-05-27T21:10:47Z",
      content:
        "There aren't normally many gaming deals during the Memorial Day sales, but this year PlayStation has actually been kind enough to bless us with a few thanks to the Days of Play sale running all the w… [+1811 chars]",
    },
    {
      author: "Jean Eaglesham, Mark Maurer",
      title:
        "EY Split-Up Plan Exposes Rift Among Accounting Firms - The Wall Street Journal",
      description:
        "Rivals of Ernst & Young say they are not going along with its idea to divide auditing and consulting businesses",
      url: "https://www.wsj.com/articles/ey-split-up-plan-exposes-rift-among-accounting-firms-11653669979",
      urlToImage: "https://images.wsj.net/im-553087/social",
      publishedAt: "2022-05-27T21:08:00Z",
      content:
        "Ernst &amp; Youngs plan for a possible world-wide split of its audit and consulting businesses, code-named Project Everest according to people familiar with the matter, was dismissed by major rivals … [+378 chars]",
    },
    {
      author: "Jayme Deerwester",
      title:
        "National Burger Day deals 2022: McDonalds, Arby's, Wendy's, more - USA TODAY",
      description:
        "This year, National Hamburger Day falls on Saturday during Memorial Day weekend. From Burger King to Arby's, here's where to score deals and freebies.",
      url: "https://www.usatoday.com/story/money/food/2022/05/27/national-hamburger-day-where-to-find-deals-freebies/9963294002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/05/23/USAT/d9360c5b-db33-45bc-8aa0-184db12730ee-ARB22_WAGYU_Kitchen2_002.jpg?crop=4918,2766,x370,y930&width=3200&height=1800&format=pjpg&auto=webp",
      publishedAt: "2022-05-27T21:00:08Z",
      content:
        "This weekend is going to sizzle and we're not talking about the weather.\r\nNot only is it Memorial Day weekend, one of the biggest cookouts of the year, but Saturday, May 28, is also National Burger D… [+2786 chars]",
    },
    {
      author: "Adam Sabes",
      title:
        "White House announces import of baby formula from Australia - Fox Business",
      description:
        "The U.S. Food and Drug Administration announced that 1.25 million cans of baby formula will be delivered to the United States within the coming weeks and months.",
      url: "https://www.foxbusiness.com/economy/white-house-import-baby-formula",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/Baby-Formula-Shortage.jpg?ve=1&tl=1",
      publishedAt: "2022-05-27T20:35:33Z",
      content:
        "The White House announced that 1.25 million cans of baby formula will be headed to the United States from Australia beginning in the coming weeks and months.\r\nIn an announcement made on Friday aftern… [+2684 chars]",
    },
    {
      author: "Damanick Dantes",
      title:
        "Market Wrap: Bitcoin Stuck Below $30K as Buyers Remain on Sidelines - CoinDesk",
      description:
        "BTC declined by as much as 3% over the past 24 hours and is on track to end the month in the red.",
      url: "https://www.coindesk.com/markets/2022/05/27/market-wrap-bitcoin-stuck-below-30k-as-buyers-remain-on-sidelines/",
      urlToImage:
        "https://www.coindesk.com/resizer/xkZDV4R8vFLShBGHg7MlDolghr8=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/QIQVJKK52FFXZHHLK2HSKGZLCY.png",
      publishedAt: "2022-05-27T20:15:00Z",
      content:
        "Bitcoin (BTC) and other cryptos traded lower on Friday despite another move upward in stocks.\r\nCrypto traders are still in risk-off mode after experiencing almost nine consecutive weeks of negative r… [+4197 chars]",
    },
    {
      author: "Gerrit De Vynck",
      title:
        "SEC confirms it is investigating Elon Musk over Twitter share purchases - The Washington Post",
      description:
        "Elon Musk missed a deadline for reporting his stake in Twitter. The SEC confirmed Friday it began investigating his purchases in April.",
      url: "https://www.washingtonpost.com/technology/2022/05/27/elon-sec-twitter/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X4HJN7G5HQI6ZPBVVEOQVFESHM.jpg&w=1440",
      publishedAt: "2022-05-27T20:09:00Z",
      content:
        "Placeholder while article actions load\r\nThe Securities and Exchange Commission confirmed on Friday it had asked Tesla chief executive Elon Musk about irregularities in how and when he disclosed his i… [+1431 chars]",
    },
    {
      author: "Jim Cramer",
      title:
        "Jim Cramer: My take on Apple, Amazon, Facebook and Google after Nvidia's rise - CNBC",
      description:
        "What does Nvidia's rally this week mean for the tech's Big Four? Let's discuss case by case.",
      url: "https://www.cnbc.com/2022/05/27/cramer-my-take-on-apple-amazon-facebook-and-google-after-nvidias-rise.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105940460-1559231679482img_5189.jpg?v=1635519163&w=1920&h=1080",
      publishedAt: "2022-05-27T20:00:13Z",
      content:
        "It's been a great week for the portfolio. Ahead of the long holiday weekend, I know the buzz centers on Nvidia (NVDA) and how this great $465 billion company signaled a sea change when it reported a … [+4947 chars]",
    },
    {
      author: "Daniella Genovese",
      title:
        "Delta Air Lines to cut 100 daily flights over the summer - Fox Business",
      description:
        "Delta, in the midst of the bustling summer travel season, will reduce its schedule by 100 daily departures. What to know.",
      url: "https://www.foxbusiness.com/lifestyle/delta-cut-100-daily-flights-summer-2022",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/08/0/0/AP21237505915138.jpg?ve=1&tl=1",
      publishedAt: "2022-05-27T19:38:46Z",
      content:
        'Delta Air Lines will "strategically decrease" its flight schedule this summer as it tries to minimize disruptions.\r\nFrom July 1 to Aug. 7, the peak of the bustling summer travel season, Delta will re… [+2804 chars]',
    },
    {
      author: "Jonathan van Halem",
      title:
        "These Airlines Still Let You Change Your Flight for Free - Lifehacker",
      description:
        "Change of plans? These airlines will (mostly) let you off the hook.",
      url: "https://lifehacker.com/these-airlines-still-let-you-change-your-flight-for-fre-1848987886",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/10922d23e9ce325a335b30b7f4522524.jpg",
      publishedAt: "2022-05-27T19:30:00Z",
      content:
        "Wherever youre planning to go this summer, whether its one of the most overrated tourist destinations or one of the music festivals actually worth traveling to, youd be lying to yourself if you said … [+2482 chars]",
    },
    {
      author: "John Carney",
      title:
        "ESG Energy Crisis: U.S. Rig Count Drops Despite Soaring Oil Prices - Breitbart",
      description:
        "No relief in sight for soaring oil and gasoline prices as supplies dwindle. | Economy",
      url: "https://www.breitbart.com/economy/2022/05/27/esg-energy-crisis-u-s-rig-count-drops-despite-soaring-oil-prices/",
      urlToImage:
        "https://media.breitbart.com/media/2019/11/GettyImages-1177266347-640x335.png",
      publishedAt: "2022-05-27T19:17:18Z",
      content:
        "The number of oil rigs operating in the U.S. declined by two to 574, according to oil services giant Baker Hughes.\r\nOil prices have risen to the highest level since the end of March, due in part beca… [+3166 chars]",
    },
    {
      author: "Michael Scott",
      title:
        "Oil Prices Are Set To Surge Even Higher This Summer - OilPrice.com",
      description:
        "The combination of limited new supply options, increasing risks to traditional supply, and growing demand around the world, is set to send oil prices even higher this summer",
      url: "https://oilprice.com/Energy/Energy-General/Oil-Prices-Are-Set-To-Surge-Even-Higher-This-Summer.html",
      urlToImage:
        "https://d32r1sh890xpii.cloudfront.net/article/718x300/2022-05-27_xq1oek9wp6.jpg",
      publishedAt: "2022-05-27T19:00:00Z",
      content:
        "Russias oil production has been…\r\nBuyers in both Europe and…\r\nThe federal government is seeking…\r\nBy Michael Scott - May 27, 2022, 2:00 PM CDTThe combination of limited new supply options, increasing… [+5485 chars]",
    },
    {
      author: "Lorie Konish",
      title:
        "A market bottom is an elusive target. These are the moves Merrill advises clients to make now - CNBC",
      description:
        "If inflation peaks and earnings are strong heading toward 2023, it could be enough to boost investor confidence.",
      url: "https://www.cnbc.com/2022/05/27/moves-bank-of-america-advises-clients-make-amid-higher-volatility.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107068361-1653674191262-gettyimages-953738766-003_2339.jpeg?v=1653674217&w=1920&h=1080",
      publishedAt: "2022-05-27T18:11:32Z",
      content:
        "The volatility that's gripped the markets for weeks has prompted some investors to ask, \"Is this the bottom?\"\r\nBut waiting for that market low may prove elusive.\r\n\"There's no 'the' bottom,\" said Chri… [+3389 chars]",
    },
    {
      author: "Ramishah Maruf",
      title:
        "Elon Musk says it's 'dumb' to call billionaires the bad guys - CNN",
      description:
        "Elon Musk, the world's richest man, said on Twitter Thursday that billionaires aren't the bad guys.",
      url: "https://www.cnn.com/2022/05/27/business/elon-musk-billionaires-tweet/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220527115816-04-elon-musk-0309-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-05-27T17:38:00Z",
      content:
        "Elon Musk, the worlds richest man, said on Twitter Thursday that billionaires arent the bad guys.\r\nMusk tweeted that it is morally wrong &amp; dumb to use the word billionaire as a pejorative if that… [+3199 chars]",
    },
  ]);
  return (
    <BusinessContext.Provider value={{ businessData }}>
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessContextProvider;
