import type { LinkIconType } from "../../types";

export default function ProjectIcon<T>({ icon, link, label }: LinkIconType) {
	return (
		<a href={link} target="_blank" rel="noopener" aria-label={label}>
			{icon}
		</a>
	);
}
