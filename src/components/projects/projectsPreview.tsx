export default function Projects({}) {
	const projects = [
		{
			title: "LeaveNow",
			link: "https://leavenow.app",
			tags: ["React-Native", "Expo"],
			logo: "/public/img/logos/LN_logo.png",
		},
	];
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
