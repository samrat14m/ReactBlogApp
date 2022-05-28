import React, { createContext, useState } from "react";
export const TechContext = createContext();

const TechContextProvider = (props) => {
  const [techData, setTechData] = useState([
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Natasha Mascarenhas, Amanda Silberling",
      title: "Tech layoffs top 15K in a brutal May",
      description:
        "It’s been a rough month in the tech sector. We’ve rounded up week after week of layoffs, and according to aggregator layoffs.fyi, over 15,000 tech workers have lost their jobs this month. Hopefully the sun will come out in June. A number of tech companies tha…",
      url: "https://techcrunch.com/2022/05/27/tech-layoffs-top-15k-employees-in-a-brutal-may/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/04/GettyImages-904272540.jpg?w=600",
      publishedAt: "2022-05-27T21:38:13Z",
      content:
        "Its been a rough month in the tech sector. Weve rounded up week after week of layoffs, and according to aggregator layoffs.fyi, over 15,000 tech workers have lost their jobs this month. Hopefully the… [+10536 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Devin Coldewey",
      title:
        "Lidar exposes the remnants of an overgrown ancient civilization in the Amazon",
      description:
        "It’s Friday and the world is falling apart, so let’s just take a short mental health break with some interesting news out of the field of archaeology, where tech is enabling some fascinating new discoveries. A new lidar-powered analysis of land in the Amazon …",
      url: "https://techcrunch.com/2022/05/27/lidar-exposes-the-remnants-of-an-overgrown-ancient-civilization-in-the-amazon/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/lidar-header.jpg?w=764",
      publishedAt: "2022-05-27T19:14:36Z",
      content:
        "It’s Friday and the world is falling apart, so let’s just take a short mental health break with some interesting news out of the field of archaeology, where tech is enabling some fascinating new disc… [+3265 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Jacquelyn Melinek",
      title: "As crypto becomes more mainstream, can it stay decentralized?",
      description:
        "Decentralization can mean different things to different people, but most in the web3 community agree that it is one of the key factors to what makes crypto, well, crypto.",
      url: "https://techcrunch.com/2022/05/27/as-crypto-becomes-more-mainstream-can-it-stay-decentralized/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1327741245.jpg?w=600",
      publishedAt: "2022-05-27T19:00:41Z",
      content:
        "As global markets continue to face downward trends, crypto markets are anticipating greater adoption as people see the digital asset sector as a hedge against inflation (even though some prices are c… [+4048 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Tage Kene-Okafor",
      title:
        "Elon Musk says Starlink has been approved in Nigeria and Mozambique",
      description:
        "Starlink brings needed competition to Nigeria's telecom operators, who have had to compete against each other without necessarily improving their internet quality.",
      url: "https://techcrunch.com/2022/05/27/elon-musk-says-starlink-has-been-approved-in-nigeria-and-mozambique/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/starlink-square-dish.jpg?w=537",
      publishedAt: "2022-05-27T18:50:37Z",
      content:
        "Elon Musk announced in a tweet on Friday that Starlink, the satellite internet service launched by SpaceX, his space exploration company, has been approved in Nigeria and Mozambique.\r\nThis news is co… [+1542 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Eric Landau",
      title: "4 questions to ask before building a computer vision model",
      description:
        "Before founders begin building AI systems, they should think carefully about their risk appetite, data management practices and strategies for future-proofing their AI stack.",
      url: "https://techcrunch.com/2022/05/27/4-questions-to-ask-before-building-a-computer-vision-model/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1164116703.jpg?w=602",
      publishedAt: "2022-05-27T18:30:49Z",
      content:
        "In 2015, the launch of YOLO a high-performing computer vision model that could produce predictions for real-time object detection started an avalanche of progress that sped up computer vision’s jump … [+2535 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Harri Weber",
      title: "Steal this hot new summer look (it's bacteria)",
      description:
        "Bacterial secretions might dye your future wardrobe, and that’d be an improvement. That’s because textiles usually get their hues from toxic chemicals, and the resulting wastewater—laden with dyes, acids and formaldehyde—destroys rivers, such as those surroun…",
      url: "https://techcrunch.com/2022/05/27/colorifix-dye-textile-bacteria-22-million-h-m/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/dye-2.jpg?w=600",
      publishedAt: "2022-05-27T17:54:46Z",
      content:
        "Bacterial secretions might dye your future wardrobe, and thatd be an improvement.\r\nThat’s because textiles usually get their hues from toxic chemicals, and the resulting wastewaterladen with dyes, ac… [+5123 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Tim De Chant",
      title: "Diesel is a horrible thing for an economy to depend on",
      description: "Want to tame inflation? Start by ditching fossil fuels.",
      url: "https://techcrunch.com/2022/05/27/diesel-is-a-horrible-thing-for-an-economy-to-depend-on/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1241749055.jpg?w=600",
      publishedAt: "2022-05-27T17:45:38Z",
      content:
        "Want to bring inflation to heel? Theres no single, simple fix, of course, or we would have done it already. But a good place to start would be weaning the economy off gasoline and diesel.\r\nPrices for… [+1338 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Walter Thompson",
      title:
        "TechCrunch+ roundup: Cannabis investor survey, product ops, recurring revenue financing",
      description:
        "The cannabis industry is doing well in the United States: over 75% of the population lives in a state where access is permitted, and the legal market is expected to generate $33 billion this year.",
      url: "https://techcrunch.com/2022/05/27/techcrunch-roundup-cannabis-investor-survey-product-ops-recurring-revenue-financing/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1155003455.jpg?w=712",
      publishedAt: "2022-05-27T17:31:44Z",
      content:
        "The cannabis industry is doing very well in the United States: more than 75% of the population lives in a state where access is permitted, and the legal market is expected to generate $33 billion thi… [+4576 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Maggie Stamets",
      title:
        "Found celebrates one year by bringing on four founders in a roundtable episode",
      description:
        "Found is officially one year old and we’ve got a brand new look! To celebrate we decided to have back four founders who made us think, laugh, and have generally stuck with us since we talked with them. If we’ve learned anything from one year of talking with f…",
      url: "https://techcrunch.com/2022/05/27/found-celebrates-one-year-by-bringing-on-four-founders-in-a-roundtable-episode/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=711",
      publishedAt: "2022-05-27T17:30:31Z",
      content:
        "Found is officially one year old and we’ve got a brand new look!\r\nTo celebrate we decided to have back four founders who made us think, laugh, and have generally stuck with us since we talked with th… [+1074 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Manish Singh",
      title:
        "Tesla won't set up manufacturing plant in India until allowed to first sell and service cars, Elon Musk says",
      description:
        "Musk also said that SpaceX is waiting for an approval from the Indian government for launching Starlink in the country.",
      url: "https://techcrunch.com/2022/05/27/tesla-wont-set-up-manufacturing-plant-in-india-until-allowed-to-first-sell-and-service-cars-elon-musk-says/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1130604490.jpg?w=600",
      publishedAt: "2022-05-27T17:07:47Z",
      content:
        "Tesla won’t set up a manufacturing plant in India until it is first allowed to sell and service cars in the country, the carmaker’s chief executive Elon Musk suggested Friday, more than a year he and… [+1824 chars]",
    },
  ]);
  return (
    <TechContext.Provider value={{ techData }}>
      {props.children}
    </TechContext.Provider>
  );
};

export default TechContextProvider;
