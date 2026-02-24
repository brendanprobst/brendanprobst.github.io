import ProjectIcon from "../ui/linkIcon";
import Block from "../ui/dynamicContentBlock";
import { projects, filteredProjects } from "./projectsData";
import { For } from "solid-js";

export default function ProjectsList({}) {
  return (
    <div class="projects-container">
      <For each={filteredProjects().filter(item => item.visible)}>
        {(item, index) => {
          const projectId = `project-${index()}-${item.class}`;
          return (
            <div id={projectId}>
              <div class={`project-card`}>
                <div class="header">
                  <img src={item.logo} alt={`${item.title} logo`} />
                  <div class="content">
                    <h3 class="title">{item.title}</h3>
                    <h4 class="sub-title">{item.subText}</h4>
                    <h4>
                      {item.date[0]} {item.date[1] ? `- ${item.date[1]}` : ""}
                    </h4>
                  </div>
                  <div class="icons">
                    <For each={item.icons}>
                      {(icon) => <ProjectIcon {...icon} />}
                    </For>
                  </div>
                </div>
                <div class="tag-container">
                  <For each={item.tags}>
                    {(tag) => <div class="tag">{tag}</div>}
                  </For>
                </div>
                <div class="blocks">
                  <For each={item.blocks}>
                    {(block, blockIndex) => {
                      const blockId = `${item.class}-block-${blockIndex()}-${block.type}`;
                      return <Block id={blockId} {...block} />;
                    }}
                  </For>
                </div>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
}
