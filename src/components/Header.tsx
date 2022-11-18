import HeaderLink from "./HeaderLink.astro";
import { SITE_TITLE } from "../config";
export default function Header() {
	return (
		<header class="header flex-row-vstart-hsb">
			<div class="links">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xwxrp05i6o8-406%3A773?alt=media&token=41cd0db5-9801-4784-831a-3268fc83937d"
					alt="Not Found"
					class="logo"
				/>
				<p class="projects">Projects</p>
				<p class="about_me">About Me</p>
				<p class="say_hello">Say Hello!</p>
			</div>
			<div class="socials">
				<div class="rectangle-21" />
				<div class="rectangle-21" />
				<div class="rectangle-21" />
				<div class="rectangle-21" />
			</div>
		</header>
	);
}
