import type { ContentBlock } from "./ui";

export type HomePageSectionType = {
	title?: string;
	headline?: string;
	subHeadline?: string;
	link?: string;
	linkText?: string;
	blocks?: ContentBlock[];
	children?: any;
};