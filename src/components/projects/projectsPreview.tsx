import { createSignal, onCleanup } from "solid-js";
import { ProjectCardType, projects } from "./projectsData";
import "solid-slider/slider.css";
import { Slider, SliderProvider, SliderButton } from "solid-slider";
export default function ProjectsPreview() {
	const duration = 3000;
	const [focus, setFocus] = createSignal(0);
	const timer = setInterval(() => setFocus(handleNext()), duration);
	onCleanup(() => clearInterval(timer));
	const projectLength = projects?.length - 1;
	function handleNext() {
		if (focus() === projectLength) {
			return 0;
		} else {
			return focus() + 1;
		}
	}

	return (
		<div class="project-preview">
			<SliderProvider>
				<Slider options={{ loop: true }}>
					{projects.map((item: ProjectCardType, idx: number) => {
						return (
							<a
								class={`project-wrapper`}
								id={`${item.class}-wrapper-${idx}`}
								href={`/projects#${item.class}`}>
								<p class="hidden">{item.title}</p>
								<div class={`project-card`} id={`${item.class}-card`}>
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
				</Slider>

				<div id="project-slider-controls">
					<SliderButton prev class="prev">
						<span class="carousel-control">&lsaquo;</span>
					</SliderButton>

					<SliderButton next class="next">
						<span class="carousel-control">&rsaquo;</span>
					</SliderButton>
				</div>
			</SliderProvider>
		</div>
	);
}
