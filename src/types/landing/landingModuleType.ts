import type { DynamicContentBlockType } from "../ui";

export type LandingModuleType = {
	title?: string;
	headline?: string;
	subHeadline?: string;
	link?: string;
	linkText?: string;
	blocks?: DynamicContentBlockType[];
	children?: any;
};