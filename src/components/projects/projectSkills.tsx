import { projects } from "./projectsData";

let skills: string[] = [];
for (let project of projects) {
	if (!project.visible) continue;
	for (let skill of project.tags) {
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
