import { BsChatFill } from "solid-icons/bs";
export default function HeroImages() {
	return (
		<section class="hero-images">
			<div class="img-container">
				<img src={"/public/img/brendan_1.jpg"} alt="picture of me" />
				<button class="container" onClick={() => console.log("clicked")}>
					<h4>Send Me A Message</h4>
					<BsChatFill class="icon" />
				</button>
			</div>
		</section>
	);
}
