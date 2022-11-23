import type { JSXElement } from "solid-js";

interface GridSection {
	title: string;
	headline?: string;
	subHeadline?: string;
	blocks?: string[];
	children?: JSXElement;
}
export default function GridSection({
	title,
	headline,
	subHeadline,
	blocks,
	children,
}: GridSection) {
	return (
		<div class={`grid-section ${title.toLowerCase()}`}>
			<div class="header">
				<h2>{title}</h2>
				<h3 class="headline">{headline}</h3>
				<h4 class="sub-headline">{subHeadline}</h4>
			</div>
			{blocks?.map((item) => {
				return <p>{item}</p>;
			})}
			{children}
		</div>
	);
}
