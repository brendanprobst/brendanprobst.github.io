import { JSX } from "astro/jsx-runtime";

export type IconType = {
	icon: JSX.Element;
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
