import React, { createContext, useState } from "react";
export const SportsContext = createContext();

const SportsContextProvider = (props) => {
  const [sportsData, setSportsData] = useState([
    {
      author: "",
      title:
        "Women's IPL 2022 Final: SW vs TV Match Prediction – Who will win today’s match? - CricTracker",
      description:
        "SW vs TV Match Prediction - Read to find out who will win the today's Women's IPL match between Supernovas vs Velocity & who will win the toss today on CricTracker",
      url: "https://www.crictracker.com/womens-ipl-2022-final-sw-vs-tv-match-prediction-who-will-win-todays-match/",
      urlToImage:
        "https://www.crictracker.com/wp-content/uploads/2022/05/Supernovas-Team.jpg",
      publishedAt: "2022-05-28T05:25:00Z",
      content:
        "Womens IPL 2022 will be played between SW and TV at the MCA Stadium, Pune on May 28 (Saturday). (Photo Source: IPL/BCCI)\r\nThe Supernovas (SW) will be locking horns with Velocity (TV) in the final of … [+3579 chars]",
    },
    {
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
      author: null,
      title:
        "India vs South Africa T20 Tickets: How to buy tickets for IND vs SA T20 Series? Check step by step process to buy tickets online - InsideSport",
      description:
        "India vs South Africa T20 Tickets: How to buy tickets for IND vs SA T20 Series? Check step by step process to buy tickets online: Follow IND vs SA Live",
      url: "https://www.insidesport.in/india-vs-south-africa-t20-tickets-how-to-buy-tickets-for-ind-vs-sa-t20-series-check-step-by-step-process-to-buy-tickets-online/",
      urlToImage:
        "https://www.insidesport.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-27-at-4.43.39-PM.jpeg?w=696",
      publishedAt: "2022-05-28T03:45:22Z",
      content:
        "India vs South Africa T20 Tickets: IND vs SA Live: The tickets for India vs South Africa T20I series are now on sale. The five-match T20I series will kick off at the Firoz Shah Kotla in Delhi on June… [+3393 chars]",
    },
    {
      author: "More by Vicky Singh",
      title:
        "MAR vs BOT Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- FanCode ECS T10 Stockholm - Cricket Addictor",
      description:
        "MAR vs BOT Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- FanCode ECS T10 Stockholm",
      url: "https://cricketaddictor.com/fantasy-cricket/mar-vs-bot-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-stockholm/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/05/ECS-T10-Stockholm-Dream11-Prediction-Fantasy-Cricket-Tips-Dream11-Team.jpeg",
      publishedAt: "2022-05-28T03:40:46Z",
      content:
        "MAR vs BOT Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of FanCode ECS T10 Stockholm match between Marsta and Botkyrka.\r\nMAR vs BOT FanCode ECS T10 … [+4080 chars]",
    },
    {
      author: "Sandeep Dwivedi",
      title:
        "Weekly Sports Newsletter: The babu’s unique entitlement to saunter onto the synthetic track - The Indian Express",
      description:
        "Was this the class-topper community's cold brutal revenge on the jocks for all the bullying they endured during sports hour? No, this isn't a teen movie, this is the real world. The issue is more layered, deep-seated and systemic.",
      url: "https://indianexpress.com/article/sports/sport-others/weekly-sports-newsletter-the-babus-unique-entitlement-to-saunter-onto-the-synthetic-track-7940520/",
      urlToImage: "https://images.indianexpress.com/2022/05/thyagraj-1.jpg",
      publishedAt: "2022-05-28T03:32:47Z",
      content:
        "Once the emotion of outrage subsides, a bit of backpedaling will help understand why an IAS couple and their dog got priority over elite athletes at the modern sports facilities built for the 2010 Ne… [+4914 chars]",
    },
    {
      author: null,
      title:
        "IPL 2022: Meet Rajasthan Royals opener Jos Buttler's stunning wife Louise - Zee News",
      description:
        "In this collection of photos, we will introduce you to Jos Buttler's wife - Louise Buttler.",
      url: "https://zeenews.india.com/photos/sports/ipl-2022-meet-rajasthan-royals-opener-jos-buttlers-stunning-wife-louise-buttler-in-pics-2468066",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/05/28/1047497-untitled-design-9.jpg",
      publishedAt: "2022-05-28T03:28:27Z",
      content:
        "Jos Buttler is in form of his life in IPL 2022. On Friday, he single-handedly guided Rajasthan Royals toward a seven-wicket win over Royal Challengers Bangalore in Qualifier 2 of the season. Jos smas… [+213 chars]",
    },
    {
      author: "Karthik Krishnaswamy",
      title:
        "How 'honesty' and 'clarity' helped Prasidh Krishna redeem himself in Qualifier 2 - ESPNcricinfo",
      description:
        "From failing to defend 16 against Titans to taking 3 for 22 against RCB, Prasidh has seen both the highs and lows this past week",
      url: "https://www.espncricinfo.com/story/ipl-2022-q2-rcb-vs-rr-how-honesty-and-clarity-helped-prasidh-krishna-redeem-himself-in-qualifier-2-1317013",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340000/340056.6.jpg",
      publishedAt: "2022-05-28T03:25:33Z",
      content:
        "FeatureFrom failing to defend 16 against Titans to taking 3 for 22 against RCB, Prasidh has seen both the highs and lows this past week\r\nPrasidh Krishna rapped Faf du Plessis on the pads with his fir… [+7899 chars]",
    },
    {
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
      author: "Samuel Luckhurst, Liam Wood",
      title:
        "Manchester United stance on summer transfer targets and Erik ten Hag playing style - Manchester Evening News",
      description:
        "Our chief Manchester United writer Samuel Luckhurst answered your questions in a wide-ranging live webchat.",
      url: "https://www.manchestereveningnews.co.uk/sport/football/football-news/man-united-ten-hag-signings-24080938",
      urlToImage:
        "https://i2-prod.manchestereveningnews.co.uk/sport/article24081274.ece/ALTERNATES/s1200/0_pjimage-2.jpg",
      publishedAt: "2022-05-28T03:00:00Z",
      content:
        "Erik ten Hag started work at Manchester United on Monday and will press ahead with his much-needed rebuild in the weeks and months that follow.\r\nChange on and off the pitch is coming and there are se… [+5174 chars]",
    },
    {
      author: "HT Sports Desk",
      title:
        "'Virat Kohli has made more mistakes this season than in his entire career' - Hindustan Times",
      description:
        "Kohli ended his IPL 2022 campaign, scoring 341 runs in 16 innings at just 22.73 and a strike rate of 115.99, laced with two half-centuries.",
      url: "https://www.hindustantimes.com/cricket/hes-made-more-mistakes-this-season-than-in-his-entire-career-virender-sehwag-sanjay-manjrekar-blasts-virat-kohli-for-disappointing-show-against-rr-qualifier-2-101653704477608.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/05/28/1600x900/New_Project_-_2022-05-28T075556.918_1653704766013_1653704782175.jpg",
      publishedAt: "2022-05-28T02:44:18Z",
      content:
        "Former Royal Challengers Bangalore (RCB) skipper Virat Kohli's campaign in 2022 Indian Premier League (IPL) ended on a disappointing note on Friday night after he was dismissed for just seven runs in… [+2682 chars]",
    },
    {
      author: "Louis Cameron",
      title:
        "Lynn launches six into garden in county T20 onslaught - cricket.com.au",
      description:
        "Axed Bash Brother lands one in British backyard during brutal county T20 Blast knock as opposing skipper Ashton Turner suffers shoulder injury",
      url: "https://www.cricket.com.au/news/match-report/chris-lynn-northamptonshire-sixes-backyard-ashton-turner-shoulder-injury-durham-labuschagne-hogan/2022-05-28",
      urlToImage:
        "https://www.cricket.com.au/~/-/media/News/2022/05/28lynn1.ashx?w=1600",
      publishedAt: "2022-05-28T01:54:01Z",
      content:
        "Neither bowlers nor Northampton residents were safe as Chris Lynn sent balls flying to all parts in a match-winning hand for his new county team in the United Kingdom. \r\nDurham's Australian captain A… [+4199 chars]",
    },
    {
      author: "HT Sports Desk",
      title:
        "Brendon McCullum names ‘one nation that can change’ the dynamics of Test cricket - Hindustan Times",
      description:
        "McCullum, who will start his journey as England's red-ball coach in the upcoming series against New Zealand said Test cricket is the ultimate format but it has seen a downward trend in recent times.",
      url: "https://www.hindustantimes.com/cricket/brendon-mccullum-names-one-nation-that-can-change-the-dynamics-of-test-cricket-101653658790342.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/05/27/1600x900/CRICKET-ENGLAND-MCCULLUM--4_1653658889158_1653658905026.JPG",
      publishedAt: "2022-05-28T01:45:07Z",
      content:
        "Newly-appointed England's red-ball team coach Brendon McCullum said the three lions can change the \"downward trend\" in Test cricket. McCullum, who will start his journey as England's red-ball coach i… [+2441 chars]",
    },
    {
      author: "HT Sports Desk",
      title:
        "Vaughan digs up the past, takes sly dig at Ahmedabad surface hosting Qualifier 2 - Hindustan Times",
      description:
        "Former England captain Michael Vaughan has jogged down memory lane and taken a sly dig at the Ahmedabad pitch of the Narendra Modi Stadium.",
      url: "https://www.hindustantimes.com/cricket/michael-vaughan-digs-up-the-past-tweets-his-memory-of-ahmedabad-pitch-after-watching-pace-and-bounce-in-qualifier-2-101653688127966.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/05/27/1600x900/vaughan-ahmedabad_1653689555334_1653689561146.jpg",
      publishedAt: "2022-05-28T01:43:32Z",
      content:
        "Former England captain Michael Vaughan jogged down memory lane to take a sly dig at the Ahmedabad pitch of the Narendra Modi Stadium. Vaughan's remark was directed at the Ahmedabad pitch in general. … [+1800 chars]",
    },
    {
      author: "Shashank Kishore",
      title:
        "Hesson: Development of strong Indian core 'real strong point' of RCB's season - ESPNcricinfo",
      description:
        "RCB's team director feels that the 'pleasing aspect' of their season was the fact that 'so many different players stood out'",
      url: "https://www.espncricinfo.com/story/ipl-2022-rr-vs-rcb-mike-hesson-development-of-strong-indian-core-real-strong-point-of-rcbs-season-1317011",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/339900/339954.6.jpg",
      publishedAt: "2022-05-28T00:54:20Z",
      content:
        "FeatureRCB's team director feels that the 'pleasing aspect' of their season was the fact that 'so many different players stood out'",
    },
    {
      author: "David Pasztor",
      title: "Chelsea CEO Guy Laurence to step down - We Ain't Got No History",
      description: "Power shift",
      url: "https://weaintgotnohistory.sbnation.com/2022/5/28/23145175/chelsea-ceo-guy-laurence-to-step-down-report",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/X9hDuj1wyqhILpkjCt7zz-xrar8=/958x650:3433x1946/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23593508/139308885.jpg",
      publishedAt: "2022-05-28T00:30:47Z",
      content:
        "Guy Laurence was once described as the most important person at Chelsea youve never heard of, which, if youre a Chelsea fan and if youre not, why are you reading this? does narrow the field down quit… [+1232 chars]",
    },
    {
      author: null,
      title:
        "Transfer news and rumours LIVE: Man Utd renew efforts to sign Neves - Goal.com",
      description:
        "Get the latest soccer news, rumors, video highlights, scores, schedules, standings, photos, player information and more from Sporting News Canada",
      url: "https://www.sportingnews.com/ca/soccer",
      urlToImage:
        "https://static.sportingnews.com/1.9.0.6/themes/custom/tsn/logo.jpg",
      publishedAt: "2022-05-27T22:55:36Z",
      content: null,
    },
    {
      author: "ESPNcricinfo staff",
      title:
        "Lea Tahuhu loses New Zealand contract; six new players included - ESPNcricinfo",
      description:
        "Frankie Mackay and Leigh Kasperek also left off; Fran Jonas and Molly Penfold among additions",
      url: "https://www.espncricinfo.com/story/lea-tahuhu-loses-new-zealand-contract-as-six-new-players-included-1316840",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335700/335701.6.jpg",
      publishedAt: "2022-05-27T21:32:03Z",
      content: "Bloomfield Cricket and Athletic Club",
    },
    {
      author: null,
      title:
        "Salt and Brook Star In Roses Classic | Lancashire v Yorkshire - Highlights | Vitality Blast 2022 - England & Wales Cricket Board",
      description:
        "Follow the 2022 Vitality Blast at: https://www.ecb.co.uk/t20-blastWatch match highlights of Lancashire v Yorkshire in the Vitality Blast 2022. This is the of...",
      url: "https://www.youtube.com/watch?v=xs7k1yyWvYQ",
      urlToImage: "https://i.ytimg.com/vi/xs7k1yyWvYQ/hqdefault.jpg",
      publishedAt: "2022-05-27T21:19:45Z",
      content: null,
    },
  ]);

  return (
    <SportsContext.Provider value={{ sportsData }}>
      {props.children}
    </SportsContext.Provider>
  );
};

export default SportsContextProvider;
