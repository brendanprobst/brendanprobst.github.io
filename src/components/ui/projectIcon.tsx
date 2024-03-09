import type { JSXElement } from "solid-js";

export type IconType = {
	icon: JSXElement;
	link: string;
	label: string;
};

export default function ProjectIcon<T>({ icon, link, label }: IconType) {
	return (
		<a href={link} target="_blank" rel="noopener" aria-label={label}>
			{icon}
		</a>
	);
}
