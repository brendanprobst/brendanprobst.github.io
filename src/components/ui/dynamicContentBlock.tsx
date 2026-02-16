import type { JSX } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import type { DynamicContentBlockType } from "../../types";

const markdownComponents = {
	a: (props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a {...props} target="_blank" rel="noopener noreferrer" />
	),
};

export default function DynamicContentBlock({ type, content, imgAlt }: DynamicContentBlockType) {
	if (type === "text") {
		return (
			<SolidMarkdown class="block" components={markdownComponents} children={content} />
		);
	} else if (type === "image") {
		return <img src={content} alt={imgAlt} />;
	} else if (type === "title") {
		return <h1>{content}</h1>;
	} else if (type === "subtitle") {
		return <h3>{content}</h3>;
	} else {
		return <>{content}</>;
	}
}
