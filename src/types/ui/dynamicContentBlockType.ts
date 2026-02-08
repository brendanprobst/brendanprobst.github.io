export type DynamicContentBlockType = {
	type: string | "text" | "image" | "title" | "subtitle";
	content: string;
	imgAlt?: string;
};