import DynamicContentBlock from "../ui/dynamicContentBlock";
import type { LandingModuleType } from "../../types/landing/landingModuleType";
import { For } from "solid-js";


export default function LandingModule({
	title = "",
	headline,
	subHeadline,
	link,
	linkText,
	blocks,
	children,
}: LandingModuleType) {
	return (
		<div class={`grid-section ${title?.toLowerCase()}`}>
			<div class="header">
				<div>
					<h2>{title}</h2>
					{link ? (
						<a
							href={link}
							target={link.indexOf("https") !== -1 ? "_blank" : ""}
							rel="noopener">
							{linkText ? linkText : "Learn More"}
						</a>
					) : null}
				</div>
				<h3 class="headline">{headline}</h3>
				<h4 class="sub-headline">{subHeadline}</h4>
			</div>
			<For each={blocks}>
				{(item, index) => {
					const uniqueId = `block-${index()}-${item.type}-${item.content?.substring(0, 10) || ''}`;
					return <DynamicContentBlock id={uniqueId} {...item} />;
				}}
			</For>
			{children}
		</div>
	);
}
