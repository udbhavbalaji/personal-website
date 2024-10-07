export const aboutPageContent = {
  title: "About SongSavvy",
  // adding the content as a list of sentences
  content: [
    "With the emergence of social media, sharing music has become easier than ever before! An average music listener has access to millions of songs of a particular genre. Most of us have heard of popular artists like Travis Scott & Taylor Swift, with the vast majority of us including their music in our everyday playlists. Up-and-coming artists can find it extremely difficult to create & identify distinguishing characteristics for their music.",
    "SongSavvy is a useful tool for such emerging artists. Once you enter the URL of a Spotify track, SongSavvy predicts (with an accuracy of ~88%) whether the track is a hit or flop. The model was built using a Multi-Layered Neural Network and the project repo can be found by clicking the button below.",
    "SongSavvy's primary use-case is to identify the most appropriate choices for music marketing. It is evident that marketing for an artist happens primarily in 2 levels. For up-and-coming artists, they handle their own marketing with limited budgets. SongSavvy is a valuable tool for them as it allows them to make more informed decisions on where to spend their valuable capital to maximize their music's reach.",
    "For established artists (most of whom are signed to music labels), their music marketing is usually handled by the labels, who will look to maximize profits by maximizing reach and minimizing marketing expenses. SongSavvy can help these companies identify certain tracks in an artists' catalogue that will perform the best and therefore, have a greater ROI.",
  ],
  buttonTitle: "Visit GitHub Repo",
  buttonLink: "https://github.com/udbhavbalaji/song-savvy",
  linkType: "link",
};

export const footerContent = [
  {
    title: "Quick Links",
    items: [
      {
        title: "Home",
        link: "/songsavvy",
        linkType: "route",
      },
      {
        title: "About",
        link: "/songsavvy/about",
        linkType: "route",
      },
      {
        title: "Prediction History",
        link: "",
        linkType: "route",
      },
    ],
  },
  {
    title: "Let's Connect!",
    items: [
      {
        title: "Email Me!",
        link: "mailto:udbhavbalaji@gmail.com",
        linkType: "link",
      },
      {
        title: "Linkedin",
        link: "https://linkedin.com/in/udbhav-balaji",
        linkType: "link",
      },
      {
        title: "GitHub",
        link: "https://github.com/udbhavbalaji",
        linkType: "link",
      },
    ],
  },
];

export const homePageContent = {
  title: "Welcome to SongSavvy!",
  content: [
    "Ever wondered if your favorite song has what it takes to top the charts? Click below, and enter a Spotify song link, and SongSavvy will analyze its features to predict whether it's destined to be a hit or just another flop. Get ready to discover the future of your music!",
  ],
  buttonTitle: "Get Started",
  buttonLink: "/songsavvy/prediction",
  linkType: "route",
};

export const navbarItems = [
  {
    title: "Predictor",
    link: "/songsavvy/prediction",
    linkType: "route",
  },
  {
    title: "About",
    link: "/songsavvy/about",
    linkType: "route",
  },
  {
    title: "GitHub Repo",
    link: "https://github.com/udbhavbalaji/personal-website/tree/main/src/pages/song-savvy",
    linkType: "link",
  },
];
