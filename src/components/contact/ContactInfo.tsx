import { AiOutlineLink } from "solid-icons/ai";
import { BiRegularQr } from "solid-icons/bi";
import { IoMailOpen } from "solid-icons/io";
import { FaBrandsDiscord } from "solid-icons/fa";
import { BiLogosTelegram } from "solid-icons/bi";
import { VsLinkExternal } from "solid-icons/vs";
import { BiRegularCopy } from "solid-icons/bi";
import type { JSXElement } from "solid-js";
import QRCode from "qrcode";
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
	function handleQRCode(value: string, type: string) {
		QRCode.toDataURL("I am a pony!")
			.then((url) => {
				console.log(url);
			})
			.catch((err) => {
				console.error(err);
			});

		// With async/await
	}
	const generateQR = async (text) => {
		try {
			console.log(await QRCode.toDataURL(text));
		} catch (err) {
			console.error(err);
		}
	};
	function handleLink(value: string, type: string) {
		let result = "";
		if (type === "mail") {
			result = "mailto:" + value;
		}
		console.log(result);
		return result;
	}
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
								<a
									class="button"
									href={handleLink(item.value, item.type)}
									target="_blank"
									rel="noopener"
									type="button">
									<VsLinkExternal class="icon" />
									<span class="hidden">open in app</span>
								</a>
								<button onclick={() => handleCopy(item.value)} type="button">
									<BiRegularCopy class="icon" />
									<span class="hidden">copy value</span>
								</button>
								<button
									onclick={() => handleQRCode(item.value, item.type)}
									type="button">
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
