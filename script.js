// Splash Screen Logic
const splash = document.getElementById('splash-screen');
const main = document.getElementById('app');

function revealMainContent() {
    if (!splash || !main) return;
    splash.style.opacity = '0'; // Fade out
    setTimeout(() => {
        splash.style.display = 'none';
        main.style.display = 'block';
        document.body.style.overflow = 'auto'; // Allow scrolling
    }, 1000); // Matches the CSS transition time
}

window.addEventListener('load', () => {
    setTimeout(revealMainContent, 3000);
});

// ═══════════════════════════════════════════════════════════
//  YASMINA NIGMANOVA — PORTFOLIO  |  main.js
//  All content data lives here. Edit to update the site.
// ═══════════════════════════════════════════════════════════

// ── Portfolio Data (JSON) ───────────────────────────────────
// Add your project image path to the `image` field for each senior, junior, and sophomore card.
// Example: image: "imgs/YourProjectImage.png"
const portfolioData = {

  // Projects currently in progress — shown in "Continue" row
  continueItems: [
    {
      title: "Shaili's Spotify",
      sub: " 70% complete",
      progress: 70,
      link: "https://shaili-patel.github.io/Portfolio/",
      image: "imgs/image.png"
    },
    {
      title: "Aly's Netflix",
      sub: "49% complete",
      progress: 49,
      link: "https://526aschwartz.github.io/senior-port/",
      image: "imgs/AlyNetflix.png"
    }
  ],

  // Featured carousel projects for the hero section
  featuredProjects: [ 
    {
      title: "UNC Chapel Hill",
      sub: "GitHub · 2025",
      description: "A polished senior project highlighting brand design and interactive detail.",
      link: "https://yasminan1.github.io/College-Recruitment/",
      detailsPage: "capel-hill.html",
      image: "imgs/CollegeRecruitment_Sr.png",
      year: "Senior Year"
    },
    {
      title: "KC Nail Art",
      sub: "GitHub · 2026",
      description: "Beauty branding with a rich visual identity and immersive interface.",
      link: "https://yasminan1.github.io/KC-Nail-Art/",
      detailsPage: "kc-nail-art.html",
      image: "imgs/KCNailArt_Sr.png",
      year: "Senior Year"
    },
    {
      title: "Christmas Buzzfeed Quiz",
      sub: "GitHub · 2025",
      description: "A festive interactive quiz experience built for holiday engagement.",
      link: "https://yasminan1.github.io/BuzzfeedChristmas/",
      detailsPage: "christmas-buzzfeed-quiz.html",
      image: "imgs/ChristmasBuzzfeedQuiz_Sr.png",
      year: "Senior Year"
    },
    {
      title: "The Search For The Forgotten Crown",
      sub: "GitHub · 2024",
      description: "A storytelling-driven interface that guides users through an immersive journey.",
      link: "https://yasminan1.github.io/NovWebsite/",
      detailsPage: "search-for-the-forgotten-crown.html",
      image: "imgs/TheSearchForTheForgottenCrown_J.png",
      year: "Junior Year"
    },
    {
      title: "Little Bird Toy Co.",
      sub: "GitHub · 2025",
      description: "A playful retail concept with bright visuals and engaging product displays.",
      link: "https://yasminan1.github.io/LittleBirdToyCo_J/",
      detailsPage: "little-bird-toy-co.html",
      image: "imgs/LittleBirdToyCo_J.png",
      year: "Junior Year"
    },
    {
      title: "Rangers Team Roster",
      sub: "GitHub · 2025",
      description: "A team roster interface with clean structure and easy navigation.",
      link: "https://yasminan1.github.io/MayWebsite/",
      detailsPage: "rangers-team-roster.html",
      image: "imgs/RangersTeamRoster_J.png",
      year: "Junior Year"
    },
    {
      title: "Vacation in Santorini",
      sub: "Replit · 2023",
      description: "A scenic concept that pairs elegant visuals with polished layout design.",
      link: "https://71ca19e0-aff7-47bf-b54c-a99562ef70a9-00-1m38iwofyuc49.picard.repl.co/",
      detailsPage: "santorini.html",
      image: "imgs/Santorini_S.png",
      year: "Sophomore Year"
    },
    {
      title: "Tabayer",
      sub: "Replit · 2024",
      description: "A luxury campaign project with bold typography and refined branding.",
      link: "https://8509c2f4-3a17-4afb-bdb3-56c276d46ea6-00-kvie6fve7bs4.worf.replit.dev/",
      detailsPage: "tabayer.html",
      image: "imgs/Tabayer_S.png",
      year: "Sophomore Year"
    },
    {
      title: "Coral Cove",
      sub: "Replit · 2023",
      description: "A colorful illustration piece focused on seaside storytelling.",
      link: "https://f8258f4b-977e-4c6f-b866-3f81513990e0-00-39f7bz2ym8y8a.janeway.repl.co/",
      detailsPage: "coral-cove.html",
      image: "imgs/CoralCove_S.png",
      year: "Sophomore Year"
    }
  ],

  // Main showcase projects — wide card row for Senior Year
  seniorProjects: [
    {
      title: "College Recruitment",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/College-Recruitment/",
      image: "imgs/CollegeRecruitment_Sr.png"
    },
    {
      title: "JS Functions Demo",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/1.01-Functions-Refresher/",
      image: "imgs/FunctionsDemo_S.png"
    },
    {
      title: "Arrays & Loops Demo",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/Array-Loop-Refresher/",
      image: "imgs/ArrayLoopsRefresher_S.png"
    },
    {
      title: "Event Listener Demo",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/Event-Listeners-Refresher//",
      image: "imgs/EventListenerDemo_S.png"
    },
    {
      title: "Cards With Friends",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/Cards-with-Friends/",
      image: "imgs/CardsWithFriends_Sr.png"
    },
    {
      title: "Class Schedules",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/Class-Schedule-Project/",
      image: "imgs/ClassSchedules_Sr.png"
    },
    {
      title: "Album Gallery",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/SlideshowProject/",
      image: "imgs/AlbumGallery_Sr.png"
    },
    {
      title: "Retro Cinema Collection",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/Movie-Posters/",
      image: "imgs/RetroCinemaCollection_Sr.png"
    },
    {
      title: "Christmas Buzzfeed Quiz",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/BuzzfeedChristmas/",
      image: "imgs/ChristmasBuzzfeedQuiz_Sr.png"
    },
    {
      title: "KC Nail Art",
      sub: "GitHub · 2026",
      link: "https://yasminan1.github.io/KC-Nail-Art/",
      image: "imgs/KCNailArt_Sr.png"
    }
  ],

  // Junior year projects
  juniorProjects: [
     {
      title: "Summertainment Travels",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/Summer-tainment-site/index.html",
      image: "imgs/Summertainment_J.png"
    },
    {
      title: "Thomas Edison Interactive",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/OctWebsite/",
      image: "imgs/ThomasEdison_J.png"
    },
    {
      title: "Ghost Animation",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/SpookyTca1/ ",
      image: "imgs/Ghost_J.png"
    },
    {
      title: "Pumpkin Animation",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/PumpkinTca1/",
      image: "imgs/Minnie_J.png"
    },
    {
      title: "The Search For The Forgotten Crown",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/NovWebsite/",
      image: "imgs/TheSearchForTheForgottenCrown_J.png"
    },
    {
      title: "8Ball Game",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/MagicEightBall/",
      image: "imgs/8Ball_J.png"
    },
    {
      title: "Bridgerton Name Generator",
      sub: "GitHub · 2024",
      link: "https://yasminan1.github.io/DecWebsite/",
      image: "imgs/BridgertonName_J.png"
    },
    {
      title: "Monthly Gallery",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/MonthlyWebsiteGallery/",
      image: "imgs/MonthlyWebsites_J.png"
    },
    {
      title: "Rock Paper Scissors",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/JanWebsite/",
      image: "imgs/RPS_J.png"
    },
    {
      title: "Postcard Generator",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/PostcardGenerator/",
      image: "imgs/PostcardGenerator_J.png"
    },
    {
      title: "James K. Polk History",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/Febwebsite/",
      image: "imgs/JamesKPolk_J.png"
    },
    {
      title: "To-Do List",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/ToDoList/",
      image: "imgs/ToDoList_J.png"
    },
     {
      title: "Moana Hangman",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/MarchWebsite/",
      image: "imgs/MoanaHangman_J.png"
    },
    {
      title: "The Storm Court Story",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/AprilWebsite/",
      image: "imgs/TheStormCourtStory_J.png"
    },
     {
      title: "Rangers Team Roster",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/MayWebsite/",
      image: "imgs/RangersTeamRoster_J.png"
    },
    {
      title: "Little Bird Toy Co.",
      sub: "GitHub · 2025",
      link: "https://yasminan1.github.io/JuneWebsite/",
      image: "imgs/LittleBirdToyCo_J.png"
    },
  ],

  // Sophomore year projects
  sophomoreProjects: [
    {
      title: "Coral Cove Cafe",
      sub: "Replit · 2023",
      link: "https://f8258f4b-977e-4c6f-b866-3f81513990e0-00-39f7bz2ym8y8a.janeway.repl.co/",
      image: "imgs/CoralCove_S.png",
      icon: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`
    },
    {
      title: "Farmer's Market",
      sub: "Replit · 2023",
      link: "https://940b8c34-5183-4f4e-90cf-e4c6d0af6b8e-00-nylhb5qh578q.janeway.repl.co/",
      image: "imgs/FarmerMarket_S.png",
      icon: `<path d="M12 2l4 7H8l4-7z"/><path d="M5 9h14v11H5z"/>`
    },
    {
      title: "Memorial Sloan Kettering Cancer Center",
      sub: "Replit · 2024",
      link: "https://48a7ae20-75c0-4792-8f1f-f0cdf09cbec6-00-3ovnz46po2q2.worf.replit.dev/",
      image: "imgs/MemorialSloan_S.png",
      icon: `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`
    },
    {
      title: "Vacation in Santorini",
      sub: "Replit · 2024",
      link: "https://71ca19e0-aff7-47bf-b54c-a99562ef70a9-00-1m38iwofyuc49.picard.repl.co/",
      image: "imgs/Santorini_S.png",
      icon: `<rect x="4" y="4" width="16" height="16" rx="3"/><line x1="4" y1="12" x2="20" y2="12"/>`
    },
    {
      title: "Tabayer Jewelry",
      sub: "Replit · 2024",
      link: "https://8509c2f4-3a17-4afb-bdb3-56c276d46ea6-00-kvie6fve7bs4.worf.replit.dev/",
      image: "imgs/Tabayer_S.png",
      icon: `<path d="M3 12h18"/><path d="M12 3v18"/><circle cx="12" cy="12" r="5"/>`
    }
  ],

  // Extracurricular skills and activity cards
  skills: [
    { label: "Student Council Vice President (3 Years)", image: "imgs/Stuco3Yrs.png" },
    { label: "Executive Board Vice President (Senior Year)", icon: `<path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"/>`, image: "imgs/ExeBoard.png" },
    { label: "Founder & Vice President, Slavic Society Club", icon: `<path d="M12 2a10 10 0 0 0-8 14.9L12 22l8-5.1A10 10 0 0 0 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 11.5a6.5 6.5 0 0 1-5.5-3h11a6.5 6.5 0 0 1-5.5 3z"/>`, image: "imgs/SlavicSociety.png" },
    { label: "Anytown: Leaders of Diversity", icon: `<path d="M8 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm8 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-8 8c0-2 2-3 4-3s4 1 4 3v1H8v-1z"/>`, image: "imgs/Anytown.png" },
    { label: "Web Design Pathway Advisory Board Member", icon: `<rect x="4" y="5" width="16" height="10" rx="2"/><line x1="8" y1="19" x2="16" y2="19"/><line x1="10" y1="5" x2="10" y2="15"/><line x1="14" y1="5" x2="14" y2="15"/>`, image: "imgs/Webby.png" },
    { label: "National Honor Society Member", icon: `<path d="M4 10l8-5 8 5-8 5-8-5zm0 2.5v3.5h16v-3.5"/>`, image: "imgs/NHS.png" },
    { label: "Italian Honor Society Member", icon: `<path d="M12 3l2.09 6.26L20 10l-5 3.64L16.18 20 12 16.9 7.82 20 9 13.64 4 10l5.91-.74L12 3z"/>`, image: "imgs/ItalianNHS.png" },
    { label: "Camp & Daycare Staff Member (Genius Kids Academy)", icon: `<circle cx="8" cy="10" r="2"/><circle cx="16" cy="10" r="2"/><path d="M4 18c2-3 6-4 8-4s6 1 8 4"/>`, image: "imgs/GeniusKids.png" },
    { label: "Pianist — Carnegie Hall Performer", icon: `<rect x="4" y="8" width="16" height="8" rx="1"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="10" y1="8" x2="10" y2="16"/><line x1="13" y1="8" x2="13" y2="16"/><line x1="16" y1="8" x2="16" y2="16"/>`, image: "imgs/Piano.png" },
    { label: "Dancer — 12 Years", icon: `<path d="M12 3c-2 2-3 5-3 8 0 3 1 6 3 8 2-2 3-5 3-8 0-3-1-6-3-8zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>`, image: "imgs/Dancer.png" },
    { label: "Swim Team Manager", icon: `<path d="M2 14c4-4 8-4 12 0s8 4 12 0"/><path d="M2 18c4-4 8-4 12 0s8 4 12 0"/>`, image: "imgs/SwimTeam.png" }
  ],

  // Latest work / supplemental portfolio stats
  latestWork: [
    {
      title: "Figma system",
      year: "2024",
      icon: `<line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="15" x2="19" y2="15"/><line x1="11" y1="3" x2="11" y2="21"/>`
    },
    {
      title: "API integration",
      year: "2024",
      icon: `<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>`
    },
    {
      title: "Data dashboard",
      year: "2023",
      icon: `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`
    },
    {
      title: "Email campaign",
      year: "2023",
      icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`
    }
  ]

};


// ── Vue 3 App ───────────────────────────────────────────────
const { createApp } = Vue;

createApp({
  data() {
    return {
      // application state
      featuredIndex: 0,
      featuredProjects: portfolioData.featuredProjects,
      continueItems:    portfolioData.continueItems,
      seniorProjects:   portfolioData.seniorProjects,
      juniorProjects:   portfolioData.juniorProjects,
      sophomoreProjects: portfolioData.sophomoreProjects,
      seniorExpanded:   false,
      juniorExpanded:   false,
      sophomoreExpanded:false,
      skills:           portfolioData.skills,
      skillLevels: [
        { name: "Vue", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "JSON", level: 80 },
        { name: "jQuery", level: 75 }
      ]
    };
  },
  computed: {
    // derived state
    featuredProject() {
      return this.featuredProjects[this.featuredIndex] || this.featuredProjects[0];
    }
  },
  methods: {
    // interaction handlers
    prevFeatured() {
      this.featuredIndex = this.featuredIndex > 0
        ? this.featuredIndex - 1
        : this.featuredProjects.length - 1;
    },
    nextFeatured() {
      this.featuredIndex = (this.featuredIndex + 1) % this.featuredProjects.length;
    },
    scrollRow(direction, refName) {
      const row = this.$refs[refName];
      if (!row) return;
      const distance = direction === 'left' ? -260 : 260;
      row.scrollBy({ left: distance, behavior: 'smooth' });
    },
    toggleExpanded(section) {
      const stateName = section + 'Expanded';
      this[stateName] = !this[stateName];
      if (!this[stateName]) {
        this.$nextTick(() => {
          const row = this.$refs[section + 'Row'];
          if (row) row.scrollLeft = 0;
        });
      }
    }
  }
}).mount('#app');