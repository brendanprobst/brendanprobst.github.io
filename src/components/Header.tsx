import {
	FaBrandsGithub,
	FaBrandsInstagram,
	FaBrandsTwitter,
	FaBrandsMedium,
	FaBrandsLinkedin,
} from "solid-icons/fa";
import { BiRegularMenuAltRight } from "solid-icons/bi";
import { createSignal } from "solid-js";
import { AiOutlineClose } from "solid-icons/ai";
// TODO: add a wrapper container so blur effect looks nice on bigger screens

export default function Header() {
	const [mobileVisible, setMobileVisible] = createSignal(false);
	const [scrolled, setScrolled] = createSignal(false);
	function handleShow() {
		setMobileVisible(true);
	}
	function handleClose() {
		setMobileVisible(false);
	}
	function handleScroll(event: any) {
		let scroll = window.scrollY;
		if (scroll > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}
	document.addEventListener("scroll", (e) => handleScroll(e));
	return (
		<header
			class={`${mobileVisible() ? "show" : ""} ${
				scrolled() ? "scrolled" : ""
			}`}>
			<a href="/" class="logo">
				<img src="/white_logo.png" alt="my logo" />
			</a>
			<div class={`links ${mobileVisible() ? "show" : ""}`} id="nav-links">
				<a href="/" class="home">
					Home
				</a>
				<a href="/projects" class="projects">
					Projects
				</a>
				{/* <a href="/about_me" class="about_me">
					About Me
				</a> */}
				<a href="/contact_me" class="say_hello">
					Say Hello!
				</a>
			</div>
			<div class={`socials ${mobileVisible() ? "show" : ""}`} id="social-links">
				<a
					aria-label="visit my linkedin account"
					class="linkedin"
					href="https://www.linkedin.com/in/brendan-probst-a951ab1a8/ "
					target="_blank"
					rel="noopener noreferrer">
					<FaBrandsLinkedin />
				</a>
				<a
					aria-label="visit my instagram account"
					class="instagram"
					href="https://github.com/brendanprobst"
					target="_blank"
					rel="noopener noreferrer">
					<FaBrandsGithub />
				</a>
				<a
					aria-label="visit my instagram account"
					class="instagram"
					href="https://www.instagram.com/bprobst_13/"
					target="_blank"
					rel="noopener noreferrer">
					<FaBrandsInstagram />
				</a>
				<a
					aria-label="visit my twitter page"
					class="twitter"
					href="https://twitter.com/brendanprobst"
					target="_blank"
					rel="noopener noreferrer">
					<FaBrandsTwitter />
				</a>

				<a
					aria-label="visit my medium page"
					class="medium"
					href="https://medium.com/@brendanprobst"
					target="_blank"
					rel="noopener noreferrer">
					<FaBrandsMedium />
				</a>
			</div>
			<button class="menu" onClick={() => handleShow()}>
				<BiRegularMenuAltRight />
				<p class="hidden">menu button</p>
			</button>
			<button
				class={`close ${mobileVisible() ? "show" : ""}`}
				onClick={() => handleClose()}>
				<AiOutlineClose />
				<p class={`hidden `}>close</p>
			</button>
			<button
				class={`behind-mobile-menu ${mobileVisible() ? "show" : ""}`}
				onclick={() => handleClose()}>
				<p class="hidden">close</p>
			</button>
		</header>
	);
}
