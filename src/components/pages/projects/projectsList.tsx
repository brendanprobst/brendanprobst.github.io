import { IconWrapper, ContentBlock } from "../../ui";
import { filteredProjects } from "./projectsData";
export default function ProjectsList({}) {
	return (
		<div class="projects-container">
			{filteredProjects().map((item) => {
				return (
					<div id={item.class}>
						<div class={`project-card`}>
							<div class="header">
								<img src={item.logo} alt={`${item.title} logo`} />
								<div class="content">
									<h3 class="title">{item.title}</h3>
									<h4 class="sub-title">{item.subText}</h4>
									<h4>
										{item.date[0]} {item.date[1] ? `- ${item.date[1]}` : ""}
									</h4>
								</div>
								<div class="icons">
									{item.icons?.map((item) => {
										return <IconWrapper {...item} />;
									})}
								</div>
							</div>
							<div class="tag-container">
								{item.tags.map((item) => {
									return <div class="tag">{item}</div>;
								})}
							</div>
							<div class="blocks">
								{item.blocks?.map((item) => {
									return <ContentBlock {...item} />;
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
