import { AiOutlineLink } from "solid-icons/ai";
import { BiRegularQr } from "solid-icons/bi";
import { IoMailOpen } from "solid-icons/io";
import { FaBrandsDiscord } from "solid-icons/fa";
import { BiLogosTelegram } from "solid-icons/bi";
import type { JSXElement } from "solid-js";
export default function ContactInfo({}) {
	type Contact = {
		icon: JSXElement;
		info: string[];
	};
	const info = [
		{
			icon: <IoMailOpen />,
			info: [
				"bprobst1029@gmail.com",
				"bprobst@stevens.edu",
				"bprobst@quae.app",
			],
		},
	];
	return (
		<section id="contact-info">
			<h2>My Contact Info</h2>
			<ul>
				{info.map((item: Contact) => {
					return (
						<li>
							{item.icon}
							{item.info.map((item) => {
								return <>{item}</>;
							})}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
