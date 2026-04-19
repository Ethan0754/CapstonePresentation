export const pages = {
  menu: {
    type: "menu",
    title: "A Minecraft Server: A New World for Third Places",
    buttons: [
      { label: "Server Administration", target: "server-admin-1" },
      { label: "Third Places", target: "third-places-1" },
      { label: "Community Building", target: "community-1" },
      { label: "Conclusion", target: "conclusion-1" },
      { label: "Works Cited", target: "works-cited-1" }
    ]
  },

  "server-admin-1": {
    type: "content",
    title: "Server Administration",
    body: `
      <ul>
        <li>Self-hosted on personal hardware for lower cost and long-term availability.</li>
        <li>Configured Linux to launch the server on startup using systemd.</li>
        <li>Used Spigot for plugin support and performance improvements over vanilla.</li>
      </ul>
    `,
    prev: "menu",
    next: "server-admin-2"
  },

  "server-admin-2": {
    type: "content",
    title: "Server Administration",
    body: `
      <ul>
        <li>Installed plugins for protection, moderation, and accessibility.</li>
        <li>Used GeyserMC and Floodgate to support both Java and Bedrock players.</li>
        <li>Designed the system for low ongoing maintenance after graduation.</li>
      </ul>
    `,
    prev: "server-admin-1",
    next: "third-places-1"
  },

  "third-places-1": {
    type: "content",
    title: "Third Places",
    body: `
      <ul>
        <li>Oldenburg defines third places as spaces outside home and work where people gather informally.</li>
        <li>Examples include cafes, libraries, churches, and other recurring communal spaces.</li>
        <li>This project asks whether digital environments can serve a similar social role.</li>
      </ul>
    `,
    prev: "menu",
    next: "third-places-2"
  },

  "third-places-2": {
    type: "content",
    title: "Third Places",
    body: `
      <ul>
        <li>Suburbanization and weakened social infrastructure reduced access to informal gathering spaces.</li>
        <li>Online communities now serve some of the same social functions.</li>
        <li>Minecraft is especially strong because it combines persistence, collaboration, and play.</li>
      </ul>
    `,
    prev: "third-places-1",
    next: "community-1"
  },

  "community-1": {
    type: "content",
    title: "Community Building",
    body: `
      <ul>
        <li>The server created a shared environment for Honors students and alumni.</li>
        <li>Players could interact both synchronously and asynchronously.</li>
        <li>Structures and signs persisted after logout, making the world socially meaningful over time.</li>
      </ul>
    `,
    prev: "menu",
    next: "community-2"
  },

  "community-2": {
    type: "content",
    title: "Community Building",
    body: `
      <ul>
        <li>The Ender Dragon event created a high-participation live experience.</li>
        <li>Shared goals encouraged players to talk, cooperate, and revisit the server.</li>
        <li>The event gave the digital space a stronger sense of place and memory.</li>
      </ul>
    `,
    prev: "community-1",
    next: "conclusion-1"
  },

  "conclusion-1": {
    type: "content",
    title: "Conclusion",
    body: `
      <ul>
        <li>Digital environments can function as meaningful third places when designed intentionally.</li>
        <li>Minecraft supports belonging, creativity, and social persistence in ways text-only platforms do not.</li>
        <li>This server demonstrates how technical design can support real community formation.</li>
      </ul>
    `,
    prev: "menu",
    next: "works-cited-1"
  },

  "works-cited-1": {
    type: "content",
    title: "Works Cited",
    body: `
      <p>Put your shortened works cited or key sources here.</p>
    `,
    prev: "menu",
    next: null
  }
};