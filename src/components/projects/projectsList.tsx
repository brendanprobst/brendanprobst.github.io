import { projects } from "./projectsData";
export default function ProjectsList({}) {
	return (
		<>
			{projects.map((item) => {
				return (
					<div class={`project-card ${item.title.toLowerCase()}`}>
						<h3>{item.title}</h3>
						<img src={item.logo} alt={`${item.title} logo`} />
						{item.tags.map((item) => {
							return (
								<div class="tag-container">
									<div class="tag">{item}</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</>
	);
}
