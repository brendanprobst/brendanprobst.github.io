import { createSignal, onCleanup, onMount } from "solid-js";
import { ProjectCardType, projects } from "./projectsData";
import { AiOutlineLeft, AiOutlineRight } from "solid-icons/ai";
import { FaRegularFileCode } from "solid-icons/fa";
import ProjectsList from "./projectsList";
interface ProjectCardProps {
	project: ProjectCardType;
	idx: number;
}
function ProjectCard({ project, idx }: ProjectCardProps) {
	let el;
	// onMount(() => {
	// 	const animation = el.animate({
	// 		duration: ProjectsList.length * 1000,
	// 		iterations: Infinity,
	// 		delay: idx * 1000,
	// 	});

	// 	onCleanup(() => animation.cancel());
	// });

	return (
		<a href={`/projects#${project.class}`}>
			<p class="hidden">{project.title}</p>
			<div
				class={`project-slide`}
				ref={el}
				style={`background-color: ${project.color || "#5f5ccf"}`}>
				<div class={`project-card`}>
					<h3 class="title">{project.title}</h3>
					<img src={project.logo} alt={`${project.title} logo`} />
					<p class="date">
						{project.date[0]} {project.date[1] ? `- ${project.date[1]}` : ""}
					</p>
					<div class="tag-container">
						{project.tags.map((item: string) => {
							return <div class="tag">{item}</div>;
						})}
					</div>
				</div>
			</div>
		</a>
	);
}
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
	function handleClass(idx: number) {
		let baseClass = "";

		if (idx === focus()) {
			return baseClass + " focused";
		}
		return baseClass + " not-focused";
	}
	function handlePrev() {
		if (focus() === 0) {
			return projectLength;
		} else {
			return focus() - 1;
		}
	}

	function startAutoScroll() {
		setDuration(3000);
	}
	function stopAutoScroll() {
		setDuration(0);
	}
	return (
		<>
			<div class="project-slide-deck">
				{projects.map((item: ProjectCardType, idx: number) => {
					return <ProjectCard project={item} idx={idx} />;
				})}
			</div>
		</>
	);
}
