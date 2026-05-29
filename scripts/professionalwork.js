function applyHighlights(text, highlights) {
    highlights.forEach(word => {
        text = text.replace(new RegExp(word, "g"), `<span class="highlight">${word}</span>`);
    });
    return text;
}

function buildProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const projectInfo = document.createElement("div");
    projectInfo.className = "project-info";
    projectInfo.innerHTML = `
        <div class="project-name">${project.projectName}</div>
        <div class="company-name">${project.companyName}</div>
    `;
    
    const otherInfo = document.createElement("div");
    otherInfo.className = "other-info";
    otherInfo.innerHTML = `<div class="misc-info">${project.role} • ${project.engine} • ${project.projectDuration}</div>`;
    
    const platforms = document.createElement("div");
    platforms.className = "platforms";
    platforms.innerHTML = project.platformInformation.map(platformInfo => `
        <a href="${platformInfo.platformLink}" target="_blank"><i class="${platformInfo.platformIcon}"></i></a>
    `).join("");
    
    otherInfo.appendChild(platforms);
    
    const content = document.createElement("div");
    content.className = "content";
    content.innerHTML = `<img class="media" src="${project.projectImage}" alt="">` +
        project.descriptionParagraphs
            .map((paragraph, index) => `<p>${index === 0 ? applyHighlights(paragraph, project.highlightedWords) : paragraph}</p>`)
            .join("");

    projectDiv.appendChild(projectInfo);
    projectDiv.appendChild(otherInfo);
    projectDiv.appendChild(content);

    return projectDiv;
}

const container = document.getElementById("project-list");

fetch("data/professionalwork.json")
    .then(response => response.json())
    .then(projects => {
        projects.forEach((project, index) => {
            if (index > 0) {
                container.appendChild(document.createElement("hr"));
            }
            container.appendChild(buildProjectDiv(project));
        });
    });