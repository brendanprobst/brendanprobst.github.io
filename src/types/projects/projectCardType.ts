import type { ProjectType } from "./projectType";
import type { DynamicContentBlockType, LinkIconType } from "../ui";

export type ProjectCardType = {
	title: string;
	class: string;
	subText?: string;
	link?: string;
	tags: string[];
	logo: string;
	date: string[];
	description?: string;
	type: ProjectType;
	icons?: LinkIconType[];
	blocks?: DynamicContentBlockType[];
	visible: boolean;
};