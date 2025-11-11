import type { JSX } from "astro/jsx-runtime";

export type IconWrapper = {
	icon: JSX.Element;
	link: string;
	label: string;
};

export default function IconWrapper<T>({ icon, link, label }: IconWrapper) {
	return (
		<a href={link} target="_blank" rel="noopener" aria-label={label}>
			{icon}
		</a>
	);
}
