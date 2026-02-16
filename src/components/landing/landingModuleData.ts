import type { LandingModuleType } from "../../types";
export const aboutMeProps: LandingModuleType = {
  title: "About Me",
  headline: "",
  blocks: [
    {
      type: "text",
      content: "Hi, I'm Brendan, a full-stack software engineer based in NYC.",
    },
    {
      type: "text",
      content:
        "My career in software began while I was in college, where I was introduced to an organization on campus called [Launchpad](https://stevenslaunchpad.org/). Through launchpad, I was able to direct my newfound passion for software engineering towards solving a real-world problem. Through launchpad and the people that I would meet, I worked on [Quae](#quae-module), [Cabal Labs](#cabal-module), and [SmileNow](#smilenow-module).",
    },
    {
      type: "text",
      content:
        "These days I'm focused on growing my skills as a software engineer, I'm currently working at [Trader Interactive](#trader-module), where I lead the Platform & Tooling Team.",
    },
    {
      type: "text",
      content:
        "In my spare time, I love cycling 🚲, playing pool 🎱, cooking 🧑‍🍳, motor sports 🏎️, and I have two orange cats named Beans and Garbanzo 🐈🐈",
    },
  ],
};
export const quaeProps: LandingModuleType = {
  title: "Quae",
  headline: "Community Voting App",
  subHeadline: "Co-founder",
  link: "https://quae.app",
  blocks: [
    {
      type: "text",
      content:
        "I met [Sam](https://samschmitt.net) through Launchpad, we worked together to co-found Quae. Our mission was to address the issue that people aren't heard by their leaders. Quae sought to change how people were heard in their community by creating a dedicated online forum for verified referendum voting.",
    },
    {
      type: "text",
      content:
        "We launched our app on campus and within the city of Hoboken. We knew we were on the right track when the Student Government Association adopted it as their official tool for student outreach, and posts on Quae began to introduce changes to campus policies. Hoboken City Council took interest to the idea as well, though it was never official adopted, it was mentioned during city council meetings. Quae taught me more about software development and what it means to be an engineer than any class I took during college.",
    },
  ],
};
export const cabalProps: LandingModuleType = {
  title: "Cabal Labs",
  headline: "Web3 Research & Development Group",
  subHeadline: "Co-founder",
  link: "https://caballabs.com",
  blocks: [
    {
      type: "text",
      content:
        "In college I met some really cool people, being engineers, and cryptocurrency gaining popularity, some friends and I started a blockchain study group, we named the group chat \"The Crypto Cabal\". We began competing in ETH Global Hackathons using the \"Cabal\" moniker. We eventually put a formal name to our hackathon participation and founded Cabal Labs: a technology research firm.",
    },
    {
      type: "text",
      content:
        "It started with 4 of us, but we grew a community 30+ engineers, 9 of which competed with us at hackathons. As an organization, we attended 6 ETH Global Hackathon's and won over 16 prize bounties. These winnings were re-invested to help us continue to build our community and were used for reimbursing travel expenses for hackers.",
    },
  ],
};
export const smileNowProps: LandingModuleType = {
  title: "Smile Now",
  headline: "Capture Moments",
  subHeadline: "Mobile App Dev & Co-founder",
  link: "https://smile.samschmitt.net",
  blocks: [
    {
      type: "text",
      content:
        "Smile Now started as a groupchat I created for my birthday party, I asked people to sporadically take photos throughout the night and send them to the chat. My friend [Sam](https://samschmitt.net) saw what it could be if it was a stand alone app and created an MVP. His family tried it during Thanksgiving and they loved it. We decided to build \"Smile Now\" and asked [Cris](https://sosaofficial.com) to help run marketing for the project.",
    },
    {
      type: "text",
      content:
        "We wanted to get into a beta phase as quickly as possible - so we gathered in my kitchen and built a 99.9% shippable app in 24 hours (this was pre-ChatGPT mind you). By the end of the week it was passed review and was on the app store. The concept is simple, if you want a fun way to take pictures at an event you're attending, make a \"Smile Now Party\". We made the process of creating and joining a party a total of only 3 clicks. Once a party has been activated, random party goers will be notified to take a candid photo. By the end of the night, everyone will have gotten to take or pose for a photo, and everyone will be able to view all the photos.",
    },
    {
      type: "text",
      content:
        "We were able to beta test it during the closing weeks of my senior year at university, and we reached over 50 users before we decided to pause work. It was a super fun experience working on this project, I still think there's some potential and hope to revisit this ideas some day.",
    },
  ],
};

export const plmProps: LandingModuleType = {
  title: "PLM Fleet",
  headline: "Refrigerated Trailer Leasing",
  subHeadline: "Associate Software Engineer",
  link: "https://www.plmfleet.com",
  blocks: [
    {
      type: "text",
      content:
        "My first \"office\" job as a Software Engineer was at [PLM Fleet]('http://plmfleet.com'). I learned how to develop on a new tech stack (.NET) and worked with Azure cloud services for the first time. I also experienced the joys of building on top of a legacy system for the first time.",
    },
    {
      type: "text",
      content:
        'Within 3 months there, I was leading development on 2 "long overdue" projects that my skill set was best suited for.  I rebuild the website for selling end-of-life trailers. I built this using Next.js, isolated from the legacy stack, which marked the first step in a new direction for the team.  The new version added functionalities the old version lacked to improve the customer experience and replaced an annual 2-month-long manual-data-entry process for populating the website with an automated process. The second big project I worked on for PLM was to revamp the look and feel of the Customer Portal, I worked with a data scientist and product manager to redesign the key flows, updated the styles, and integrated Power BI for dynamic data visualizations.',
    },
  ],
};

export const TraderInteractiveProps: LandingModuleType = {
  title: "Trader Interactive",
  headline: "Online Vehicle Marketplace",
  subHeadline: "Software Engineer II",
  link: "https://traderinteractive.com",
  blocks: [
    {
      type: "text",
      content:
        "I'm currently a Software Engineer II at [Trader Interactive](https://traderinteractive.com). I began here as a software engineer focused on full-stack development, leading the first node.js project for the department as apart of updated company standards. This leadership opportunity helped show me which areas I could improve, but I've grown into the role and I've gained experience with AWS services, API development, and system design. I'm currently the lead of the Software Engineering Pod and the Platform Engineering Team.",
    },
  ],
};
export const projectsProps: LandingModuleType = {
  title: "My Projects",
  link: "/projects",
  linkText: "See All Projects",
};
