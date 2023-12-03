import { createSignal, JSXElement } from "solid-js";
import {
	FaBrandsGithub,
	FaSolidCircleInfo,
	FaBrandsInstagram,
	FaBrandsTwitter,
	FaBrandsMedium,
	FaBrandsLinkedin,
	FaBrandsAppStore,
	FaBrandsGooglePlay,
	FaBrandsYoutube,
} from "solid-icons/fa";
import { FiExternalLink, FiGithub } from "solid-icons/fi";
import { AiFillInfoCircle } from "solid-icons/ai";
import { CgWebsite } from "solid-icons/cg";
export type ProjectCard = {
	title: string;
	class: string;
	subText?: string;
	link?: string;
	tags: string[];
	logo: string;
	date: string[];
	description?: string;
	type: ProjectType;
	icons?: IconType[];
	blocks?: BlockType[];
};
export type IconType = {
	icon: JSXElement;
	link: string;
	label: string;
};
export type BlockType = {
	type: string | "text" | "image";
	content: string;
	imgAlt?: string;
};
export type ProjectType =
	| "Web App"
	| "Mobile App"
	| "Landing Page"
	| "Hackathon Project"
	| null;
export function ClearFilter() {}

export const projects: ProjectCard[] = [
	{
		title: "Cabal Sorel",
		type: "Hackathon Project",
		link: "https://ethglobal.com/showcase/cabal-sorel-uwvfa",
		class: "cabal-sorel",
		logo: "/img/logos/cabal_sorel.png",
		date: ["October 2023"],
		subText:
			"A reccomendation engine for decentralized apps - delived through a chrome extension",
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
	},
	{
		title: "Cabal Protocol",
		type: "Hackathon Project",
		class: "cabal-protocol",
		logo: "/img/logos/cabal_protocol.png",
		subText: "Subsudized Hackathon Trips - Decentralized",
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
					"DeEHR market was the project I worked on at [ETH Paris 2023](https://ethglobal.com/events/paris2023). It's purpose was to demonstrate 1 use case of decentralized Electronic Health Records (EHR's). This focus of DeEHR Market was to connect patients (who own their data) and researchers (who want to buy medical data),allow for patient data to be trained on anonymously using [bacalau](https://www.bacalhau.org/) and homomorphic encryption, and compensate patients with the fees charged to researchers. ",
			},
			{
				type: "text",
				content: `We won the *Filecoin — Best use of FVM & Bacalhau* prize. This project is special to me because the trip to attend ETH Paris was the first funded Cabal Hackathon Trip. It proved the concept that we had been working on since ETH Bogotá. 
				`,
			},
		],
	},
	{
		title: "Smile Now",
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
				icon: <FaBrandsAppStore />,
				link: "https://apps.apple.com/app/id6449005895",
				label: "Quae on the app store",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Smile Now is a mobile app that I'm working on with my friend Sam. We have built many apps together and believed we could finish an MVP of smile now in 1 weekend. We hosted a live stream to showcase the work that goes into building an app - but mostly to be able to generate footage for tik toks 🙈 ",
			},
			{
				type: "text",
				content:
					"Smile Now solves the problem of going to parties, events, or just hanging out with friends and not having any photos to remember the moment. It does this by 1) making it stupid simple to create & join events quickly. 2) We notify people at random times to take a photo. 3) Share your photos with everyone in the party in a fun and unique way. With our MVP, we've accomplished 1 and 2 and we're excited to experiment with the sharing experience in the next few weeks.",
			},
		],
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
				link: "https://zkfund.org",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"zk.fund is a Senior Design Project that I contributed to as a front-end developer and smart contract developer. It is a platform that allows users to make safe, secure, and anonymous donations to verified charities, ensuring that people can support the causes they believe in without fear of backlash or persecution.",
			},
			{
				type: "text",
				content:
					"Throughout the project, we built a Minimum Viable Product (MVP) and focused on addressing the challenges of verifying legitimate charities to prevent misuse of the platform. After graduation, we plan to collaborate with Cabal Labs to open source the project, expanding the validator network and growing the list of charities.",
			},
		],
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
					"I built this site using Astro.js and Solid.js to dip my toes into some new web technologies I had never used before. It was a fun process, I got to make my site easier to maintain, and I overcame some hesitation that we all inevitably feel when we try new things.",
			},
			{
				type: "text",
				content:
					"In the next dev sprint for my portfolio site, I want to continue to expand my horizons. I've been interested in Three.js and WebGL for a long time. I want to add 3D graphics here. I think it will take my site to the next level.",
			},
		],
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
					"Cabal Labs is an open source Web3 Research Lab. The Cabal's mission is to liberate people from outdated system by supporting and maintaining a portfolio of companies. I built this site using HTML, vanilla javascript, and SCSS. ",
			},
			{
				type: "text",
				content:
					"In the next few months, I'll be making consistent updates to this site as Cabal Labs grows. I also want to convert it to Astro.js to improve the maintenance and performance. ",
			},
		],
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
					"Tap Contacts is a React Native project that I worked on during the ETH Bogotá 2022 Hackathon. It is a contacts book for blockchain wallets. It also uses ejected Expo and a NFC library to facilitate transactions by tapping two phones together. This makes it possible to interact with crypto currency without ever seeing an address.  ",
			},
			{
				type: "text",
				content:
					"We got lots of great feedback while we were in Bogotá. Following the hackathon, we talked about developing a SDK. I got started with React and React Native npm libraries, but the semester and work related to Quae took precedence. Over winter break we plan on finishing and releasing the @tapcontacts/tools library as a version 1. If we get a good response, I'll finish the UI npm packages.",
			},
		],
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
					"The Cabal Protocol is a project I worked on during the ETH NYC 2022 Hackathon. It is a protocol that allows users to grant Dapps access to personal information using access tokens that can be revoked at any time. I worked on the user interface and integration with the smart contract. ",
			},
			{
				type: "text",
				content:
					"Work did not continue after the ETH NYC hackathon, but I'm happy to share that my friend and co-founder, Sam Schmitt is continuing to work on this as part of his Senior Design Project. ",
			},
		],
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
					"The Quae web app is currently on version 2. The first version was built on using React, Material UI, and SCSS. But, with any long term project, we reached a point where we decided to rebuilt it from the ground up to alleviate technical debt and simplify the overall structure of the app. ",
			},
			{
				type: "text",
				content:
					"The current version of the Quae web app uses Next.js and Chakra.ui. The rebuilt took a little over a week, but has paid dividends in the amount of times it has saved our team, and the value that we can provide to our users.",
			},
		],
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
					"The Quae Mobile app was the first serious React-Native app that I worked on. In 1 month of working every day with my co-founder, we had a basic MVP that could connect to a database and server.",
			},
			{
				type: "text",
				content:
					"Over the past 2 years, the app has gone through many iterations. During this time, I've learned a lot about mobile development, creating sleek UI's, and designing an amazing user experience.  ",
			},
		],
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
	},
];
export function filterByType(type: ProjectType) {
	setFilteringFor(type);
	console.log();
	let result: ProjectCard[] = [];
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

function logData() {
	console.log("blah");
}
const logData2 = () => {
	console.log("blah");
};
