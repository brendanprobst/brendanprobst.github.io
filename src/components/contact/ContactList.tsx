import { BiRegularQr, BiSolidCopy } from "solid-icons/bi";
import { VsLinkExternal } from "solid-icons/vs";
import { ContactData, type Contact } from "./contactData";
import { createSignal } from "solid-js";
import toast, { Toaster } from "solid-toast";
export default function ContactList({}) {
	function handleCopy(value: string) {
		console.log("Here");
		try {
			navigator.clipboard.writeText(value);
			toast.success(`${value} copied to clipboard!`);
		} catch (err) {
			console.error("Could not copy text: ", err);
		}
	}
	const [useWindow, setUseWindow] = createSignal();
	function handleQRCode(value: string, type: string) {
		// 	QRCode.toDataURL("I am a pony!")
		// 		.then((url) => {
		// 			console.log(url);
		// 			generateQR(url);
		// 		})
		// 		.catch((err) => {
		// 			console.error(err);
		// 		});
		// 	// With async/await
		// }
		// const generateQR = async (text) => {
		// 	try {
		// 		console.log(await QRCode.toDataURL(text));
		// 	} catch (err) {
		// 		console.error(err);
		// 	}
	}

	return (
		<section id="contact-info">
			<h2>My Contact Info</h2>
			<ul class="list">
				{ContactData.map((item: Contact) => (
					<li>
						<div class="icon">{item.icon}</div>
						<div class="info">
							<p>{item.value}</p>
						</div>
						<div class="icons">
							<a
								class="button"
								href={item.link}
								target="_blank"
								rel="noopener"
								type="button">
								<VsLinkExternal class="icon" />
								<span class="hidden">open in app</span>
							</a>

							<button
								onclick={() => handleCopy(item.value)}
								type="button"
								id="copy-button">
								<BiSolidCopy class="icon" />
								<span class="hidden">copy email</span>
							</button>
							{/* <button
								onclick={() => handleQRCode(item.value, item.type)}
								type="button">
								<BiRegularQr class="icon" />
								<span class="hidden">open qr code</span>
							</button> */}
						</div>
					</li>
				))}
			</ul>
			<Toaster />
		</section>
	);
}
