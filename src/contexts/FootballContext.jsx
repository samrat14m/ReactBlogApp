import React, { createContext, useState } from "react";

export const FootballContext = createContext();
const FootballContextProvider = (props) => {
  const [footballData, setFootballData] = useState([
    {
      author: "Callum Vurley",
      title:
        "Erik ten Hag's major Pep Guardiola criticism shows Man Utd are in good hands - Express",
      description:
        "MANCHESTER UNITED are getting ready to greet Erik ten Hag as their new manager after he agreed to join from Ajax.",
      url: "https://www.express.co.uk/sport/football/1616858/Man-Utd-Erik-ten-Hag-Pep-Guardiola-news-SNT",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/67/1200x712/1616858_1.jpg",
      publishedAt: "2022-05-28T04:30:00Z",
      content:
        "Erik ten Hag once took a pop at his old mentor Pep Guardiola while in charge of Ajax but his criticism shows that Manchester United have got the right coach in charge. The two coaches worked together… [+1500 chars]",
    },
    {
      author: "Louie Chandler",
      title:
        "Thomas Tuchel wants Chelsea to hijack Arsenal striker bid as defender slapped with £45m pricetag - Football.London",
      description:
        "All the latest Chelsea transfer news ahead of the summer transfer window.",
      url: "https://www.football.london/chelsea-fc/news/thomas-tuchel-chelsea-transfer-arsenal-24085709",
      urlToImage:
        "https://i2-prod.football.london/incoming/article24085700.ece/ALTERNATES/s1200/0_GettyImages-1398688434.jpg",
      publishedAt: "2022-05-28T04:30:00Z",
      content:
        "Chelsea are likely to be one of the Premier League's busiest clubs this summer with plenty of uncertainty throughout the first-team squad. Todd Boehly's early days are set to be dominated by transfer… [+2400 chars]",
    },
    {
      author: "Sam Dymond",
      title:
        "Paul Scholes gives Ten Hag advice, Man Utd ‘in talks’ with Nkunku, Pau Torres ‘to get’ dream shirt number –... - The Sun",
      description: "",
      url: "https://www.thesun.co.uk/sport/18647806/man-utd-transfer-news-live-pau-torres-paul-scholes-nkunku-de-jong/",
      urlToImage:
        "https://www.thesun.co.uk/wp-content/uploads/2022/05/SunSport-off-platform-templates-1-26.png?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2022-05-28T04:07:47Z",
      content:
        "Good morning Man Utd fans\r\nManchester United officials have consulted new boss Erik ten Hag about the possibility of signing Villarreals Pau Torres, according to reports.\r\nThe Spanish international h… [+871 chars]",
    },
    {
      author: "Josh Williams",
      title:
        "Sadio Mane has already shown Jurgen Klopp what his Liverpool replacement looks like - Liverpool Echo",
      description:
        "Whatever the future holds for Sadio Mane he will go down as one of Jurgen Klopp's greatest Liverpool signings",
      url: "https://www.liverpoolecho.co.uk/sport/football/football-news/sadio-mane-liverpool-jurgen-klopp-24076925",
      urlToImage:
        "https://i2-prod.liverpoolecho.co.uk/sport/football/transfer-news/article24076932.ece/ALTERNATES/s1200/1_GettyImages-1397527398.jpg",
      publishedAt: "2022-05-28T02:00:00Z",
      content:
        "Sadio Mane is currently experiencing his sixth consecutive season as a Liverpool player. \r\nAnd it is a season that will be concluded by a Champions League final, which offers an insight into the club… [+3607 chars]",
    },
    {
      author: "Tom Parmenter",
      title:
        "Champions League Final: Liverpool boss 'Jurgen Klopp slapped me in the face... I love him' - Sky News",
      description: "",
      url: "https://news.sky.com/story/champions-league-final-liverpool-boss-jurgen-klopp-slapped-me-in-the-face-i-love-him-12621869",
      urlToImage:
        "https://e3.365dm.com/22/05/1600x900/skynews-jamie-webster-liverpool_5784794.jpg?20220526135641",
      publishedAt: "2022-05-28T01:13:54Z",
      content:
        "There was a point mid-afternoon three years ago when Jamie Webster lost the ability to speak. \r\nWith his guitar in hand, the one-time electrician had just taken 60,000 fellow Liverpool fans through h… [+2696 chars]",
    },
    {
      author: "Tom Canton",
      title:
        "Arsenal risk £26m striker transfer mistake that could cost Mikel Arteta his Gabriel Jesus steal - Football.London",
      description:
        "Arsenal's pursuit of Gabriel Jesus has been thrown into doubt with reports claiming Mikel Arteta is 'very close' to Alvaro Morata deal.",
      url: "https://www.football.london/arsenal-fc/transfer-news/arsenal-gabriel-jesus-transfer-arteta-24083224",
      urlToImage:
        "https://i2-prod.football.london/incoming/article24083550.ece/ALTERNATES/s1200/0_Gabriel-Jesus-Mikel-Arteta-and-Arsenal.jpg",
      publishedAt: "2022-05-28T01:00:00Z",
      content:
        "We are in the midst of 'silly season' as the transfer window winds up to explode this summer. Arsenal are already being linked with a plethora of players who, in the end, will represent several times… [+2780 chars]",
    },
    {
      author: "https://www.facebook.com/racefansdotnet/",
      title:
        "Russell thought first win by Monaco was likely before season began · RaceFans - RaceFans",
      description:
        "In the round-up: Russell thought first win by Monaco was likely before season began • IndyCar to introduce renewable bio-ethanol based fuel in 2023 • No need for new IndyCar right now - Penske",
      url: "https://www.racefans.net/2022/05/28/racefans-round-up-28-05-5/",
      urlToImage:
        "https://www.racefans.net/wp-content/uploads/2022/05/racefansdotnet-2022-05-27_220124.jpg",
      publishedAt: "2022-05-27T23:01:00Z",
      content:
        "In the round-up: George Russell admits he would likely have been “disappointed” not to have won his first race by the Monaco Grand Prix before the season beganIn brief\r\nRussell expected first win by … [+4090 chars]",
    },
    {
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
      author: "Kieran Lynch",
      title:
        "Liverpool 'willing to trigger £42million release clause for Barcelona starlet Gavi' - Daily Mail",
      description:
        "The 17-year-old's agent with the club expires in the summer of 2023 and he has been linked to a number of top sides over the past season, including Jurgen Klopp's side.",
      url: "https://www.dailymail.co.uk/sport/football/article-10862375/Liverpool-willing-trigger-42million-release-clause-Barcelona-starlet-Gavi.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/05/27/22/58380911-0-image-a-2_1653688800227.jpg",
      publishedAt: "2022-05-27T22:05:05Z",
      content:
        "Liverpool are ready to launch a bid to land Barcelona's teenage sensation Gavi according to reports in Spain.\r\nThe 17-year-old's agent with the club expires in the summer of 2023 and he has been link… [+1962 chars]",
    },
    {
      author: null,
      title:
        "Carlo Ancelotti believes Everton fans are backing his Real Madrid side to beat Liverpool in Champions League final - Sky Sports",
      description:
        "Carlo Ancelotti reckons Real Madrid will have plenty of support on Merseyside from supporters of his former club Everton.",
      url: "https://www.skysports.com/football/news/11095/12622796/carlo-ancelotti-believes-everton-fans-are-backing-his-real-madrid-side-to-beat-liverpool-in-champions-league-final",
      urlToImage:
        "https://e0.365dm.com/22/05/1600x900/skysports-carlo-ancelotti-real-madrid_5760998.jpg?20220505075056",
      publishedAt: "2022-05-27T21:42:57Z",
      content:
        "Carlo Ancelotti reckons Real Madrid will have plenty of support on Merseyside from supporters of his former club Everton.\r\nAncelotti is set to manage in a record fifth Champions League final on Satur… [+2889 chars]",
    },
    {
      author: "Raman",
      title:
        "Transfer News: Manchester United eyeing Daniel Bachmann - The Hard Tackle",
      description:
        "Manchester United have an important decision to make with their goalkeeping situation, with Daniel Bachmann linked with a move #DanielBachmann #DeanHenderson #ManchesterUnited",
      url: "http://www.thehardtackle.com/transfer-news/2022/05/28/manchester-united-eyeing-daniel-bachmann/",
      urlToImage:
        "http://www.thehardtackle.com/wp-content/uploads/2019/01/GettyImages-1072219482-600x315.jpg",
      publishedAt: "2022-05-27T21:38:02Z",
      content:
        "Manchester United have an important decision to make with their goalkeeping situation, with Daniel Bachmann linked with a move.\r\nAccording to the Manchester Evening News, Manchester United have a key… [+2462 chars]",
    },
    {
      author: "Tumaini Carayol",
      title:
        "Nadal and Djokovic remain on collision course for French Open quarter-finals - The Guardian",
      description:
        "Rafael Nadal and Novak Djokovic remain on a path to meet in the French Open quarter-finals after they recorded straight-sets wins in the third round",
      url: "https://amp.theguardian.com/sport/2022/may/27/rafael-nadal-novak-djokovic-on-course-for-french-open-quarters-after-easy-wins",
      urlToImage:
        "https://i.guim.co.uk/img/media/5792e296d192519f797f74cb441ec9ee9a117506/129_86_3247_1950/master/3247.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ea8e0878625cd581de8b14b47e5d62d1",
      publishedAt: "2022-05-27T21:25:00Z",
      content:
        "Rafael Nadal continued to build momentum at the French Open as he moved into the fourth round by easing past Botic van de Zandschulp of the Netherlands 6-3, 6-2, 6-4. In the process, Nadal set up a n… [+3798 chars]",
    },
    {
      author: "Jenny Johnston",
      title:
        "'Telling our son daddy was in jail is the worst thing I've ever had to do': Lilly Becker slams Boris - Daily Mail",
      description:
        "EXCLUSIVE: Lilly Becker said telling her son Amadeus, 12, that his dad was going to jail was the hardest thing she's ever done. She said: 'Actions have consequences'",
      url: "https://www.dailymail.co.uk/news/article-10862171/Telling-son-daddy-jail-worst-thing-Ive-Beckers-wife-lets-rip.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/05/27/21/58378979-0-image-a-55_1653684923489.jpg",
      publishedAt: "2022-05-27T21:04:01Z",
      content:
        "'Telling our son his daddy was in jail is the worst thing I've ever had to do it's always women who have to clean up his mess': Despairing Lily Becker tears into fallen tennis star husband Boris who … [+12402 chars]",
    },
    {
      author: "Emmet Gates",
      title:
        "Liverpool should have three Sadio Mané contingency plans as 'special' transfer decision imminent - Liverpool.com",
      description:
        "Liverpool forward Sadio Mané has been constantly linked with a move away from Anfield. The Reds might need to have a succession plan in mind should he depart.",
      url: "https://www.liverpool.com/liverpool-fc-news/transfer-news/liverpool-transfer-sadio-mane-decision-24078248",
      urlToImage:
        "https://i2-prod.liverpool.com/incoming/article24078104.ece/ALTERNATES/s1200/0_GettyImages-1240832447.jpg",
      publishedAt: "2022-05-27T21:00:00Z",
      content:
        "We could be seeing the final days of Sadio Mané as a Liverpool player, and Saturday could be his last in a Liverpool shirt. Manés form in the second half of the season has been nothing short of elect… [+4384 chars]",
    },
    {
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
      author: null,
      title:
        "Simon Jordan & Martin Keown preview the #UCL final between Real Madrid and Liverpool tomorrow - talkSPORT",
      description:
        "Want content first & fastest?  ✅ SUBSCRIBE here: https://youtube.com/c/talkSPORTEnjoyed this video? 😍 Check out some of our BEST stuff!⚽ INCREDIBLE CALL🔥 Y...",
      url: "https://www.youtube.com/watch?v=6iqZzgWckgg",
      urlToImage: "https://i.ytimg.com/vi/6iqZzgWckgg/maxresdefault.jpg",
      publishedAt: "2022-05-27T19:47:42Z",
      content: null,
    },
  ]);
  return (
    <FootballContext.Provider value={{ footballData }}>
      {props.children}
    </FootballContext.Provider>
  );
};

export default FootballContextProvider;
