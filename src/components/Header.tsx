import HeaderLink from "./HeaderLink.astro";
import { SITE_TITLE } from "../config";
import {
	FaBrandsGithub,
	FaBrandsInstagram,
	FaBrandsTwitter,
	FaBrandsMedium,
} from "solid-icons/fa";
export default function Header() {
	return (
		<header class="header">
			<div class="links">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xwxrp05i6o8-406%3A773?alt=media&token=41cd0db5-9801-4784-831a-3268fc83937d"
					alt="Not Found"
					class="logo"
				/>
				<a href="">
					<p class="projects">Projects</p>
				</a>
				<a href="">
					<p class="about_me">About Me</p>
				</a>
				<a href="">
					<p class="say_hello">Say Hello!</p>
				</a>
			</div>
			<div class="socials">
				<a href="">
					<FaBrandsGithub />
				</a>
				<a href="">
					<FaBrandsInstagram />
				</a>
				<a href="">
					<FaBrandsTwitter />
				</a>
				<a href="">
					<FaBrandsMedium />
				</a>
			</div>
		</header>
	);
}
