import { createSignal, onCleanup } from "solid-js";
import { ProjectCard, projects } from "./projectsData";

export default function ProjectsPreview({}) {
	const projectLength = projects?.length - 1;
	function handleChange() {
		if (focus() === projectLength) {
			return 0;
		} else {
			return focus() + 1;
		}
	}
	function handleClass(idx: number) {
		let baseClass = "project-card";

		if (idx === focus()) {
			return baseClass + " focused";
		}
		if (idx === focus() - 1) {
			return baseClass + " focused-prev";
		}
		if (idx === focus() + 1) {
			return baseClass + " focused-next";
		}
		if (idx === 0 && focus() === projectLength) {
			return baseClass + " focused-next";
		}
		if (focus() === 0 && idx === projectLength) {
			return baseClass + " focused-prev";
		}

		return baseClass + " not-focused";
	}

	const [focus, setFocus] = createSignal(0),
		timer = setInterval(() => setFocus(handleChange()), 5000);
	onCleanup(() => clearInterval(timer));
	return (
		<>
			<div>
				<h2>
					{focus()} | {projectLength}
				</h2>
			</div>
			<div class="project-preview">
				{projects.map((item: ProjectCard, idx: number) => {
					return (
						<a
							class={handleClass(idx)}
							href={`/projects#${item.title.toLowerCase()}`}>
							<h3>{item.title}</h3>
							<img src={item.logo} alt={`${item.title} logo`} />
							<div class="tag-container">
								{item.tags.map((item) => {
									return <div class="tag">{item}</div>;
								})}
							</div>
						</a>
					);
				})}
			</div>
		</>
	);
}
