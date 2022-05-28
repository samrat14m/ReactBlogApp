import React, { createContext, useState } from "react";
export const HomeContext = createContext();

const HomeContextProvider = (props) => {
  const [homeData, setHomeData] = useState([
    {
      id: 1,
      author: "NDTV Sports Desk",
      title:
        "IPL 2022, RR vs RCB: Mohammed Siraj Registers Unwanted Record After Yet Another Disastrous Outing - NDTV Sports",
      description:
        "IPL 2022: Mohammed Siraj was smashed for three sixes in the two overs he bowled against Rajasthan Royals in Qualifier 2, and in the process, registered a record he would quickly want to forget.",
      url: "https://sports.ndtv.com/ipl-2022/rr-vs-rcb-mohammed-siraj-registers-unwanted-ipl-record-after-yet-another-disastrous-outing-3016800",
      urlToImage:
        "https://c.ndtvimg.com/2022-05/f2tnq3l_mohammed-siraj-rcb-bcciipl_625x300_14_May_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-05-28T04:32:24Z",
      content:
        "Mohammed Siraj was retained by Royal Challengers Bangalore for a whopping Rs 7 crore ahead of the mega IPL auction. The team would have expected a lot from the Indian pacer in IPL 2022, but instead S… [+1496 chars]",
    },
    {
      id: 2,
      author: "Agence France-Presse",
      title:
        '"Breaks My Heart" To See Boris Becker In Prison, Says Novak Djokovic - NDTV Sports',
      description:
        'Novak Djokovic said Friday "it breaks my heart" to see former coach Boris Becker in prison over charges relating to a 2017 bankruptcy',
      url: "https://sports.ndtv.com/tennis/breaks-my-heart-to-see-boris-becker-in-prison-says-novak-djokovic-3016695",
      urlToImage:
        "https://c.ndtvimg.com/2022-05/2o4q5ptg_djokovic-boris-becker-afp_625x300_28_May_22.jpg",
      publishedAt: "2022-05-28T03:46:09Z",
      content:
        'Novak Djokovic said Friday "it breaks my heart" to see former coach Boris Becker in prison over charges relating to a 2017 bankruptcy and hopes the German legend stays "healthy and strong". Six-time … [+1807 chars]',
    },
    {
      id: 3,
      author: "HT Sports Desk",
      title:
        "RCB win hearts with touching Shane Warne tweet after RR reach IPL 2022 final - Hindustan Times",
      description:
        "Following the heart-breaking loss for RCB, the franchise posted a touching tweet on Shane Warne which won many hearts on social media",
      url: "https://www.hindustantimes.com/cricket/rcb-win-hearts-with-touching-shane-warne-tweet-after-rajasthan-royals-reach-ipl-2022-final-get-reply-from-rr-101653706522312.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/05/28/1600x900/image_-_2022-05-28T082753.264_1653706729545_1653706736107.jpg",
      publishedAt: "2022-05-28T03:16:39Z",
      content:
        "Jos Buttler's sensational and record-breaking century on Friday night at the Narendra Modi Stadium in Ahmedabad helped Rajasthan Royals beat Royal Challengers Bangalore by seven wickets in the Qualif… [+1751 chars]",
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
      author: "James Holland",
      title:
        "Rodrigo de Paul back on Leeds United radar as key figure Victor Orta plans to make 'statement' - TEAMtalk",
      description:
        "Leeds United are reportedly back in the mix for Rodrigo de Paul after failing to land the central midfielder in summer 2020.",
      url: "https://www.teamtalk.com/leeds-united/rodrigo-de-paul-transfer-news-whites-radar-victor-orta-statement",
      urlToImage:
        "https://images.teamtalk.com/content/uploads/2022/05/27205140/argentine-playmaker-rodrigo-de-paul-celebrates-after-scoring-atletico-madrid-goal-march-2022.jpg",
      publishedAt: "2022-05-27T20:28:41Z",
      content:
        "Leeds United are reportedly back in the mix for Rodrigo de Paul after failing to land the central midfielder in summer 2020.\r\nDe Paul had just finished an exceptional season with Udinese in Italy, wh… [+2245 chars]",
    },
    {
      id: 8,
      author: "Jenny Kirkham",
      title:
        "Liverpool fans stranded at the Rocket as Paris coach 'drives past' huge crowd - Liverpool Echo",
      description:
        "Hundreds of supporters were due to be picked up on Friday evening but they now have no lift to the match",
      url: "https://www.liverpoolecho.co.uk/news/liverpool-news/liverpool-fans-stranded-rocket-paris-24086563",
      urlToImage:
        "https://i2-prod.liverpoolecho.co.uk/incoming/article24086560.ece/ALTERNATES/s1200/0_lfc-fans-strandedJPG.jpg",
      publishedAt: "2022-05-27T22:59:05Z",
      content:
        "Huge groups of Liverpool fans were stranded at the Rocket after their coaches to Paris reportedly drove past them.\r\nSupporters travelling to the Champions League final on Friday were left with no rou… [+2642 chars]",
    },
    {
      id: 9,
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
      id: 10,
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
  ]);
  return (
    <HomeContext.Provider value={homeData}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
