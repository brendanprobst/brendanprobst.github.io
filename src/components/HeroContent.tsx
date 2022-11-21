console.log("wow, i'm here");

export default function HeroContent() {
	const lines = [
		"I'm a Developer",
		"I'm a Entrepreneur",
		"I'm a Foodie",
		"I'm a Cat Owner",
		"I'm a Software Engineer",
		"I'm a Problem Solver",
		"I'm a MotorSport Fan",
		"I'm a Sim Racer",
		"I'm a UI/UX Designer",
		"I'm a Builder",
	];
	return (
		<section class="hero-content">
			<div class="text">
				<h1 class="title">Hi, I'm Brendan</h1>
				<div class="sub-titles">
					{lines.map((item) => {
						return <div class="line">{item}</div>;
					})}
				</div>
			</div>
			<img
				src="/public/img/shapes/ring1.svg"
				class="ring ring1"
				alt="a colorful ring"
			/>
			<img
				src="/public/img/shapes/ring2.svg"
				class="ring ring2"
				alt="a colorful ring"
			/>
			<img
				src="/public/img/shapes/ring3.svg"
				class="ring ring3"
				alt="a colorful ring"
			/>
		</section>
	);
}
