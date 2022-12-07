import { createSignal, onCleanup } from "solid-js";
import { ProjectCard, projects } from "./projectsData";
import { AiOutlineLeft, AiOutlineRight } from "solid-icons/ai";
import { FaRegularFileCode } from "solid-icons/fa";
export default function ProjectsPreview() {
	// const [duration, setDuration] = createSignal(3000);
	// const [focus, setFocus] = createSignal(0);
	// const timer = setInterval(() => setFocus(handleNext()), duration());
	// onCleanup(() => clearInterval(timer));
	// const projectLength = projects?.length - 1;
	// function handleNext() {
	// 	if (focus() === projectLength) {
	// 		return 0;
	// 	} else {
	// 		return focus() + 1;
	// 	}
	// }
	// function handlePrev() {
	// 	if (focus() === 0) {
	// 		return projectLength;
	// 	} else {
	// 		return focus() - 1;
	// 	}
	// }
	// function handleClass(idx: number) {
	// 	let baseClass = "project-card";

	// 	if (idx === focus()) {
	// 		return baseClass + " focused";
	// 	}
	// 	if (idx === focus() - 1) {
	// 		return baseClass + " focused-prev";
	// 	}
	// 	if (idx === focus() + 1) {
	// 		return baseClass + " focused-next";
	// 	}
	// 	if (idx === 0 && focus() === projectLength) {
	// 		return baseClass + " focused-next";
	// 	}
	// 	if (focus() === 0 && idx === projectLength) {
	// 		return baseClass + " focused-prev";
	// 	}

	// 	return baseClass + " not-focused";
	// }

	return (
		<>
			{/* <div id="projects-controls">
				<button onClick={() => setFocus(handlePrev())} type="button">
					<p class="hidden">previous</p>
					<AiOutlineLeft />
				</button>
				<h2>
					{focus() + 1} | {projectLength + 1}
				</h2>
				<button onClick={() => setFocus(handleNext())} type="button">
					<p class="hidden">next</p>
					<AiOutlineRight />
				</button>
			</div> */}
			<div class="project-preview">
				{projects.map((item: ProjectCard, idx: number) => {
					return (
						<a class="project-card" href={`/projects#${item.class}`}>
							<h3>{item.title}</h3>
							<img src={item.logo} alt={`${item.title} logo`} />
							{/* <div class="tag-container">
								{item.tags.map((item) => {
									return <div class="tag">{item}</div>;
								})}
							</div> */}
						</a>
					);
				})}
				<a href="/projects" class="project-card">
					<h3>See All Projects</h3>
					<FaRegularFileCode font-size="8rem" class="img" />
				</a>
			</div>
		</>
	);
}
