import Block from "../../ui/ContentBlock";
import type { HomePageSectionType } from "../../../types/Home.ts";

export default function HomePageSection({
	title = "",
	headline,
	subHeadline,
	link,
	linkText,
	blocks,
	children,
}: HomePageSectionType) {
	return (
		<div class={`grid-section ${title?.toLowerCase()}`}>
			<div class="header">
				<div>
					<h2>{title}</h2>
					{link ? (
						<a
							href={link}
							target={link.indexOf("https") !== -1 ? "_blank" : ""}
							rel="noopener">
							{linkText ? linkText : "Learn More"}
						</a>
					) : null}
				</div>
				<h3 class="headline">{headline}</h3>
				<h4 class="sub-headline">{subHeadline}</h4>
			</div>
			{blocks?.map((item) => {
				return <Block {...item} />;
			})}
			{children}
		</div>
	);
}
