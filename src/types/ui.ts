import type { JSX } from "astro/jsx-runtime";

export type ContentBlock = {
	type: string | "text" | "image" | "title" | "subtitle";
	content: string;
	imgAlt?: string;
};
export type IconType = {
	icon: JSX.Element;
	link: string;
	label: string;
};