// ═══════════════════════════════════════════════════════════
//  YASMINA NIGMANOVA — PORTFOLIO  |  main.js
//  All content data lives here. Edit to update the site.
// ═══════════════════════════════════════════════════════════

// ── Portfolio Data (JSON) ───────────────────────────────────
const portfolioData = {

  // Projects currently in progress — shown in "Continue" row
  continueItems: [
    {
      title: "Ongoing project",
      sub: "In progress · 70% complete",
      progress: 70
    },
    {
      title: "Side project name",
      sub: "Case study · 45% complete",
      progress: 45
    }
  ],

  // Main showcase projects — wide card row
  featuredProjects: [
    {
      title: "Dashboard redesign",
      sub: "Product design · 2024",
      icon: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>`
    },
    {
      title: "Mobile app concept",
      sub: "UX / UI · 2023",
      icon: `<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`
    },
    {
      title: "Web application",
      sub: "Full stack · 2023",
      icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`
    },
    {
      title: "Brand identity",
      sub: "Branding · 2022",
      icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`
    }
  ],

  // Skills grid — square cards
  skills: [
    {
      label: "Design",
      icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`
    },
    {
      label: "Development",
      icon: `<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>`
    },
    {
      label: "Analytics",
      icon: `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`
    },
    {
      label: "Collaboration",
      icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`
    }
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
      featuredProjects: portfolioData.featuredProjects,
      skills:           portfolioData.skills,
      latestWork:       portfolioData.latestWork
    };
  }
}).mount('#app');