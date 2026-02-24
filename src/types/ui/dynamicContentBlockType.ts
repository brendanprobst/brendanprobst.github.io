export type DynamicContentBlockType = {
	id?: string,
	type: string | "text" | "image" | "title" | "subtitle";
	content: string;
	imgAlt?: string;
};