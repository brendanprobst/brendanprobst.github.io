import { AiOutlineLink } from "solid-icons/ai";
import { BiRegularQr } from "solid-icons/bi";
import { IoMailOpen } from "solid-icons/io";
import { FaBrandsDiscord } from "solid-icons/fa";
import { BiLogosTelegram } from "solid-icons/bi";
import { VsLinkExternal } from "solid-icons/vs";
import { BiRegularCopy } from "solid-icons/bi";
import type { JSXElement } from "solid-js";
export default function ContactInfo({}) {
	type Contact = {
		icon: JSXElement | null;
		value: string;
		type: string;
	};
	const info: Contact[] = [
		{ type: "mail", icon: <IoMailOpen />, value: "bprobst1029@gmail.com" },
		{
			type: "mail",
			icon: <IoMailOpen />,
			value: "bprobst@stevens.edu",
		},
		{
			type: "mail",
			icon: <IoMailOpen />,
			value: "bprobst@quae.app",
		},
		{
			type: "discord",
			icon: <FaBrandsDiscord />,
			value: "brendo13#4482",
		},
		{
			type: "telegram",
			icon: <BiLogosTelegram />,
			value: "@brendanprobst",
		},
	];
	function handleCopy(value: string) {
		navigator.clipboard.writeText(value);
	}
	function handleQRCode(value: string, type: string) {}
	function handleOpen(value: string, type: string) {}
	return (
		<section id="contact-info">
			<h2>My Contact Info</h2>
			<ul class="list">
				{info.map((item: Contact) => {
					return (
						<li>
							<div class="icon">{item.icon}</div>
							<div class="info">
								<p>{item.value}</p>
							</div>
							<div class="icons">
								<button onClick={() => handleOpen(item.value, item.type)}>
									<VsLinkExternal class="icon" />
									<span class="hidden">open in app</span>
								</button>
								<button onclick={() => handleCopy(item.value)}>
									<BiRegularCopy class="icon" />
									<span class="hidden">copy value</span>
								</button>
								<button onclick={() => handleQRCode(item.value, item.type)}>
									<BiRegularQr class="icon" />
									<span class="hidden">open qr code</span>
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
