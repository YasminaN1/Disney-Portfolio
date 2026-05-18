// Splash Screen Logic
const splash = document.getElementById('splash-screen');
const main = document.getElementById('app');

// Simulate a loading time of 3 seconds
setTimeout(() => {
    splash.style.opacity = '0'; // Fade out
    
    setTimeout(() => {
        splash.style.display = 'none';
        main.style.display = 'block';
        document.body.style.overflow = 'auto'; // Allow scrolling
    }, 1000); // Matches the CSS transition time
}, 3000);

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
      title: "Ongoing project",
      sub: "In progress · 70% complete",
      progress: 70,
      link: "#",
      image: ""
    },
    {
      title: "Side project name",
      sub: "Case study · 45% complete",
      progress: 45,
      link: "#",
      image: ""
    }
  ],

  // Main showcase projects — wide card row for Senior Year
  seniorProjects: [
    {
      title: "College Recruitment",
      sub: "Senior showcase · 2024",
      link: "#",
      image: "imgs/CollegeRecruitment_Sr.png"
    },
    {
      title: "Cards With Friends",
      sub: "Social design · 2024",
      link: "#",
      image: "imgs/CardsWithFriends_Sr.png"
    },
    {
      title: "Class Schedules",
      sub: "Planner interface · 2024",
      link: "#",
      image: "imgs/ClassSchedules_Sr.png"
    },
    {
      title: "Album Gallery",
      sub: "Photo album UI · 2024",
      link: "#",
      image: "imgs/AlbumGallery_Sr.png"
    },
    {
      title: "Retro Cinema Collection",
      sub: "Film archive · 2024",
      link: "#",
      image: "imgs/RetroCinemaCollection_Sr.png"
    },
    {
      title: "Christmas Buzzfeed Quiz",
      sub: "Holiday campaign · 2024",
      link: "#",
      image: "imgs/ChristmasBuzzfeedQuiz_Sr.png"
    },
    {
      title: "KC Nail Art",
      sub: "Beauty branding · 2024",
      link: "#",
      image: "imgs/KCNailArt_Sr.png"
    }
  ],

  juniorProjects: [
    {
      title: "The Search For The Forgotten Crown",
      sub: "Adventure web design · 2023",
      link: "#",
      image: "imgs/TheSearchForTheForgottenCrown_J.png"
    },
    {
      title: "Thomas Edison Interactive",
      sub: "Historical animation · 2023",
      link: "#",
      image: "imgs/ThomasEdison_J.png"
    },
    {
      title: "8Ball Game",
      sub: "Interactive game · 2023",
      link: "#",
      image: "imgs/8Ball_J.png"
    },
    {
      title: "Bridgerton Name Generator",
      sub: "Creative UI · 2023",
      link: "#",
      image: "imgs/BridgertonName_J.png"
    },
    {
      title: "Little Bird Toy Co.",
      sub: "Brand design · 2023",
      link: "#",
      image: "imgs/LittleBirdToyCo_J.png"
    },
    {
      title: "Moana Hangman",
      sub: "Game design · 2023",
      link: "#",
      image: "imgs/MoanaHangman_J.png"
    },
    {
      title: "Postcard Generator",
      sub: "Front-end tool · 2023",
      link: "#",
      image: "imgs/PostcardGenerator_J.png"
    },
    {
      title: "Rangers Team Roster",
      sub: "Roster app · 2023",
      link: "#",
      image: "imgs/RangersTeamRoster_J.png"
    },
    {
      title: "The Storm Court Story",
      sub: "Story-driven UI · 2023",
      link: "#",
      image: "imgs/TheStormCourtStory_J.png"
    }
  ],

  sophomoreProjects: [
    {
      title: "Sophomore project 1",
      sub: "Illustration · 2022",
      link: "#",
      image: "imgs/CoralCove_S.png",
      icon: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`
    },
    {
      title: "Sophomore project 2",
      sub: "Branding · 2022",
      link: "#",
      image: "imgs/FarmerMarket_S.png",
      icon: `<path d="M12 2l4 7H8l4-7z"/><path d="M5 9h14v11H5z"/>`
    },
    {
      title: "Sophomore project 3",
      sub: "Motion design · 2022",
      link: "#",
      image: "imgs/MemorialSloan_S.png",
      icon: `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`
    },
    {
      title: "Sophomore project 4",
      sub: "Visual systems · 2022",
      link: "#",
      image: "imgs/Santorini_S.png",
      icon: `<rect x="4" y="4" width="16" height="16" rx="3"/><line x1="4" y1="12" x2="20" y2="12"/>`
    },
    {
      title: "Sophomore project 5",
      sub: "Campaign launch · 2022",
      link: "#",
      image: "imgs/Tabayer_S.png",
      icon: `<path d="M3 12h18"/><path d="M12 3v18"/><circle cx="12" cy="12" r="5"/>`
    }
  ],

  // Skills grid — square cards
  skills: [
    { label: "Student Council Vice President (3 Years)", icon: `<polygon points="12 2 14 8 20 8 15 12 17 18 12 14 7 18 9 12 4 8 10 8 12 2"/>` },
    { label: "Executive Board Vice President (Senior Year)", icon: `<rect x="4" y="4" width="16" height="12" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/>` },
    { label: "Founder & Vice President, Slavic Society Club", icon: `<circle cx="12" cy="8" r="3"/><rect x="6" y="12" width="12" height="6" rx="2"/>` },
    { label: "Anytown: Leaders of Diversity", icon: `<path d="M12 2v6"/><circle cx="12" cy="14" r="6"/>` },
    { label: "Web Design Pathway Advisory Board Member", icon: `<rect x="3" y="6" width="18" height="12" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/>` },
    { label: "National Honor Society Member", icon: `<polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/>` },
    { label: "Italian Honor Society Member", icon: `<path d="M4 6h16v12H4z"/><line x1="4" y1="12" x2="20" y2="12"/>` },
    { label: "Camp & Daycare Staff Member (Genius Kids Academy)", icon: `<circle cx="8" cy="10" r="2"/><circle cx="16" cy="10" r="2"/><path d="M4 18c2-3 6-4 8-4s6 1 8 4"/>` },
    { label: "Pianist — Carnegie Hall Performer", icon: `<path d="M3 7h18v4a6 6 0 0 1-6 6H9"/><circle cx="6" cy="10" r="1"/>` },
    { label: "Dancer — 12 Years", icon: `<path d="M12 2c2 4 5 6 8 8-3 2-6 4-8 10-2-6-5-8-8-10 3-2 6-4 8-8z"/>` },
    { label: "Swim Team Manager", icon: `<path d="M2 12c4-4 8-4 12 0s8 4 12 0"/><path d="M2 16c4-4 8-4 12 0s8 4 12 0"/>` }
  ],

  // Most recent work — tall portrait cards
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
      continueItems:    portfolioData.continueItems,
      seniorProjects:  portfolioData.seniorProjects,
      juniorProjects:  portfolioData.juniorProjects,
      sophomoreProjects: portfolioData.sophomoreProjects,
      skills:           portfolioData.skills,
      latestWork:       portfolioData.latestWork
    };
  },
  methods: {
    scrollRow(direction, refName) {
      const row = this.$refs[refName];
      if (!row) return;
      const distance = direction === 'left' ? -260 : 260;
      row.scrollBy({ left: distance, behavior: 'smooth' });
    }
  }
}).mount('#app');