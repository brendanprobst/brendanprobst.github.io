import {
	filterByType,
	filteringFor,
	projects,
	setFilteredProjects,
	setFilteringFor,
} from "./projectsData";

export default function ProjectHero() {
	return (
		<section id="hero">
			<h1>My Projects</h1>
			<div class="buttons">
				<button
					onClick={() => filterByType("Web App")}
					type={"button"}
					class={`${filteringFor() === "Web App" ? "selected" : ""}`}>
					<h3>Web Apps</h3>
				</button>
				<button
					onClick={() => filterByType("Mobile App")}
					type={"button"}
					class={`${filteringFor() === "Mobile App" ? "selected" : ""}`}>
					<h3>Mobile Apps</h3>
				</button>
				<button
					onClick={() => filterByType("Landing Page")}
					type={"button"}
					class={`${filteringFor() === "Landing Page" ? "selected" : ""}`}>
					<h3>Landing Pages</h3>
				</button>
			</div>
			<button
				class={`filter-btn ${
					filteringFor() !== undefined ? "visible" : "hidden"
				}`}
				onClick={() => {
					setFilteredProjects(projects);
					setFilteringFor(null);
				}}
				type="button">
				Clear Filter
			</button>
		</section>
	);
}
