import type { BlockType } from "./projectsData";

export default function Block({ type, content, imgAlt }: BlockType) {
	if (type === "text") {
		return <p>{content}</p>;
	} else if (type === "image") {
		return <img src={content} alt={imgAlt} />;
	} else {
		return <></>;
	}
}
