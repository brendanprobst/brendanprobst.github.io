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
        "My software career began while I was in college, where I was introduced to an organization on campus called [Launchpad](https://stevenslaunchpad.org/). Through Launchpad, I was able to direct my newfound passion for software engineering towards solving real-world problems.",
    },
    {
      type: "text",
      content:
        "Through Launchpad and the people that I would meet, I worked on [Quae](#quae-module), [Cabal Labs](#cabal-module), and [SmileNow](#smilenow-module).",
    },
    {
      type: "text",
      content:
        "These days I'm focused on growing my skills as a software engineer at [Trader Interactive](#trader-interactive-module), where I lead the Platform & Tooling Team.",
    },
    {
      type: "text",
      content:
        "In my spare time I love cycling 🚲, playing pool 🎱, cooking 🧑‍🍳, motor sports 🏎️, and hanging out with my two orange cats 🐈🐈",
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
        "I met my co-founder, [Sam](https://samschmitt.net), through Launchpad, and we worked together to create Quae. Our mission was to address a major issue: people don't feel heard by their community leaders. We sought to change that by creating a dedicated online forum for verified referendum voting.",
    },
    {
      type: "text",
      content:
        "We successfully launched our app to Stevens' campus and within the city of Hoboken. We knew we were on the right track when the Student Government Association adopted it as their official tool for student outreach, and posts on Quae introduced changes to campus policies. Hoboken City Council took interest in the idea as well and discussed Quae's impact during city council meetings.",
    },
    {
      type: 'text',
      content: "My experience building, launching, and marketing Quae was some of the most valuable experience I gained at Stevens. It taught me more about software development and what it means to be a true engineer than any class I could've taken."
    }
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
        "During my time at Stevens, my fellow engineering classmates and I took interest in the rising popularity of cryptocurrency and decided to start a blockchain study group chat called, \"The Crypto Cabal\". Soon after, we began competing in ETH Global Hackathons using the \"Cabal\" moniker. We eventually put a formal name to our hackathon participation and founded Cabal Labs: a technology research firm.",
    },
    {
      type: "text",
      content:
        "It started with just 4 of us, but we grew a community 30+ engineers, 9 of which competed with us at hackathons. As an organization, we attended 6 ETH Global Hackathon's and won over 16 prize bounties. These winnings were re-invested to help us continue to build our community and were used for reimbursing travel expenses for hackers.",
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
        "Smile Now was born from the need of an easier way to collect photos my friends took at my birthday party. Instead of having them send hundreds of pictures to a crowded group chat, my co-founder [Sam](https://samschmitt.net) and I thought of building a stand alone app. We started with an MVP and had Sam's family try it during Thanksgiving (and they loved it). Soon after we decided to build our \"Smile Now\" and collaborated with [Cris](https://sosaofficial.com) for marketing.",
    },
    {
      type: "text",
      content:
        "We wanted to get into a beta phase as quickly as possible — so we gathered in my kitchen and built a 99.9% shippable app in 24 hours (this was pre-ChatGPT mind you). By the end of the week it passed review and lived on the App Store.",
    },
    {
      type: "text",
      content:
        "The concept is simple, if you want a fun way to take and gather pictures at an event you're attending, start by making a \"Smile Now Party\". The whole process of creating and joining a party a total of just 3 clicks. Once a party has been activated, random attendees will be notified to take a candid photo at different times throughout the night. By the end of the event, everyone will have taken or posed for a photo, and can easily view them in one spot.",
    },
    {
      type: "text",
      content:
        "Our team ran a beta test during the closing weeks of my senior year at university, and we reached 50+ users before we decided to pause work. This project was such a fun experience and hope to revisit this idea in the future.",
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
        "At my first software engineer position I gained skills in developing a new tech stack (.NET) and worked with Azure cloud services for the first time. I also experienced the joys of building on top of a legacy system for the first time.",
    },
    {
      type: "text",
      content:
        'Within 3 months there, I used my skill sets to lead development on 2 "long overdue" projects. I rebuilt the website for selling end-of-life trailers using Next.js isolated from the legacy stack. This marked the first step in a new direction for the team. The new site added functionalities to improve customer experience and replaced an annual 2-month-long manual-data-entry process for populating the website with an automated process.',
    },
    {
      type: "text",
      content:
        "The second big project I worked on was revamping the look and feel of the Customer Portal. I worked with a data scientist and product manager to redesign the key flows, update the styles, and integrate Power BI for dynamic data visualizations.",
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
