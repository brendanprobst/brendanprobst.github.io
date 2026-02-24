import {
	FaBrandsGithub,
	FaBrandsInstagram,
	FaBrandsLinkedin,
} from "solid-icons/fa";
import { BiRegularMenuAltRight } from "solid-icons/bi";
import { createSignal, onMount, onCleanup, createEffect } from "solid-js";
import { AiOutlineClose } from "solid-icons/ai";

const SCROLL_THRESHOLD = 100;

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);
	const [isScrolled, setIsScrolled] = createSignal(false);
	const [isReady, setIsReady] = createSignal(false);

	// Handle scroll detection
	function handleScroll() {
		if (typeof window === "undefined" || !isReady()) return;
		try {
			const scrollY = window.scrollY || 0;
			const nowScrolled = scrollY > SCROLL_THRESHOLD;
			const wasScrolled = isScrolled();
			
			if (wasScrolled !== nowScrolled) {
				setIsScrolled(nowScrolled);
			}
		} catch (error) {
			console.error("[Header] Error in handleScroll:", error);
		}
	}

	// Toggle mobile menu
	function toggleMobileMenu(event?: Event) {
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (!isReady()) return;
		setMobileMenuOpen((prev) => !prev);
	}

	// Close mobile menu
	function closeMobileMenu() {
		if (!isReady()) return;
		setMobileMenuOpen(false);
	}

	// Lock/unlock body scroll when mobile menu is open
	function toggleBodyScroll(lock: boolean) {
		if (typeof document === "undefined" || !isReady()) return;
		try {
			if (lock) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "";
			}
		} catch (error) {
			console.error("[Header] Error in toggleBodyScroll:", error);
		}
	}

	// Initialize component - ensure DOM is fully ready
	onMount(() => {
		// Double-check we're in browser
		if (typeof window === "undefined" || typeof document === "undefined") {
			return;
		}

		// Wait for DOM to be fully ready
		const init = () => {
			// Check if document is ready
			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", init);
				return;
			}

			// Set ready state and initialize
			setIsReady(true);
			
			// Check initial scroll position
			handleScroll();
			
			// Handle window resize to close mobile menu on desktop
			function handleResize() {
				const width = window.innerWidth;
				const isDesktop = width > 799;
				if (isDesktop && mobileMenuOpen()) {
					closeMobileMenu();
				}
			}
			
			// Add event listeners
			window.addEventListener("scroll", handleScroll, { passive: true });
			window.addEventListener("resize", handleResize, { passive: true });
			
			// Store handleResize for cleanup
			(window as any).__headerResizeHandler = handleResize;
		};

		// Use requestAnimationFrame to ensure DOM is ready
		requestAnimationFrame(() => {
			init();
		});

		// Cleanup
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", handleScroll);
				const resizeHandler = (window as any).__headerResizeHandler;
				if (resizeHandler) {
					window.removeEventListener("resize", resizeHandler);
					delete (window as any).__headerResizeHandler;
				}
			}
			toggleBodyScroll(false);
		};
	});

	// Handle body scroll lock when mobile menu opens/closes
	createEffect(() => {
		if (isReady()) {
			toggleBodyScroll(mobileMenuOpen());
		}
	});

	// Cleanup body scroll lock on unmount
	onCleanup(() => {
		toggleBodyScroll(false);
	});

	return (
		<header
			class="header"
			classList={{
				"header--scrolled": isScrolled(),
				"header--mobile-open": mobileMenuOpen(),
			}}>
			<div class="header__container">
				{/* Logo - always visible */}
				<a href="/" class="header__logo" aria-label="Home">
					<img src="/white_logo.png" alt="Logo" />
				</a>

				{/* Desktop Navigation Links */}
				<nav
					class="header__nav"
					classList={{ "header__nav--visible": isScrolled() }}
					aria-label="Main navigation">
					<a href="/" class="header__nav-link">
						Home
					</a>
					<a href="/projects" class="header__nav-link">
						Projects
					</a>
				</nav>

				{/* Desktop Social Links */}
				<div
					class="header__social"
					classList={{ "header__social--visible": isScrolled() }}
					aria-label="Social links">
					<a
						href="https://www.linkedin.com/in/brendan-probst-a951ab1a8/"
						class="header__social-link"
						aria-label="Visit my LinkedIn account"
						target="_blank"
						rel="noopener noreferrer">
						<FaBrandsLinkedin />
					</a>
					<a
						href="https://github.com/brendanprobst"
						class="header__social-link"
						aria-label="Visit my GitHub account"
						target="_blank"
						rel="noopener noreferrer">
						<FaBrandsGithub />
					</a>
					<a
						href="https://www.instagram.com/bprobst_13/"
						class="header__social-link"
						aria-label="Visit my Instagram account"
						target="_blank"
						rel="noopener noreferrer">
						<FaBrandsInstagram />
					</a>
				</div>

				{/* Mobile Menu Button - always visible on mobile */}
				<button
					class="header__menu-button"
					onClick={toggleMobileMenu}
					aria-label="Toggle menu"
					{...(mobileMenuOpen() ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
					type="button">
					<BiRegularMenuAltRight />
					<span class="sr-only">Menu</span>
				</button>
			</div>

			{/* Mobile Menu - Simple conditional render */}
			{mobileMenuOpen() && (
				<>
					<div
						class="header__mobile-overlay"
						onClick={closeMobileMenu}
						aria-hidden="true"
					/>
					<div class="header__mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile menu">
						<nav class="header__mobile-nav" aria-label="Mobile navigation">
							<a href="/" class="header__mobile-link" onClick={closeMobileMenu}>
								Home
							</a>
							<a href="/projects" class="header__mobile-link" onClick={closeMobileMenu}>
								Projects
							</a>
						</nav>

						<div class="header__mobile-social" aria-label="Mobile social links">
							<a
								href="https://www.linkedin.com/in/brendan-probst-a951ab1a8/"
								class="header__mobile-social-link"
								aria-label="Visit my LinkedIn account"
								target="_blank"
								rel="noopener noreferrer">
								<FaBrandsLinkedin />
							</a>
							<a
								href="https://github.com/brendanprobst"
								class="header__mobile-social-link"
								aria-label="Visit my GitHub account"
								target="_blank"
								rel="noopener noreferrer">
								<FaBrandsGithub />
							</a>
							<a
								href="https://www.instagram.com/bprobst_13/"
								class="header__mobile-social-link"
								aria-label="Visit my Instagram account"
								target="_blank"
								rel="noopener noreferrer">
								<FaBrandsInstagram />
							</a>
						</div>

						<button
							class="header__close-button"
							onClick={closeMobileMenu}
							aria-label="Close menu"
							type="button">
							<AiOutlineClose />
							<span class="sr-only">Close</span>
						</button>
					</div>
				</>
			)}
		</header>
	);
}
