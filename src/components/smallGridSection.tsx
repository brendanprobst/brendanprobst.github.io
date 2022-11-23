interface GridSection {
	title: string;
	headline?: string;
	subHeadline?: string;
}
export default function GridSection({
	title,
	headline,
	subHeadline,
}: GridSection) {
	return (
		<div class="grid-section">
			<div class="header">
				<h2>{title}</h2>
				{headline ? <h4>{headline}</h4> : null}
				{subHeadline ? <h6>{subHeadline}</h6> : null}
			</div>
		</div>
	);
}
