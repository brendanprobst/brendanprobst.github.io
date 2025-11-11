import type { IconWrapper } from "../components/ui/IconWrapper";
import type { ContentBlock } from "./ui";

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
	icons?: IconWrapper[];
	blocks?: ContentBlock[];
};


export type ProjectType =
	| "Web App"
	| "Mobile App"
	| "Landing Page"
	| "Hackathon Project"
	| "Other"
	| null;