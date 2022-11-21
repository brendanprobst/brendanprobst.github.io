interface GridSection {
	title: string;
}
export default function GridSection({ title }: GridSection) {
	return (
		<div class="grid-section">
			<div class="header">
				<h2>{title}</h2>
			</div>
		</div>
	);
}
