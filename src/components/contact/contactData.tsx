import { BiRegularQr } from "solid-icons/bi";
import { IoMailOpen } from "solid-icons/io";
import { FaBrandsDiscord } from "solid-icons/fa";
import { BiLogosTelegram } from "solid-icons/bi";
import { VsLinkExternal } from "solid-icons/vs";
import { BiRegularCopy } from "solid-icons/bi";
import type { JSXElement } from "solid-js";
export type Contact = {
	icon: JSXElement | null;
	value: string;
	type: string;
	link?: string;
};
export const ContactData: Contact[] = [
	{
		type: "mail",
		icon: () => <IoMailOpen />,
		value: "bprobst1029@gmail.com",
		link: "mailto:bprobst1029@gmail.com",
	},
	{
		type: "mail",
		icon: <IoMailOpen />,
		value: "bprobst@stevens.edu",
		link: "mailto:bprobst@stevens.edu",
	},
	{
		type: "mail",
		icon: <IoMailOpen />,
		value: "bprobst@quae.app",
		link: "mailto:bprobst@quae.app",
	},
	{
		type: "discord",
		icon: <FaBrandsDiscord />,
		value: "brendo13#4482",
		link: "https://discordapp.com/users/brendo13#4482",
	},
	{
		type: "telegram",
		icon: <BiLogosTelegram />,
		value: "@brendanprobst",
		link: "https://t.me/brendanprobst",
	},
];
