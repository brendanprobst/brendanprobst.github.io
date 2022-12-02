import { projects } from "./projects/projectsData";

let skills: string[] = [];
for (let project of projects) {
	console.log(project);
	for (let skill of project.tags) {
		console.log(skill);
		if (skills.indexOf(skill) === -1) {
			skills.push(skill);
		}
	}
}
export default function SkillList() {
	return (
		<div class="skill-container">
			{skills.map((item) => {
				return <p class="tag">{item}</p>;
			})}
		</div>
	);
}
