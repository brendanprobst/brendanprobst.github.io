import { createSignal, onCleanup } from "solid-js";
import { ProjectCard, projects } from "./projectsData";
import { AiOutlineLeft, AiOutlineRight } from "solid-icons/ai";
import { FaRegularFileCode } from "solid-icons/fa";
export default function ProjectsPreview() {
	const [duration, setDuration] = createSignal(3000);
	const [focus, setFocus] = createSignal(0);
	const timer = setInterval(() => setFocus(handleNext()), duration());
	onCleanup(() => clearInterval(timer));
	const projectLength = projects?.length - 1;
	function handleNext() {
		if (focus() === projectLength) {
			return 0;
		} else {
			return focus() + 1;
		}
	}
	function handlePrev() {
		if (focus() === 0) {
			return projectLength;
		} else {
			return focus() - 1;
		}
	}
	function handleClass(idx: number) {
		let baseClass = "";

		if (idx === focus()) {
			return baseClass + " focused";
		}
		// else {

		// }
		// if (idx === focus() - 1) {
		// 	return baseClass + " focused-prev";
		// }
		// if (idx === focus() + 1) {
		// 	return baseClass + " focused-next";
		// }
		// if (idx === 0 && focus() === projectLength) {
		// 	return baseClass + " focused-next";
		// }
		// if (focus() === 0 && idx === projectLength) {
		// 	return baseClass + " focused-prev";
		// }

		return baseClass + " not-focused";
	}

	return (
		<>
			<div id="projects-controls">
				<button
					class="prev"
					onClick={() => setFocus(handlePrev())}
					type="button">
					<p class="hidden">previous</p>
					<AiOutlineLeft />
				</button>

				<button
					class="next"
					onClick={() => setFocus(handleNext())}
					type="button">
					<p class="hidden">next</p>
					<AiOutlineRight />
				</button>
			</div>
			<div class="project-preview">
				{projects.map((item: ProjectCard, idx: number) => {
					return (
						<a
							class={`project-wrapper ${handleClass(idx)}`}
							href={`/projects#${item.class}`}>
							<p class="hidden">{item.title}</p>
							<div class={`project-card ${handleClass(idx)}`}>
								<h3>{item.title}</h3>
								<img src={item.logo} alt={`${item.title} logo`} />
								<p>
									{item.date[0]} {item.date[1] ? `- ${item.date[1]}` : ""}
								</p>
								<div class="tag-container">
									{item.tags.map((item) => {
										return <div class="tag">{item}</div>;
									})}
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</>
	);
}
