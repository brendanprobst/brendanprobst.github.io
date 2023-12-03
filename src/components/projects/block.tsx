import { SolidMarkdown } from "solid-markdown";
import type { BlockType } from "./projectsData";

export default function Block({ type, content, imgAlt }: BlockType) {
	if (type === "text") {
		return <SolidMarkdown class="block" children={content} />;
	} else if (type === "image") {
		return <img src={content} alt={imgAlt} />;
	} else {
		return <></>;
	}
}
