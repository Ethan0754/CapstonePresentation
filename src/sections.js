export const pages = {
  menu: {
    type: "menu",
    title: `
      <span class="menu-title-main">A Minecraft Server</span>
      <span class="menu-title-sub">A New World for Third Places</span>`,
    buttons: [
      { label: "Third Places", target: "third-places-1" },
      { label: "Online Community", target: "community-1" },
      { label: "Server Design", target: "server-admin-1" },
      { label: "Analysis", target: "analysis-1" },
      { label: "Conclusion", target: "conclusion-1" }
    ]
  },

"server-admin-1": {
  type: "content",
  title: "Server Design",
  pageNumber: 1,
  pageTotal: 2,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Self-hosted on personal hardware for lower cost and long-term availability.</li>
          <li>Configured Linux to launch the server on startup using systemd.</li>
          <li>Installed server-side addons to support community features.</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/computer.jpg"
          alt="Self-hosted server hardware used for the Minecraft server"
          class="slide-image"
        >
      </div>

    </div>
  `,
  prev: null,
  next: "server-admin-2"
},

  "server-admin-2": {
    type: "content",
    title: "Server Design",
    pageNumber: 2,
    pageTotal: 2,
    body: `
      <ul>
        <li>Installed plugins for protection, moderation, and community engagement.</li>
        <li>Land claim and shop plugins</li>
        <li>Used GeyserMC to support cross-platform play.</li>
        <li>Dual-world setup: Survival and Creative.</li>
        <li>UCA in Minecraft</li>
        <li>Designed the system for low ongoing maintenance after graduation.</li>
      </ul>
    `,
    prev: "server-admin-1",
    next: null
  },

  "third-places-1": {
    type: "content",
    title: "What are Third Places?",
    pageNumber: 1,
    pageTotal: 2,
    body: `
    <div class="slide-layout image-bottom">

    <div class="slide-text">
        <ul>
            <li>Ray Oldenburg defines third places as spaces outside home and work where people gather informally.</li>
            <li>Examples include cafes, libraries, churches, and other recurring communal spaces.</li>
            <li>These spaces foster social interaction and community building.</li>
        </ul>
    </div>

    <div class="slide-media">
        <img
            src="/images/friends-couch.jpg"
            alt="Types of Third Places"
            class="slide-image"
        >
    </div>

</div>
    `,
    prev: null,
    next: "third-places-2"
  },

"third-places-2": {
  type: "content",
  title: "Why are Third Places Declining?",
  pageNumber: 2,
  pageTotal: 2,
  body: `
    <ul>
      <li>Suburbanization and weakened social infrastructure reduced access to informal gathering spaces.</li>
      <li>Zoning regulations and increased dependence on private vehicles limited opportunities for spontaneous interaction.</li>
      <li>What will we do about this decline in third places?</li>
    </ul>
  `,
  prev: "third-places-1",
  next: null
},

"community-1": {
  type: "content",
  title: "Online Community",
  pageNumber: 1,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Online communities have become increasingly more common.</li>
          <li>Some people would already identify the internet as their third place.</li>
          <li>Digital spaces offer unique benefits that physical spaces do not.</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/community.png"
          alt="Illustration representing online community"
          class="slide-image-plain"
        >
      </div>

    </div>
  `,
  prev: null,
  next: "community-2"
},

"community-2": {
  type: "content",
  title: "What is Minecraft?",
  pageNumber: 2,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Minecraft is an open-world sandbox game.</li>
          <li>Players can explore, build, and interact with others in a blocky 3D environment.</li>
          <li>There are two main game modes: Survival and Creative.</li>
          <li>"The End" is a dimension that is commonly attributed to the end of the game.</li>
          <li>There are two main platforms: Java Edition and Bedrock Edition.</li>
        </ul>
      </div>
    </div>
  `,
  prev: "community-1",
  next: "community-3"
},

"community-3": {
  type: "content",
  title: "What is Minecraft?",
  pageNumber: 3,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-full">

      <div class="slide-media">
        <img
          src="/images/what-game-look-like.png"
          alt="Survival player standing in a Minecraft world"
          class="slide-image-full"
        >
      </div>

    </div>
  `,
  prev: "community-2",
  next: "community-4"
},

"community-4": {
  type: "content",
  title: "What is Minecraft?",
  pageNumber: 4,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-full">

      <div class="slide-media">
        <img
          src="/images/cool-boat.png"
          alt="Building of a boat in Minecraft"
          class="slide-image-full"
        >
      </div>

    </div>
  `,
  prev: "community-3",
  next: "community-5"
},

"community-5": {
  type: "content",
  title: "Minecraft as an Online Community",
  pageNumber: 5,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Minecraft offers multiple characterstics that supports community building.</li>
          <li>Minecraft's unique open world design follows Oldenburg's principles of third places.</li>
          <li>I've spent more hours on Minecraft than any other game.</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/server-farm.png"
          alt="Collaborative Minecraft server farm"
          class="slide-image"
        >
      </div>

    </div>
  `,
  prev: "community-4",
  next: "community-6"
},

"community-6": {
  type: "content",
  title: "Minecraft as an Social Tool",
  pageNumber: 6,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Minecraft is infinite.</li>
          <li>Minecraft reaches across college classes, graduation status, distances, and time.</li>
          <li>Minecraft is a tool for creativity and expression.</li>
          <li>Autcraft</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/autcraft.jpg"
          alt="Autcraft Minecraft community server"
          class="slide-image"
        >
      </div>

    </div>
  `,
  prev: "community-5",
  next: "community-7"
},

"community-7": {
  type: "content",
  title: "Minecraft as Honors College Community",
  pageNumber: 7,
  pageTotal: 7,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>My goal was to create a space for meaningful social interaction.</li>
          <li>Uniquely serve alumni and upcoming freshman.</li>
          <li>Minecraft would offer a unique space for creativity and expression that current GroupMe platform does not.</li>
          <li>How do you design for that?</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/honors-logo-social.png"
          alt="Schedler Honors College community connection graphic"
          class="slide-image"
        >
      </div>

    </div>
  `,
  prev: "community-6",
  next: null
},

  "conclusion-1": {
    type: "content",
    title: "Conclusion",
    pageNumber: 1,
    pageTotal: 3,
    body: `
      <ul>
        <li>Digital environments can function as meaningful third places when designed intentionally.</li>
        <li>Minecraft supports belonging, creativity, and social persistence in ways text-only platforms do not.</li>
        <li>The added benefits of digital spaces specific to alumni, entering freshman, and summertime connections made this server unique.</li>
      </ul>
    `,
    prev: null,
    next: "works-cited-1"
  },

  "works-cited-1": {
    type: "content",
    title: "Works Cited",
    pageNumber: 2,
    pageTotal: 3,
    body: `
      <p>
        Oldenburg, Ray. “Our Vanishing Third Places.” Planning Commissioners Journal, 1997.<br>
        “Geyser.” GeyserMC. Accessed 20 Oct. 2024.<br>
        Duncan, Sean C. “Minecraft, Beyond Construction and Survival.” 2011.<br>
        Jeffres, Leo W., et al. “The Impact of Third Places on Community Quality of Life.” 2009.<br>
        “Autcraft.” Autcraft. Accessed 20 Oct. 2024.<br>
        Plant, Robert. “Online Communities.” Technology in Society, 2004.
      </p>  
    `,
    prev: "conclusion-1",
    next: "thanks-1"
  },

  "thanks-1": {
    type: "content",
    title: "Thank You!",
    pageNumber: 3,
    pageTotal: 3,
    body: `
      <p>Thank you! Questions?</p>
    `,
    prev: "works-cited-1",
    next: null

  },

"analysis-1": {
  type: "content",
  title: "Player Participation and Engagement",
  pageNumber: 1,
  pageTotal: 6,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Immediate playerbase on launch.</li>
          <li>Consistent and meaningful player activity over time.</li>
          <li>Observing players starter bases and odd buildings shows meaningful interaction</li>
          <li>Players rushed to "The End" dimension, which I thought would take more time</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/cobble-villager.png"
          alt="Player-built villager structure showing early engagement"
          class="slide-image"
        >
      </div>

    </div>
  `,
  prev: null,
  next: "analysis-2"
},

"analysis-2": {
  type: "content",
  title: "Ender Dragon Event",
  pageNumber: 2,
  pageTotal: 6,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>What is the Ender Dragon?</li>
          <li>Players must work together to take out the healing pillars.</li>
          <li>Only after the pillars are destroyed can the ender dragon be defeated.</li>
          <li>The ender dragon represents a significant challenge for the community to overcome together.</li>
        </ul>
      </div>

    </div>
  `,
  prev: "analysis-1",
  next: "analysis-3"
},

"analysis-3": {
  type: "content",
  title: "Ender Dragon Event",
  pageNumber: 3,
  pageTotal: 6,
  body: `
    <div class="slide-layout image-full">

      <div class="slide-media">
        <img
          src="/images/ender-dragon.png"
          alt="Building of a boat in Minecraft"
          class="slide-image-full"
        >
      </div>

    </div>
  `,
  prev: "analysis-2",
  next: "analysis-4"
},

"analysis-4": {
  type: "content",
  title: "Ender Dragon Event",
  pageNumber: 4,
  pageTotal: 6,
  body: `
    <div class="slide-layout image-bottom">

      <div class="slide-text">
        <ul>
          <li>Live scheduled event for players to participate in.</li>
          <li>Shared goals encouraged players to talk, cooperate, and revisit the server.</li>
          <li>After the event, players that did not play together before were showing each other their bases and projects.</li>
          <li>The event gave the digital space a stronger sense of place and memory</li>
        </ul>
      </div>

      <div class="slide-media">
        <img
          src="/images/end-area.png"
          alt="End dimension area after Ender Dragon event"
          class="slide-image"
        >
      </div>

    </div>
  `,
  prev: "analysis-3",
  next: "analysis-5"
},

"analysis-5": {
  type: "content",
  title: "Ender Dragon Event",
  pageNumber: 5,
  pageTotal: 6,
  body: `
    <div class="slide-layout image-full">

      <div class="slide-media">
        <img
          src="/images/Ender Dragon Fight.png"
          alt="Players participating in the Ender Dragon fight event"
          class="slide-image-full"
        >
      </div>

    </div>
  `,
  prev: "analysis-4",
  next: "analysis-6"
},

  "analysis-6": {
  type: "content",
  title: "In-Game Usernames",
  pageNumber: 6,
  pageTotal: 6,
  body: `
    <ul>
      <li>A unique aspect of Minecraft that I did not anticipate - the use of in-game usernames.</li>
      <li>This added a layer of anonymity to the interactions.</li>
      <li>Some players used their real names, while others preferred pseudonyms.</li>
      <li>Anonymity goes against Ray Oldenburg's principles for third places, but it offered a unique aspect to the social dynamics of the server.</li>
    </ul>
  `,
  prev: "analysis-5",
  next: null
},
};