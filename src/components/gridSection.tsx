type GridSectionType = {
	title?: string;
	headline?: string;
	subHeadline?: string;
	link?: string;
	linkText?: string;
	blocks?: string[];
	children?: any;
};
export default function GridSection({
	title = "",
	headline,
	subHeadline,
	link,
	linkText,
	blocks,
	children,
}: GridSectionType) {
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
				return <p>{item}</p>;
			})}
			{children}
		</div>
	);
}
