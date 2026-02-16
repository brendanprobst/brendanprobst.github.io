import { createSignal } from "solid-js";
import {
	FaBrandsGithub,
	FaBrandsAppStore,
	FaBrandsYoutube,
} from "solid-icons/fa";
import { FiExternalLink, FiGithub } from "solid-icons/fi";
import { AiFillInfoCircle } from "solid-icons/ai";
import { CgWebsite } from "solid-icons/cg";
import type { ProjectCardType, ProjectType } from "../../types";


export function ClearFilter() {}

export const projects: ProjectCardType[] = [
	{
		title: "Pool Cost Calculator",
		type: "Web App",
		class: "pool-cost-calculator",
		logo: "/img/logos/pool_cost_calculator.png",
		date: ["January 2026"],
		tags: ["React", "S3", "CloudFront", "Github Actions"],
		link: "https://apa-cost-splitter.brendanprobst.com",
		subText: "A tool to streamline cost splitting for my billiards league",
		icons: [
			{
				icon: <FiExternalLink />,
				link: 'https://apa-cost-splitter.brendanprobst.com',
				label: 'Pool Cost Calculator App'
			},
			{
				icon: <FiGithub />,
				link: 'https://github.com/brendanprobst/apa-cost-splitter/tree/main',
				label: "Pool Cost Calculator Github"
			}
		],
		blocks: [
			{
				type: "text",
				content: "I'm on a billiards team in Brooklyn (APA 8-ball), every week we needed to coordinate splitting the league dues, table fees, and any extra shared costs. I realized that it would be a hassle to do the math every week to calculate the amount everyone owed.I made a Google Sheet calculator, used it once, and realized it sucked. So I built a proper app (using vanilla react, tailwind, and a cookie). "
			},
			{
				type: "text",
				content: "Each week the person handling the expenses will compete a short form. The output is a view breaking down the expenses and two copyable text blurs (one for the groupchat and one for the memo of the *League Fees Zelle*). After positive feedback on the MVP, I updated the styles, added support for people to save rosters for multiple teams, and added a feature to consolidate payments to eliminate payments."
			}
		],
		visible: true
	}
	,{
		title: 'Fuakata Salsa',
		type: "Landing Page",
		class: "fuakata",
		logo: "/img/logos/fuakata_logo.png",
		date: ["January 2026"],
		tags: ["React"],
		link: "https://salsanyc.com",
		subText: "A landing page for a salsa school",
		icons: [
			{
				icon: <FiExternalLink />,
				link: 'https://fuakata.org/en',
				label: 'Pool Cost Calculator App'
			},
		],
		blocks: [
			{
				type: "text",
				content: "Since 2023 I've been taking salsa lessons. I started salsa dancing because of my friend, and co-founder of Cabal Labs, [Marco](https://www.marcosalazar.xyz/) (I ended up meeting my girlfriend through salsa, so I owe Marco one).I noticed the website for the school needed some updating. I approached the salsa teacher with a mockup of a simple 1-page landing page, he loved it and asked if I could build something bigger"
			},
			{
				type: "text",
				content: "Luckily, I had the aforementioned Marco, he was happy to help with the project. Together we built a multi-page, feature-rich landing page. The new site gave info about the history of the school, the teachers, and the rich history of cuban salsa. We also built features for the instructor to update the class schedule, handle payments, and accept private lesson appointments."
			}
		],
		visible: true
	},
	{
		title: "Cabal Sorel",
		type: "Other",
		link: "https://ethglobal.com/showcase/cabal-sorel-uwvfa",
		class: "cabal-sorel",
		logo: "/img/logos/cabal_sorel.png",
		date: ["October 2023"],
		subText:
			"A recommendation engine for decentralized apps - get a better timeline through a chrome extension",
		tags: ["Chrome Extension", "Hackathon Project"],
		icons: [
			{
				icon: <FiExternalLink />,
				link: "https://ethglobal.com/showcase/cabal-sorel-uwvfa",
				label: "ETH Online 2023 Submission",
			},
			{
				icon: <FiGithub />,
				link: "https://github.com/Cabal-Labs/Ethonline2023",
				label: "Cabal Sorel Github",
			},
		],
		blocks: [
			{
				type: "text",
				content: `Cabal Sorel was the project I worked on at [ETH Online 2023](https://ethglobal.com/events/ethonline2023). We built a chrome extension that allows users to get personalized recommendations for decentralized apps. By using our extension, people can pull in data their wallet has stored from interactions on others sites, and optionally upload their twitter archive ([How?](https://www.theverge.com/23453703/twitter-archive-download-how-to-tweets)). Once setup, you would see a new button appear on our enabled sites (just hey.xyz for now). Click it and you'll see a new home feed with more personal recommendations.`,
			},
			{
				type: "text",
				content: `We used the Social Relation (SoRel) API from the [Mask Network](https://mask.io/), the [Next.ID SK](https://next.id/), and [Tableland](https://tableland.xyz/) to store persistent data. We won the *Mask Network — Most Innovative Social App* and the *Tableland Pool Prize*`,
			},
		],
		visible: true
	},
	{
		title: "Cabal Protocol",
		type: "Hackathon Project",
		class: "cabal-protocol",
		logo: "/img/logos/cabalprotocol.png",
		subText: "Subsidized Hackathon Trips - Decentralized",
		link: "https://ethglobal.com/showcase/cabal-protocol-pa734",
		date: ["September 2023", "Present"],
		tags: ["Next.js", "Web3", "Unlock Protocol", "Wallet Connect"],
		icons: [
			{
				icon: <FiExternalLink />,
				link: "https://ethglobal.com/showcase/cabal-protocol-pa734",
				label: "ETH Global Submission",
			},
			{
				icon: <FiGithub />,
				link: "https://github.com/Cabal-Labs/CabalProtocol",
				label: "Cabal Protocol Github",
			},
		],
		blocks: [
			{
				type: "text",
				content: `Cabal protocol was the project I worked on at [ETH NYC 2023](https://ethglobal.com/events/newyork2023). This was a project that I had dreamed of working on for over a year, and at ETH NYC '23 I was finally time to create an MVP. Over the weekend we were able to set up a treasury using the [Safe Wallet](), mock an application process and then lock reimbursement functionality to accepted hackers using [Unlock token gates]().`,
			},
			{
				type: "text",
				content: `While we did not win any prizes this hackathon, we did get a lot of great feedback and we're excited to continue working on this project. We plan on launching a beta version of the protocol in the next few months. `,
			},
		],
		visible: false
	},
	{
		title: "DeEHR Market",
		type: "Web App",
		class: "deehr-market",
		link: "https://ethglobal.com/showcase/deehr-market-mvpzu",
		tags: [
			"Next.js",
			"Web3",
			"Smart Contract Development",
			"Solidity",
			"Ethereum",
			"Hardhat",
		],
		logo: "/img/logos/deehr_market.png",
		date: ["July 2023"],
		icons: [
			{
				icon: <FiExternalLink />,
				link: "https://ethglobal.com/showcase/deehr-market-mvpzu",
				label: "ETH GLobal Submission",
			},
			{
				icon: <FiGithub />,
				link: "https://github.com/Cabal-Labs/deehr-market-client",
				label: "DeEHR Market Github",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"DeEHR market was the project I worked on at [ETH Paris 2023](https://ethglobal.com/events/paris2023). It's purpose was to demonstrate 1 use case of decentralized Electronic Health Records (EHR's). This focus of DeEHR Market was to connect patients (who own their data) and researchers (who want to buy medical data),allow for patient data to be trained on anonymously using [bacalhau](https://www.bacalhau.org/) and homomorphic encryption, and compensate patients with the fees charged to researchers. ",
			},
			{
				type: "text",
				content: `We won the *Filecoin — Best use of FVM & Bacalhau* prize. This project is special to me because the trip to attend ETH Paris was the first funded Cabal Hackathon Trip. It proved the concept that we had been working on since ETH Bogotá. 
				`,
			},
		],
		visible: true
	},
	{
		title: "Smile Now Mobile App",
		type: "Mobile App",
		class: "smile-now",
		subText: "An app that makes taking photos fun",
		link: "https://smilenow.app",
		tags: ["React Native", "Expo", "Mobile App"],
		logo: "/img/logos/smile_now.png",
		date: ["April 2023", "Present"],
		icons: [
			{
				icon: <FiExternalLink />,
				link: "https://smile.samschmitt.net",
				label: "Smile Now Landing Page",
			},
			{
				icon: <FaBrandsGithub />,
				link: "https://github.com/SmileNowDev/SmileNowApp/tree/main", //TODO: dead link
				label: "Smile Now App Github",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Smile Now was a React-Native app built with expo and homebrew minimalist style system. I built this add during a 24 hour self-imposed hackathon with [Sam](https://samschmitt.net) and [Cris](https://sosaofficial.com).",
			},
			{
				type: "text",
				content:
					"Smile Now solves the problem of going to parties, events, or just hanging out with friends and not having any photos to remember the moment. It does this by 1) making it stupid simple to create & join events quickly. 2) We notify people at random times to take a photo. 3) Share your photos with everyone in the party in a fun and unique way. With our MVP, we've accomplished 1 and 2 and we're excited to experiment with the sharing experience in the next few weeks.",
			},
		],	
		visible: true
	},
	{
		title: "zk.fund",
		type: "Web App",
		class: "zk-fund",
		subText: "A platform for anonymously donating to charities.",
		link: "https://zkfund.org",
		tags: [
			"Next.js",
			"Web3",
			"Smart Contract Development",
			"Solidity",
			"Ethereum",
			"Hardhat",
		],
		logo: "/img/logos/zkfundlogo.png",
		date: ["Sept 2021", "May 2023"],
		icons: [
			{
				icon: <FiExternalLink />,
				label: "zk.fund site",
				link: "https://zkfund.org",//TODO: dead link
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"zk.fund was built a platform that allows users to make safe, secure, and anonymous donations to verified charities. I focused on the design and UX of the interface and developed solidity smart contracts for processing transactions.  My team and I using Chai and Hardhat to test all actions related to processing transactions.",
			},
			{
				type: "text",
				content:
					"This project was a prompt for a bounty hosted by the Aztec Network, their goal with this project was to be used by people in countries that don't have freedom to express their views through charitable donations. The platform aimed to give them an avenue without fear of backlash or persecution.",
			},
		],	
		visible: false
	},
	{
		title: "My Portfolio Site",
		type: "Landing Page",
		class: "cabal-landing-page",
		subText: "A simple portfolio site",
		tags: ["Astro.js", "Solid.js", "SCSS", "Landing Page"],
		logo: "/white_logo.png",
		date: ["Oct 2022", "Present"],
		icons: [
			{
				icon: <FaBrandsGithub />,
				link: "https://github.com/brendanprobst/astroPortfolio",
				label: "The repo for this website",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"I built this site using Astro.js and Solid.js, I had heard some good things about the two technologies and wanted to try using them. I don't think the scope of this site has given me a proper understanding of their tradeoffs, but I can't complain so far.",
			},
		],
		visible: false
	},
	{
		title: "Cabal Labs Landing Page",
		type: "Landing Page",
		class: "cabal-landing-page",
		subText: "Liberation Through Technology",
		tags: ["HTML", "Vanilla JS", "SCSS", "Landing Page"],
		logo: "/img/logos/cabal_white.png",
		date: ["Oct 2022", "Present"],
		icons: [
			{
				icon: <FiExternalLink />,
				link: "https://caballabs.com",
				label: "Cabal Labs landing page",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Cabal Labs is an Web3 Research Lab I co-founded. I built this site using Framer, and it was the first time I had ever used a site-builder. I realized I should see how these tools compared to building a landing page with code. I can't say I loved the experience, but I can see it being a better effort-to-outcome solution for simple sites, but also how any custom integrations are 10x harder than they're worth. ",
			},
		],
		visible: false
	},
	{
		title: "Tap Contacts",
		type: "Mobile App",
		class: "tap-contacts",
		subText: "NFC Enabled Web3 Contacts",
		link: "https://ethglobal.com/showcase/tap-contacts-s3ds7",
		tags: [
			"React Native",
			"web3.js",
			"Ejected Expo",
			"NFC",
			"NPM Package Development",
		],
		logo: "/img/logos/tapme.png",
		date: ["Oct 2022"],
		icons: [
			{
				icon: <FaBrandsGithub />,
				link: "https://github.com/TAP-io/client",
				label: "Tap Contacts Github",
			},
			{
				icon: <FiExternalLink />,
				link: "https://ethglobal.com/showcase/tap-contacts-s3ds7",
				label: "Tap Contacts ETH Bogotá Submission",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Tap Contacts is a React Native project that I worked on during the ETH Bogotá 2022 Hackathon. It is a contacts book for blockchain wallets. The inspiration for this project was the hassle of sharing on-chain social profiles. What if you could have a contact book of people? We asked ourselves. The break-neck speed of a hackathon makes it difficult to guarantee you'll build exactly what you think you are. n the end, we ended up creating an MVP for what is especially \"Crypto Venmo\". What set our project apart was the way you were able to share contacts. I used an NFC library for React Native to enable transactions by tapping two phones together or a phone to a payment terminal. This made it possible to interact with crypto currency or other on-chain-assets without ever dealing with an address; just tap.",
			},
			{
				type: "text",
				content: 
					"This hackathon project received the most positive reaction from judges of all hackathon projects I have ever created. Picture me and my friends: running on no sleep, N + 1 litter the floor, and one of us is narrating what they're doing as as they code, to nobody, because the \"inside thoughts stopped working a while ago\". Nobody was paying attention to the time. With 40 minutes to go, I realized and starting working on the submission. The submission page crashed 3 times while was trying to submit, completely clearing my progress. I ended up getting it to submit 5 minutes after submission. We were disqualified from judging, a fun fact we learned after presenting to judges from all the bounties we qualifed for. I can now look back on this and laugh, but in the moment we were crushed.  My team implemented a new rule - 60 minutes until the deadline, stop mid-line-of-code and start working on the submission.",
			},
		],	
		visible: true
	},
	{
		title: "Cabal Protocol",
		type: "Web App",
		class: "cabal-protocol",
		subText: "Own Your Data",
		link: "https://ethglobal.com/showcase/cabal-jgj8g",
		tags: ["Next.js", "web3.js", "Wallet Connect"],
		logo: "/img/logos/oath.png",
		date: ["Jul 2022"],
		icons: [
			{
				icon: <FaBrandsGithub />,
				link: "https://github.com/marcusats/Cabal-ETHNYC",
				label: "Cabal Protocol's Github",
			},
			{
				icon: <FiExternalLink />,
				link: "https://ethglobal.com/showcase/tap-contacts-s3ds7",
				label: "Cabal Protocol's ETH NYC Submission",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"The Cabal Protocol is a project I worked on during the ETH NYC 2022 Hackathon. It is a protocol that allows users to grant Dapps (Decentralized Apps) access to personal information using access tokens that can be revoked at any time. I worked on the user interface and integration with the smart contract, which used Wallet Connect. ",
			}
		],		
		visible: false
	},
	{
		title: "Quae Web App",
		type: "Web App",
		class: "quae-web-app",
		subText: "Vote Every Day",
		link: "https://web.quae.app",
		tags: ["Next.js", "SCSS", "Responsive Web Page"],
		logo: "/img/logos/quae_logo.png",
		date: ["Jul 2021", "Apr 2023"],
		icons: [
			{
				icon: <AiFillInfoCircle />,
				link: "https://quae.app",
				label: "Quae website",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"The Quae web app accompanied the mobile app. The first version was built on using React. We were . But, with any long term project, and this being my first production front-end application, we reached a point where we decided to rebuilt it from the ground up. First, my team and I did a system design audit, restructured the architecture to lower operational costs while also improving performance. For the client application was redesigned to use Next.js,   to alleviate technical debt and simplify the overall structure of the app. ",
			},
			{
				type: "text",
				content:
					"The rebuild took a little over a week of working literally around the clock over winter break. I find that sometimes the biggest tasks are best done as quickly as possible. The effort paid dividends in the experience I gained with server-side rendering, improved performance and SEO, and it gave me a chance to fix some looming tech debt. My favorite component to build was the text editor for long-form posts.",
			},
		],
		visible: false
	},

	{
		title: "LeaveNow",
		type: "Mobile App",
		class: "leave-now",
		subText: "Be on time, every time",
		link: "https://leavenow.app",
		tags: ["React-Native", "Expo"],
		logo: "/img/logos/LN_logo.png",
		date: ["Jan 2022", "May 2022"],
		icons: [
			{
				icon: <CgWebsite />,
				link: "https://leavenow.app",
				label: "LeaveNow website",
			},
			{
				icon: <FaBrandsGithub />,
				link: "https://quae.app",
				label: "Quae website",
			},
		],
		blocks: [
			{
				type: "text",
				content: `LeaveNow aims to make meeting on time easy. This was an idea I thought of with my friend Sam when we were talking about how great it is when you happen to show up to a place you're meeting a friend at at exactly the same time. "Serendipitous" - we called it.`,
			},
			{
				type: "text",
				content: `Flash forward 2 months and my professor for my Engineering Design class tells the class that you can make up a project if you don't like any of the suggested projects. I enlisted the help of a few other friends and we make it happen. It was a fun project, but in the end we realized that it wasn't really a big enough problem for people to want to download an app for it. Maybe on a rainy day, I'll think about releasing it. `,
			},
		],		
		visible: false
	},
	{
		title: "PixlowChat",
		type: "Web App",
		class: "Pixlow-chat",
		subText: "Chat room with an 8-bit aesthetic",
		tags: ["React Native", "Tailwind", "Web Sockets"],
		logo: "/img/logos/pixlow.png",
		date: ["Mar 2021", "May 2021"],
		icons: [
			{
				icon: <FaBrandsGithub />,
				link: "https://github.com/Pixlow-Chat/pixlow-chat",
				label: "Pixlow Chat Github",
			},
			{
				icon: <FaBrandsYoutube />,
				link: "https://www.youtube.com/watch?v=HwSrTc4rA9A",
				label: "Pixlow Chat Demo Video",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Pixlow Chat was the culminating project of my Intro to Software Engineering Class. The project allowed users to create temporary chat rooms using websockets.  I worked on a team of 4, and took lead on the front end design and implementation. ",
			},
			{
				type: "text",
				content:
					"We used react with tailwind css. My main takeaway from this project was that I personally do not like working with tailwind. I had used it once before (the Quae landing page. Looking back, my dislike was exacerbated by not using Tailwind components. If I ever reconsider using Tailwind, I will absolutely learn how to implement components.",
			},
		],	
		visible: false
	},
	{
		title: "Quae Mobile App",
		type: "Mobile App",
		class: "quae-mobile-app",
		subText: "Vote Every Day",
		link: "app store link",
		tags: ["React Native", "Expo", "Mobile App"],
		logo: "/img/logos/quae_logo.png",
		date: ["Jan 2021", "Apr 2023"],
		icons: [
			{
				icon: <CgWebsite />,
				link: "https://quae.app",
				label: "Quae landing app",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"The Quae Mobile app was the first serious React-Native app that I worked on. In 1 month of working every day with my co-founder, we had a basic MVP that could connect connect a client to a server securely with JWT. At that time, that was a huge deal for us.",
			},
			{
				type: "text",
				content:
					"Over the next 3 years, the app has would go through many iterations. During that time, I learned a lot about mobile development. I learned about best practices for accessability and performance, designing user-flows, and accepting feedback on the app's \"evolving\" (that's putting it nicely) UI/UX and how to turn it into improvements.",
			},
		],
		visible: true
	},
	{
		title: "Quae Landing Page",
		type: "Landing Page",
		class: "quae-landing-page",
		subText: "Vote Every Day",
		tags: ["HTML", "SCSS", "Vanilla JS", "Landing Page", "SEO Optimized"],
		logo: "/img/logos/quae_logo.png",
		date: ["Sept 2020", "Apr 2023"],
		icons: [
			{
				icon: <CgWebsite />,
				link: "https://quae.app",
				label: "Quae landing app",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"This was the first webpage I ever published. Seeing it published was a special moment for me. I opted to build the site myself, instead of using a site building tool like wix is because I knew -- even thought it would take longer now, it would pay off eventually. ",
			},
			{
				type: "text",
				content:
					"The Quae landing page helped me hone my design skills. I also got to explore several options for web styling. Starting with inline styles for V0.1 when I didn't know any better, to experimenting with Tailwind.css, and finally ending up with SCSS.",
			},
		],
		visible: false
	},
];
export function filterByType(type: ProjectType) {
	setFilteringFor(type);
	let result: ProjectCardType[] = [];
	if (type === null) {
		setFilteredProjects(projects);
	}
	projects.forEach((item) => {
		if (item.type === type) {
			result.push(item);
		}
	});
	setFilteredProjects(result);
	// return result;
}
// export const filteredProjects: ProjectCard[] = filterByType(null);
export const [filteringFor, setFilteringFor] = createSignal();
export const [filteredProjects, setFilteredProjects] = createSignal(projects);


