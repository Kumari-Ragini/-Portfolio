$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        let menu = document.querySelector("#menu");
        let navbar = document.querySelector(".navbar");
        let scrollTop = document.querySelector("#scroll-top");

        if (menu) menu.classList.remove("fa-times");
        if (navbar) navbar.classList.remove("nav-toggle");

        if (scrollTop) {
            if (window.scrollY > 60) {
                scrollTop.classList.add("active");
            } else {
                scrollTop.classList.remove("active");
            }
        }
    });
});

// Visibility Change (Favicon Update)
document.addEventListener('visibilitychange', function() {
    let favicon = document.getElementById("favicon");
    if (!favicon) return;

    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Kumari Ragini";
        favicon.href = "/assets/images/favicon.png";
    } else {
        document.title = "Come Back To Portfolio";
        favicon.href = "/assets/images/favhand.png";
    }
});

// Fetch and Show Projects
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => data);
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    if (!projectsContainer) return;

    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
            <img draggable="false" src="assets/images/projects/${project.image}.png" alt="project" />
            <div class="content">
                <div class="tag">
                <h3>${project.name}</h3>
                </div>
                <div class="desc">
                <p>${project.desc}</p>
                <div class="btns">
                    <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                </div>
                </div>
            </div>
        </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;
}

getProjects().then(data => showProjects(data));
