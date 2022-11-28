export type ProjectCard = {
	title: string;
	link: string;
	tags: string[];
	logo: string;
	date: string[];
	description?: string;
};
export const projects: ProjectCard[] = [
	{
		title: "Tap Contacts",
		link: "https://web.quae.app", //todo
		tags: ["React Native", "web3.js", "Ejected Expo", "NFC"],
		logo: "/public/img/logos/tapme.png",
		date: ["Oct 2022", "Present"],
	},
	{
		title: "Cabal Protocol",
		link: "https://web.quae.app", //todo
		tags: ["Next.js", "web3.js", "Wallet Connect"],
		logo: "/public/img/logos/oath.png",
		date: ["Jul 2022"],
	},
	{
		title: "Quae Web App",
		link: "https://web.quae.app",
		tags: ["Next.js", "SCSS", "Responsive Web Page"],
		logo: "/public/img/logos/quae_logo.png",
		date: ["Jul 2021", "Present"],
	},
	{
		title: "Quae Mobile App",
		link: "appstore link",
		tags: ["React Native", "Expo", "Mobile App"],
		logo: "/public/img/logos/quae_logo.png",
		date: ["Jan 2021", "Present"],
	},
	{
		title: "LeaveNow",
		link: "https://leavenow.app",
		tags: ["React-Native", "Expo"],
		logo: "/public/img/logos/LN_logo.png",
		date: ["Jan 2022", "May 2022"],
	},
	{
		title: "PixlowChat",
		description:
			"Pixlow Chat was the culminating project of my Intro to Software Engineering Class. The project allowed users to create temporary chatrooms using websockets.  I worked on a team of 4, and took lead on the front end design and implementation. We used react with tailwind css. My main takeaway from this project was that I personally do not like working with tailwind. I had used it once before (the Quae landing page. Looking back, my dislike was exacerbated by not using Tailwind components. If I ever reconsider using Tailwind, I will absolutely learn how to implement components.",
		tags: ["React Native", "Tailwind", "Web Sockets"],
		logo: "/public/img/logos/pixlow.png",
		link: "https://github.com/Pixlow-Chat/pixlow-chat",
		date: ["Mar 2021", "May 2021"],
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
		description: `LeaveNow was a fun idea that I thought of while hanging out with a <a href="https://https://samschmitt.net/">friend</a>. We were talking about the pure joy you feel when you're planning to meet someone somewhere and arrive at exactly the same time. "Serendipitous" - we called it. We immediately planned out how you would develop an app to make that happen every time, laughed about it, and moved on. <br /><br />
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
