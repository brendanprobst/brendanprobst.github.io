import type { JSXElement } from "solid-js";
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
import { AiFillInfoCircle } from "solid-icons/ai";
import { CgWebsite } from "solid-icons/cg";
export type ProjectCard = {
	title: string;
	subText?: string;
	link?: string;
	tags: string[];
	logo: string;
	date: string[];
	description?: string;
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
export const projects: ProjectCard[] = [
	{
		title: "Cabal Labs Landing Page",
		subText: "Liberation Through Technology",
		tags: ["HTML", "Vanilla JS", "SCSS", "Landing Page"],
		logo: "/img/logos/caballabs.png",
		date: ["Oct 2022", "Present"],
		icons: [
			{
				icon: <CgWebsite />,
				link: "https://caballabs.com",
				label: "Cabal Labs landing page",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Consectetur irure voluptate exercitation eiusmod ipsum ad sint elit qui cupidatat aliqua. Anim et fugiat consectetur qui dolor culpa dolor ad dolore. Officia ad quis nulla officia in amet. Veniam excepteur aliqua cupidatat laborum.",
			},
		],
	},
	{
		title: "Tap Contacts",
		subText: "NFC Enabled Web3 Contacts",
		link: "https://ethglobal.com/showcase/tap-contacts-s3ds7",
		tags: ["React Native", "web3.js", "Ejected Expo", "NFC"],
		logo: "/img/logos/tapme.png",
		date: ["Oct 2022", "Present"],
		icons: [
			{
				icon: <FaBrandsGithub />,
				link: "https://tap contacts github",
				label: "Tap Contacts Github",
			},
			{
				icon: <FaSolidCircleInfo />,
				link: "https://ethglobal.com/showcase/tap-contacts-s3ds7",
				label: "Tap Contacts ETH Bogotá Submission",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Consectetur irure voluptate exercitation eiusmod ipsum ad sint elit qui cupidatat aliqua. Anim et fugiat consectetur qui dolor culpa dolor ad dolore. Officia ad quis nulla officia in amet. Veniam excepteur aliqua cupidatat laborum.",
			},
		],
	},
	{
		title: "Cabal Protocol",
		subText: "Own Your Data",
		link: "https://ethglobal.com/showcase/cabal-jgj8g",
		tags: ["Next.js", "web3.js", "Wallet Connect"],
		logo: "/img/logos/oath.png",
		date: ["Jul 2022"],
		icons: [
			{
				icon: null,
				link: "",
				label: "",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Consectetur irure voluptate exercitation eiusmod ipsum ad sint elit qui cupidatat aliqua. Anim et fugiat consectetur qui dolor culpa dolor ad dolore. Officia ad quis nulla officia in amet. Veniam excepteur aliqua cupidatat laborum.",
			},
		],
	},
	{
		title: "Quae Web App",
		subText: "Vote Every Day",
		link: "https://web.quae.app",
		tags: ["Next.js", "SCSS", "Responsive Web Page"],
		logo: "/img/logos/quae_logo.png",
		date: ["Jul 2021", "Present"],
		icons: [
			{
				icon: <CgWebsite />,
				link: "https://web.quae.app",
				label: "Quae web app",
			},
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
					"Consectetur irure voluptate exercitation eiusmod ipsum ad sint elit qui cupidatat aliqua. Anim et fugiat consectetur qui dolor culpa dolor ad dolore. Officia ad quis nulla officia in amet. Veniam excepteur aliqua cupidatat laborum.",
			},
		],
	},

	{
		title: "LeaveNow",
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
				content: `LeaveNow was a fun idea that I thought of while hanging out with a friend. We were talking about the pure joy you feel when you're planning to meet someone somewhere and arrive at exactly the same time. "Serendipitous" - we called it. We immediately planned out how you would develop an app to make that happen every time, laughed about it, and moved on. <br /><br /> Flash forward 2 months and my professor for my Engineering Design class tells the class that you can make up a project if you don't like any of the suggested projects. I enlisted the help of a few other friends and we make it happen. It was such a perfect situation, being able to build something so fun, and still get school credit for it. <br /><br /> There is still some work that needs to be done, but we're looking forward to releasing it to the public soon. `,
			},
		],
	},
	{
		title: "PixlowChat",
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
					"Pixlow Chat was the culminating project of my Intro to Software Engineering Class. The project allowed users to create temporary chat rooms using websockets.  I worked on a team of 4, and took lead on the front end design and implementation. We used react with tailwind css. My main takeaway from this project was that I personally do not like working with tailwind. I had used it once before (the Quae landing page. Looking back, my dislike was exacerbated by not using Tailwind components. If I ever reconsider using Tailwind, I will absolutely learn how to implement components.",
			},
			{ type: "image", content: "/img/app_screenshots/pixlow_home.png" },
			{ type: "image", content: "/img/app_screenshots/pixlow_chat.png" },
		],
	},
	{
		title: "Quae Mobile App",
		subText: "Vote Every Day",
		link: "app store link",
		tags: ["React Native", "Expo", "Mobile App"],
		logo: "/img/logos/quae_logo.png",
		date: ["Jan 2021", "Present"],
		icons: [
			{
				icon: <FaBrandsAppStore />,
				link: "https://apps.apple.com/us/app/quae/id1555653993",
				label: "Quae on the app store",
			},
			{
				icon: <FaBrandsGooglePlay />,
				link: "https://play.google.com/store/apps/details?id=com.quae.quaeapp&hl=en_US&gl=US",
				label: "quae on the play store",
			},
		],
		blocks: [
			{
				type: "text",
				content:
					"Consectetur irure voluptate exercitation eiusmod ipsum ad sint elit qui cupidatat aliqua. Anim et fugiat consectetur qui dolor culpa dolor ad dolore. Officia ad quis nulla officia in amet. Veniam excepteur aliqua cupidatat laborum.",
			},
		],
	},
	{
		title: "Quae Landing Page",
		subText: "Vote Every Day",
		tags: ["HTML", "SCSS", "Vanilla JS", "Landing Page", "SEO Optimized"],
		logo: "/img/logos/quae_logo.png",
		date: ["Sept 2020", "Present"],
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
					"Consectetur irure voluptate exercitation eiusmod ipsum ad sint elit qui cupidatat aliqua. Anim et fugiat consectetur qui dolor culpa dolor ad dolore. Officia ad quis nulla officia in amet. Veniam excepteur aliqua cupidatat laborum.",
			},
		],
	},
];

const projectsList = [
	{
		img: "/assets/img/quae_logo.png",
		title: "Quae",
		subText: "Co-Founder of Tech Startup",
		description: `<a href="https://quae.app">Quae</a> is the main focus of my life right now. I began working on Quae with <a href="https://samschmitt.net/">Sam Schmitt</a> during a Launchpad hackathon where we were tasked to focus on something that pained us. We bonded over the shared conviction that representation in countries around the world was failing. We are on a mission to solve this problem by empowering everyone to be heard. <br /> <br />
        We believe that democratic organizations should BE democratic - and that means everyone votes, everyone participates. Quae redefines representation by putting the people back in power and encouraging any citizen to draft a proposal, and every citizen to vote on key decisions. <br /> <br />
        
        Sam and I didn't know each when we began working together, but have grown to become good friends. Some of the lessons I've learned while working on this will stay with me for the rest of my life.`,
		tags: ["Entrepreneurship", "React", "React Native", "Material UI", "MERN"],
		link: "https://quae.app",
	},
	{
		img: "/assets/img/LN_logo.png",
		title: "LeaveNow",
		subText: "School Project Turned Side Hustle",
		description: `LeaveNow was a fun idea that I thought of while hanging out with a friend. We were talking about the pure joy you feel when you're planning to meet someone somewhere and arrive at exactly the same time. "Serendipitous" - we called it. We immediately planned out how you would develop an app to make that happen every time, laughed about it, and moved on. <br /><br />
            Flash forward 2 months and my professor for my Engineering Design class tells the class that you can make up a project if you don't like any of the suggested projects. I enlisted the help of a few other friends and we make it happen. It was such a perfect situation, being able to build something so fun, and still get school credit for it. <br /><br />
            There is still some work that needs to be done, but we're looking forward to releasing it to the public soon. 
            `,
		tags: ["React Native", "Heroku", "Firebase"],
		link: "https://leavenow.app",
	},
	{
		img: "/assets/img/pixlow.png",
		title: "PixlowChat",
		subText: "Chat with friends... with an 8-bit aesthetic",
		description:
			"Pixlow Chat was the culminating project of my Intro to Software Engineering Class. The project allowed users to create temporary chatrooms using websockets.  I worked on a team of 4, and took lead on the front end design and implementation. We used react with tailwind css. My main takeaway from this project was that I personally do not like working with tailwind. I had used it once before (the Quae landing page. Looking back, my dislike was exacerbated by not using Tailwind components. If I ever reconsider using Tailwind, I will absolutely learn how to implement components.",
		tags: ["React Native", "Tailwind", "Web Sockets"],
		link: "https://github.com/Pixlow-Chat/pixlow-chat",
	},
];
